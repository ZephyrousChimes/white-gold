import fs from 'fs';
import path from 'path';
import { parseMDX } from '@/lib/mdx';
import MDXRenderer from './MDXRenderer';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function generateStaticParams() {
  const files = fs.readdirSync(postsDirectory);
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ''),
  }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }>}) {
  const { slug } = await params;
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { mdxSource } = await parseMDX(fileContent);

  return (
    <article>
      <MDXRenderer mdxSource={mdxSource} />
    </article>
  );
}
