import React from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "../components/ui/card";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl ${
        isDarkBackground ? "bg-slate-800 text-white" : "bg-white text-slate-800"
      }`}
    >
      <div className="relative w-full h-48">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      <CardContent className="text-center">
        <CardTitle className="text-xl font-semibold mt-4">{post.title}</CardTitle>
        <p className="mt-2 text-sm text-gray-500">{post.description.substring(0, 100)}...</p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <p className={`text-sm ${isDarkBackground ? "text-slate-400" : "text-slate-600"}`}>
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>

        <a
          href={`/posts/${post.id}`}
          className={`w-full px-6 py-2 mt-3 text-white rounded transition-all ${
            isDarkBackground
              ? "bg-black hover:bg-red-500"
              : "bg-blue-600 hover:bg-red-500"
          }`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
