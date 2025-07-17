import { serialize } from 'next-mdx-remote/serialize';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypePrism from 'rehype-prism-plus';
import grayMatter from 'gray-matter'
import { MDXRemoteSerializeResult } from 'next-mdx-remote';


interface Frontmatter {
  title: string;
  date: string;
  excerpt?: string;
}

export async function parseMDX(fileContent: string): Promise<{
  mdxSource: MDXRemoteSerializeResult;
  frontmatter: Frontmatter;
}> 
 {
  const { content, data } = grayMatter(fileContent);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, rehypePrism],
    },
    parseFrontmatter: false,
  });

  return {
    mdxSource,
    frontmatter: data as Frontmatter,
  };
}

