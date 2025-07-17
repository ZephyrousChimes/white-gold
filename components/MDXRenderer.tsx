'use client'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

type MDXProps<TScope = unknown, TFrontmatter = unknown> = {
    mdxSource: MDXRemoteSerializeResult<TScope, TFrontmatter>;
};

export default function MDXRenderer<TScope = unknown, TFrontmatter = unknown>({ mdxSource }: MDXProps<TScope, TFrontmatter>) {
    return <MDXRemote {...mdxSource} />;
}
