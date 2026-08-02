import React from "react";
import { useParams } from "react-router-dom";
import { journalData } from "../assets/data";

const Blog = () => {
  const { id } = useParams();
  const post = journalData.post.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="py-32 text-center text-stone-500">
       <p className="text-stone-600 text-4xl py-32">Blog not found</p> 
      </div>
    );
  }

  return (
    <main className="bg-white">

      {/* HEADER */}
      <div className="pt-32 max-w-7xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-stone-500">
          {post.category} · {post.date}
        </span>

        <h1 className="text-7xl md:text-7xl font-serif mt-4 mb-10">
          {post.title}
        </h1>

        <img
          src={post.coverImage.src}
          alt={post.coverImage.alt}
          className="w-full h-[420px] object-cover"
        />
      </div>

      {/* CONTENT */}
      <section className="px-6 py-12 max-w-7xl mx-auto space-y-10">

        {post.content.map((block, index) => {
          switch (block.type) {

            case "heading":
              return (
                <h2
                  key={index}
                  className="text-2xl md:text-3xl font-serif text-stone-900"
                >
                  {block.text}
                </h2>
              );

            case "paragraph":
              return (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-stone-700"
                >
                  {block.text}
                </p>
              );

            case "keypoints":
              return (
                <ul
                  key={index}
                  className="grid gap-3 pl-6 list-disc text-stone-700"
                >
                  {block.items.map((item, i) => (
                    <li key={i} className="text-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              );

            case "conclusion":
              return (
                <div
                  key={index}
                  className="p-6 border-l-4 border-orange-500 bg-orange-50 text-stone-800 text-lg font-medium"
                >
                  {block.text}
                </div>
              );

            default:
              return null;
          }
        })}

      </section>
    </main>
  );
};

export default Blog;
