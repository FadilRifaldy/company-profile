import { getHomepageHighlights } from "@/lib/backendless";
import Link from "next/link";

export default async function HighlightSection() {
  const articles = await getHomepageHighlights();

  return (
    <div className="max-w-7xl mx-auto px-7">
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article, idx) => (
          <Link
            key={idx}
            href={`/blog/${article.objectId}`}
            target="_blank"
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-transform hover:scale-102 duration-500"
          >
            <article className="flex flex-col h-full">
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={article.imgurl}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-5 pt-4 space-y-3 flex-1">
                <h3 className="text-xl font-semibold text-gray-800 leading-tight pb-5">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {article.content}
                </p>
                <div className="pt-3 pb-3 flex items-center text-xs text-gray-400 space-x-4 border-t-2 border-gray-300">
                  <span>
                    Created : {""}
                    {new Date(article.created).toLocaleDateString("id-ID", {})}
                  </span>{" "}
                  <span>Author : {article.author}</span>
                  <span>3 min read</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}