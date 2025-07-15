import { serialize } from 'next-mdx-remote/serialize';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypePrism from 'rehype-prism-plus';


export async function parseMDX(source: string) {
  return await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, rehypePrism],
    },
    parseFrontmatter: true,
  });
}
