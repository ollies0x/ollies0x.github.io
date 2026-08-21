import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getPosts } from '../utils/posts';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: 'ollies0x',
    description:
      'Marketing, SEO, code and AI. Build logs and deep thoughts from Ollie Worthington.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: '<language>en-AU</language>',
  });
}
