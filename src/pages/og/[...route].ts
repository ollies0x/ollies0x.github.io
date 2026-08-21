import type { APIRoute } from 'astro';
import satori from 'satori';
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { getPosts } from '../../utils/posts';

const fontDir = join(process.cwd(), 'src', 'assets', 'fonts');
const displayFont = readFileSync(join(fontDir, 'SpaceGrotesk-700.ttf'));
const monoFont = readFileSync(join(fontDir, 'JetBrainsMono-400.ttf'));

function card(title: string, tag: string) {
  return {
    type: 'div',
    props: {
      style: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#0a0a0a',
        padding: '72px',
        backgroundImage:
          'radial-gradient(circle at 50% 0%, rgba(0,255,85,0.14) 0%, rgba(0,0,0,0) 55%)',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              color: '#6f6f6c',
              fontSize: '28px',
            },
            children: [
              {
                type: 'span',
                props: {
                  style: { color: '#00ff55' },
                  children: '> ',
                },
              },
              { type: 'span', props: { children: tag } },
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              color: '#e8e8e6',
              fontSize: title.length > 60 ? '64px' : '76px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: '92%',
            },
            children: title,
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    fontSize: '44px',
                    fontWeight: 700,
                    color: '#e8e8e6',
                    letterSpacing: '-0.02em',
                  },
                  children: [
                    { type: 'span', props: { children: 'ollies' } },
                    { type: 'span', props: { children: '0x', style: { color: '#00ff55' } } },
                  ],
                },
              },
              {
                type: 'div',
                props: {
                  style: { display: 'flex', color: '#6f6f6c', fontSize: '26px' },
                  children: 'ollies0x.github.io',
                },
              },
            ],
          },
        },
      ],
    },
  };
}

export const GET: APIRoute = async ({ params, props }) => {
  const svg = await satori(card(props.title as string, props.tag as string), {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Space Grotesk', data: displayFont, weight: 700, style: 'normal' },
      { name: 'JetBrains Mono', data: monoFont, weight: 400, style: 'normal' },
    ],
  });
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};

export async function getStaticPaths() {
  const posts = await getPosts();
  return [
    {
      params: { route: 'default.png' },
      props: { title: 'Build logs on SEO, AI and design.', tag: 'building in public' },
    },
    ...posts.map((post) => ({
      params: { route: `${post.id}.png` },
      props: { title: post.data.title, tag: post.data.tags[0] ?? 'blog' },
    })),
  ];
}
