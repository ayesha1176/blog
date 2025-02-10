"use client";
import React from "react";
"use client";

import Image from "next/image";

export default function AuthorCard() {
  return (
    <div className="mt-10 p-5 bg-gray-100 rounded-xl shadow-md flex flex-col md:flex-row items-center">
      <Image
        src="/ayesha.jpg" 
        alt="Author"
        width={100}
        height={100}
        className="rounded-full"
      />

      <div className="md:ml-4 text-center md:text-left mt-4 md:mt-0">
        <h2 className="text-xl font-semibold text-gray-800">Ayesha Rashid</h2>
        <p className="text-gray-600">
          A passionate web developer, tech enthusiast exploring AI, and
          the Future of Tech!
        </p>
        <div className="mt-3 flex space-x-4 justify-center md:justify-start">
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
