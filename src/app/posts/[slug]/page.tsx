import fs from 'fs';
import path from 'path';
import { parseMDX } from '@/lib/mdx';
import MDX from './MDX';

type Props = {
  params: {
    slug: string;
  };
};

const postsDirectory = path.join(process.cwd(), 'posts');

export async function generateStaticParams() {
  const files = fs.readdirSync(postsDirectory);
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ''),
  }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const mdxSource = await parseMDX(fileContent);

  return (
    <article>
      <MDX mdxSource={mdxSource} />
    </article>
  );
}
