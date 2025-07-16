import fs from 'fs';
import path from 'path';
import { parseMDX } from '@/lib/mdx';
import Link from 'next/link';

type PostMetadata = {
  slug: string;
  title: string;
  date: string;
};

async function getAllPosts(): Promise<PostMetadata[]> {
  const postsDir = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDir);

  const posts = await Promise.all(
    files.map(async (filename) => {
      const fileContent = fs.readFileSync(path.join(postsDir, filename), 'utf8');
      const { frontmatter } = await parseMDX(fileContent);
      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: frontmatter.title,
        date: frontmatter.date,
      };
    })
  );

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <article>
      <h1>Blog Index</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <strong>{post.title}</strong> <em>({post.date})</em>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
