"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [author, setAuthor] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim() || !imgurl.trim() || !author.trim()) {
      alert("Please fill out all fields before creating a blog!");
      return;
    }

    const res = await fetch(
      "https://lovableairplane-us.backendless.app/api/data/Article",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, imgurl, author }),
      }
    );

    if (res.ok) {
      alert("Blog created successfully!");
      setTitle("");
      setContent("");
      setImgurl("");
      setAuthor("");
      router.replace("/blog");
    } else {
      alert("Failed to create blog");
    }
  };
  return (
    <div className="font-poppins w-full min-h-screen bg-gradient-to-br from-[#90C9F9] to-[#1976D2] flex flex-col items-center pt-25 pb-20">
      <form
        onSubmit={handleSubmit}
        className="min-h-[400px] space-y-5 max-w-xl w-full p-8 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 rounded-2xl shadow-2xl"
      >
        <h1 className="text-[32px] font-bold mb-6 text-center">Create Blog</h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-gray-500 border-gray-300 w-full border p-3 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-transform hover:scale-102 duration-500 hover:bg-blue-50 hover:shadow-2xl"
        />
        <textarea
          placeholder="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="text-gray-500 border-gray-300 w-full border p-3 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-transform hover:scale-102 duration-500 hover:bg-blue-50 hover:shadow-2xl"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imgurl}
          onChange={(e) => setImgurl(e.target.value)}
          className="text-gray-500 border-gray-300 w-full border p-3 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-transform hover:scale-102 duration-500 hover:bg-blue-50 hover:shadow-2xl"
        />
        <input
          type="text"
          placeholder="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="text-gray-500 border-gray-300 w-full border p-3 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-transform hover:scale-102 duration-500 hover:bg-blue-50 hover:shadow-2xl"
        />
        <div className="flex justify-center py-2">
          <button
            type="submit"
            className="cursor-pointer bg-blue-500 text-white px-4 py-3 rounded-xl hover:bg-blue-600 w-full shadow-lg transition-transform hover:scale-103 duration-500 hover:shadow-2xl"
          >
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
}
