'use client'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

type MDXProps<TScope = any, TFrontmatter = any> = {
    mdxSource: MDXRemoteSerializeResult<TScope, TFrontmatter>;
};

export default function MDX<TScope = any, TFrontmatter = any>({ mdxSource }: MDXProps<TScope, TFrontmatter>) {
    return <MDXRemote {...mdxSource} />;
}
