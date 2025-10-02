import { getNewsHeadline } from "@/lib/backendless";
import Link from "next/link";

export default async function BlogPage() {
  const articles = await getNewsHeadline();

  // ambil artikel pertama sebagai "headline"
  const headline = articles.length > 0 ? articles[0] : null;

  return (
    <div className="max-w-7xl mx-auto px-8">
      {/* Headline Section */}
      {headline && (
        <div className="font-poppins grid lg:grid-cols-3 gap-12 pt-10 pb-16">
          {/* Left big content */}
          <div className="lg:col-span-2">
            <h1 className="text-[32px] font-bold mb-6">Pocari News</h1>

            <div className="shadow-xl mb-8 text-[32px]">
              <img
                src={headline.imgurl}
                alt={headline.title}
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold mb-3">{headline.title}</h2>
            <p className="mb-4 line-clamp-2 text-[16px] text-[#717171]">
              {headline.content}
            </p>
            <div className="pt-3 flex items-center text-[14px] text-gray-400 space-x-4 border-t-2 border-gray-300">
              <span>
                Created : {""}
                {new Date(headline.created).toLocaleDateString("id-ID", {})}
              </span>{" "}
              <span>Author : {headline.author}</span>
              <span>3 min read</span>
            </div>
          </div>

          {/* Placeholder "For Your Daily Reads" */}

          <div className="h-full flex flex-col">
            <div>
              <input
                type="text"
                placeholder="Search article..."
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-50"
              />
            </div>

            {/* card diperbesar */}
            <div className="flex-1 mt-7">
              <div className="h-full bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-2xl shadow-md p-10 text-center hover:shadow-xl transition duration-500 flex flex-col">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                    Inspire Others with Your Words
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Punya cerita, pengalaman, atau tips menarik tentang gaya
                    hidup sehat? Bagikan ceritamu dengan dunia. Tulis
                    pengalaman, opini, atau inspirasimu, dan biarkan orang lain
                    ikut merasakannya. Setiap ide memiliki nilai, dan tulisanmu
                    bisa menjadi inspirasi bagi banyak orang di luar sana. Buat
                    blog pertamamu sekarang, dan biarkan ceritamu menginspirasi
                    dunia!
                  </p>
                  <p className="font-semibold text-gray-600 mb-6 italic">
                    Your story could be the light for someone else
                  </p>
                  <p className="text-sm text-gray-400 mb-6">
                    120+ blogs shared this month
                  </p>
                </div>
                <Link
                  href="/create-blog"
                  className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
                >
                  + Create Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Articles Section */}
      <div className="text-[32px] font-semibold shadow-text-lg">
        Articles List
      </div>
      {/* Articles Grid */}
      <div className="grid md:grid-cols-3 gap-8 pt-6 pb-20">
        {articles.map((article, idx) => (
          <Link
            key={idx}
            href={`/blog/${article.objectId}`}
            target="_blank"
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-transform hover:scale-102 duration-500"
          >
            {/* Article*/}
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
                <p className="text-[#717171] text-sm leading-relaxed line-clamp-3">
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

//  Article 2
//         <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
//           <div className="relative h-48">
//             <Image
//               src="/images/article-2.jpg" // Ganti dengan path gambar artikel Anda
//               alt="Sinkronisasi dengan Strava"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="p-6 space-y-4">
//             <h3 className="text-xl font-semibold text-gray-800 leading-tight">
//               Ayo Sinkronisasi Akun Born To Sweat App-mu dengan Aplikasi Strava!
//             </h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Updated: 01 Mar 2021 | By: Pocari SweatAuthor: Pocari SweatBorn To
//               Sweat App kini sudah dapat...
//             </p>
//             <div className="flex items-center text-xs text-gray-400 space-x-4">
//               <span>by Admin</span>
//               <span>3 August</span>
//               <span>1 min read</span>
//             </div>
//           </div>
//         </article>

//         {/* Article 3 */}
//         <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
//           <div className="relative h-48">
//             <Image
//               src="/images/article-3.jpg" // Ganti dengan path gambar artikel Anda
//               alt="Marathon Training"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="p-6 space-y-4">
//             <h3 className="text-xl font-semibold text-gray-800 leading-tight">
//               Satu Hari Menjelang Marathon, Ini yang Harus Kamu Lakukan.
//             </h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Updated: 27 Oct 2017 | Written By: Pocari SweatLari marathon
//               merupakan olahraga yang sangat...
//             </p>
//             <div className="flex items-center text-xs text-gray-400 space-x-4">
//               <span>by Admin</span>
//               <span>3 August</span>
//               <span>2 min read</span>
//             </div>
//           </div>
//         </article>
