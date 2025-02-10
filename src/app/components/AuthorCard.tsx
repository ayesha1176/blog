import React from "react";

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-600"
          src="/ayesha.jpg"
          alt="author img"
        />
        <div>
          <h3 className="text-xl font-bold">Ayesha Rashid</h3>
          <p className="text-slate-500">
            Website developer | Frontened | AI Engineer
          </p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed">
        Ayesha Rashid is an experienced website developer with a passion for
        cloud generative AI engineer
      </p>
      <div className="mt-4 flex space-x-3">
        <a href="#"
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">Resume
        </a>

        <a href="#"
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">Linkdin
        </a>

        <a href="#"
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">Github
        </a>
      </div>
    </div>
  );
}
