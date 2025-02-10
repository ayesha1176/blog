import React from "react";

export default function Feature() { // ✅ Function name capitalized
  return (
    <div>
      <section className="py-8 bg-neutral-100 mb-40">
        <h2
          className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out
        transform hover:-translate-y-1 hover:text-black text-red-600"
        >
          Ayesha Rashid: Navigating the Secrets of Technology Blog!
        </h2>
        <p className="text-center m-4 mt-4 text-sm text-blue-900 sm:text-xl md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          The world of technology is like an endless ocean, filled with secrets
          waiting to be discovered. Every day brings a new innovation, every
          moment a new breakthrough. My journey is all about uncovering these
          secrets and sharing them with you. Let's explore this fascinating
          world together!
        </p>
        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-xl font-bold text-center my-8 text-red-600 animate-color-change">
            Exploring Our Categories
          </h1>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[
              "Technology",
              "Artificial Intelligence",
              "HTML",
              "Virtual Reality",
              "Next.js",
              "Web Development",
            ].map((category, index) => (
              <div
                key={index}
                className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600"
              >
                <p className="text-center text-lg font-semibold">{category}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm md:text-lg text-blue-900 mb-6 px-4 animate-fade-in-down delay-100 mt-10">
          Technology is constantly evolving, shaping the way we interact with
          the digital world. From the intelligence of Artificial Intelligence
          (AI) to the foundational power of HTML, every innovation plays a vital
          role in modern development. The immersive experiences of Virtual
          Reality (VR) are redefining how we perceive digital spaces, while
          frameworks like Next.js are enhancing the efficiency of web
          applications. Whether you're a beginner or an expert, Web Development
          remains at the core of building the future. Join us as we dive deep
          into these fascinating fields and uncover the secrets of the digital
          era!
        </p>
      </section>
    </div>
  );
}
