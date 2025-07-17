import { readFile } from 'fs/promises';
import path from 'path';
import { parseMDX } from './mdxParser';

export async function getSerializedMdxForSlug(slug: string) {
  const mdxPath = path.resolve(process.cwd(), `src/app/posts/${slug}/content.mdx`);

  try {
    const mdxContent = await readFile(mdxPath, 'utf8');
    return await parseMDX(mdxContent);
  } catch {
    return { mdxSource: null } ;
  }
}
