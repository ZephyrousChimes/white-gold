// import CpuModel from '@/components/CpuModel';
import MDXRenderer from 'components/MDXRenderer';
import { getSerializedMdxForSlug } from '@/lib/mdxUtils';

export default async function CpuInspectorPage() {
  const { mdxSource } = await getSerializedMdxForSlug('cpu-architecture-performance-engineering');

  return (
    <div className="cpu-inspector">
      <h1>CPU Inspector</h1>
      {/* <CpuModel /> */}
      {mdxSource ? (
        <article className="prose">
          <MDXRenderer mdxSource={mdxSource} />
        </article>
      ) : (
        <p>No content available.</p>
      )}
    </div>
  );
}
