"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";
import CommentSection from "@/app/components/commentSection";
import AuthorCard from "@/app/components/AuthorCard";

const posts = [
  {
    id: "1",
    title: "Mastering Metaverse",
    image: "/pic1.jpg",
    description:
      "Mastering the Metaverse: The Future of Digital Interaction! The Metaverse is no longer just a concept from science fiction—it is rapidly becoming a reality...",
    date: "2024-01-08",
  },
  {
    id: "2",
    title: "AI Machine Learning",
    image: "/pic2.jpg",
    description:
      "Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing the world. AI enables machines to mimic human intelligence...",
    date: "2024-02-15",
  },
  {
    id: "3",
    title: "Harnessing the Power of Technology",
    image: "/pic3.png",
    description:
      "Technology is at the heart of modern civilization, driving progress in every industry. From AI to cloud computing, mastering technology is no longer an option—it’s a necessity...",
    date: "2024-03-21",
  },
  {
    id: "4",
    title: "Redefining Work in the Metaverse",
    image: "/pic4.png",
    description:
      "The Metaverse is revolutionizing the way we work, interact, and collaborate in digital spaces...",
    date: "2024-04-10",
  },
  {
    id: "5",
    title: "Deep Learning Demystified",
    image: "/pic5.png",
    description:
      "Deep learning is one of the most powerful and transformative branches of artificial intelligence (AI). It enables machines to learn from vast amounts of data...",
    date: "2025-01-11",
  },
];

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (params?.id) {
      const foundPost = posts.find((p) => p.id === params.id);
      setPost(foundPost || null);
    }
  }, [params]);

  if (!post) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-red-600">🚫 Post Not Found</h2>
        <p className="text-gray-500 mt-2">
          The post you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>

      {post.image && (
        <div className="w-full h-auto rounded-md mt-4 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-md"
          />
        </div>
      )}

      <div className="mt-6 text-lg text-slate-700">
        <p>{post.description}</p>
      </div>

      {post.date && (
        <p className="text-gray-500 mt-4 text-center">
          📅 Published on: {new Date(post.date).toLocaleDateString()}
        </p>
      )}

      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
}

