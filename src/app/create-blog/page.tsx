"use client";
import { useState } from "react";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(
      "https://jobbingfold-us.backendless.app/api/data/blog",
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
    } else {
      alert("Failed to create blog");
    }
  };
  return (
    <div className="font-poppins w-full min-h-screen bg-gradient-to-br from-[#90C9F9] to-[#1976D2] flex flex-col items-center pt-15 pb-20">
      <h1 className="text-[32px] font-bold mb-6 text">Create Blog</h1>
      <form
        onSubmit={handleSubmit}
        className="min-h-[400px] space-y-5 max-w-xl w-full p-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-2xl shadow-2xl"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded-xl text-gray-400 shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-transform hover:scale-102 duration-500 hover:bg-blue-50"
        />
        <textarea
          placeholder="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-2 rounded-xl text-gray-400 shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-transform hover:scale-102 duration-500 hover:bg-blue-50"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imgurl}
          onChange={(e) => setImgurl(e.target.value)}
          className="w-full border p-2 rounded-xl text-gray-400 shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-transform hover:scale-102 duration-500 hover:bg-blue-50"
        />
        <input
          type="text"
          placeholder="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border p-2 rounded-xl text-gray-400 shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-transform hover:scale-102 duration-500 hover:bg-blue-50"
        />
        <div className="flex justify-center py-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 w-full shadow-lg transition-transform hover:scale-103 duration-500"
          >
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
}
