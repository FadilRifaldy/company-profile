import { getNewsDetail } from "@/lib/backendless";
import HighlightSection from "@/component/highlight";
import Link from "next/link";

export default async function BlogDetail(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const slug = params.slug;
  const data = await getNewsDetail(slug);

  const paragraphs: string[] = data.content
    ? data.content
        .split(/\n{2,}|\r?\n/)
        .filter((p: string) => p.trim() !== "")
    : [];

  return (
    <div>
      <article className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-[18px] text-gray-500 mb-6">Pocari News</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {data.title}
        </h1>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <span>by {data.author || "Admin"}</span>
          <span>•</span>
          <span>
            {new Date(data.created).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span>•</span>
          <span>3 min read</span>
        </div>
        {data.imgurl && (
          <img
            src={data.imgurl}
            alt={data.title}
            className="w-full rounded-xl shadow-lg mb-6"
          />
        )}
        <div className="max-w-none text-gray-800 leading-relaxed">
          {paragraphs.length > 0 ? (
            paragraphs.map((p: string, i: number) => (
              <p key={i} className="mb-5 text-[17px]">
                {p}
              </p>
            ))
          ) : (
            <p>Tidak ada konten.</p>
          )}
        </div>
      </article>
      <div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Pocari News</h2>
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-colors"
            >
              See All Articles
            </Link>
          </div>
        </div>
      </div>
      <div className="pb-20">
        <HighlightSection />
      </div>
    </div>
  );
}
