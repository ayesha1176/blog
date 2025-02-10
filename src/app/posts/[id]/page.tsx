"use client";

import { useParams } from "next/navigation";
import React from "react";
import CommentSection from "@/app/components/commentSection";
import AuthorCard from "@/app/components/AuthorCard";

const posts = [
  {
    id: "1",
    title: "Mastering Metaverce",
    image: "/pic1.jpg",
    description:
      "Mastering the Metaverse: The Future of Digital Interaction! The Metaverse is no longer just a concept from science fiction—it is rapidly becoming a reality. As technology advances, the digital and physical worlds are merging to create immersive virtual experiences. This blog explores the Metaverse, its potential, applications, and how you can be part of this revolution. The Metaverse is a collective virtual space created by the convergence of augmented reality (AR), virtual reality (VR), blockchain, and the internet. It allows users to interact in a shared digital world, where they can socialize, work, play, and even conduct business.Key Features of the MetaversePersistent Digital World – Unlike traditional games or online spaces, the Metaverse continues to exist even when you log out.Interoperability – Users can seamlessly transition between different virtual spaces.Interoperability – Users can seamlessly transition between different virtual spaces.Decentralization – Built on blockchain, the Metaverse offers true ownership of digital assets (NFTs).AI and Digital Avatars – AI-powered avatars enhance personalization and engagement.The Metaverse is reshaping the future of human interaction. Whether you are an entrepreneur, a tech enthusiast, or a gamer,the Metaverse offers endless possibilities. Now is the time to explore, learn, and become a part of this exciting digital transformation. ",
  },

  {
    id: "2",
    title: "AI Machine Learning",
    image: "/pic2.jpg",
    description:
      "Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing the world. AI enables machines to mimic human intelligence, while ML is a subset of AI that allows systems to learn from data and improve without explicit programming.and a Machine Learning is a subset of AI that allows computers to learn from data without being explicitly programmed.Instead of following fixed rules, ML models analyze patterns and trends to make decisions. The more data they process, the smarter they become.How AI & ML are Changing the World 🌍 1-HealthCare,SelfDrivingCars,Finance Banking,Virtual Assistants,Entertainment,SocialMedia,E-commerce marketting.AI and ML are not just technologies of the future—they are already shaping our world. Whether in healthcare, finance,transportation, or entertainment, AI is making life easier and businesses more efficient. Learning AIand ML can open endless career opportunities, making it one of the most valuable skills in today’s world. ",
  },

  {
    id: "3",
    title: "Harnessing the Power of Technology",
    image: "/pic3.png",
    description:
      "echnology is at the heart of modern civilization, driving progress in every industry. From artificial intelligence and cloud computing to cybersecurity and robotics,, mastering technology is no longer an option—it’s a necessity. But what does it mean to truly It’s about understanding, adapting, and innovating in a world where technology evolves every second.In today’s digital age, technology shapes the way we live, work, and communicate. Companies rely on tech-driven solutions to enhance productivity, individuals use technology for education and entertainment, and governments use it for public safety and governance. Mastering technology helps us: Stay Competitive – Whether in business or career, tech skills give an edge in a highly digital world.Solve Real-World Problems – Technology is used to address challenges in healthcare, finance,education, and more. Boost Efficiency – Automation, AI, and machine learning optimize workflows, saving time and resources. Create Innovations – The future belongs to innovators who leverage technology for groundbreaking solutions.Technology is advancing at an unprecedented pace. The next decade will bring more automation, smarter AI, human-like robots, and revolutionary innovations.Those who master technology today will lead the future and shape the digital world.",
  },
  {
    id: "4",
    title: "Redefining Work in the Metaverse",
    image: "/pic4.png",
    description:
      "The Metaverse is revolutionizing the way we work, interact, and collaborate in digital spaces. No longer just a concept from science fiction, it is becoming a real-world digital environment where people can work, socialize, and engage in immersive experiences. From virtual offices to AI-powered coworkers, the Metaverse is redefining the traditional workspace.The Metaverse is a virtual universe where users interact using avatars in 3D digital spaces. It combines virtual reality (VR), augmented reality (AR),blockchain, and AI to create a seamless, immersive experience. Major tech companies like Meta (Facebook), Microsoft, and Google are investing billions to build this futuristic world. Virtual Offices & Remote WorkAI & Digital Coworkers 🤖👥 New Job Opportunities & Careers 💼💡  The Metaverse is creating entirely new careers such as Virtual Architects – Designing digital buildings and workspaces. Metaverse Developers – Creating 3D worlds, avatars, and interactive environments. Digital Event Managers – Hosting online events, concerts, and conferences.NFT & Crypto Experts – Managing digital assets and blockchain transactions.Despite these challenges, the Metaverse is the future of work. It offers limitless possibilities for businesses, employees, and entrepreneurs who are ready to adapt and innovate. ",

    date: "2024-1-8",
  },
  {
    id: "5",
    title: "Deep Learning Demystified",
    image: "/pic5.png",
    description:
      "Deep learning is one of the most powerful and transformative branches of artificial intelligence (AI). It enables machines to learn from vast amounts of data and make decisions like humans. From self-driving cars  to facial recognition and AI-generated art, deep learning is revolutionizing the world. But how does it work, and why is it so powerful? Let’s break it down.Deep learning is a subset of machine learning that mimics how the human brain processes information. It uses artificial neural networks (ANNs), which are inspired by the structure of the human brain, to recognize patterns and make predictions.🔹 Traditional Programming – Humans write specific rules for machines.Machine Learning – Machines learn from data and improve over time Deep Learning – Machines use multi-layered neural networks to learn complex patterns and make intelligent decisions without human intervention..Deep learning is reshaping industries, automating tasks, and unlocking new possibilities. As technology continues to evolve, the future belongs to those who understand and innovate with AI. Are you ready for the deep learning revolution? 🌍✨ ",

    date: "2025-1-11",
  },
];

export default function PostPage() {
  const params = useParams();
  const id = params.id as string; // ✅ Explicit typecast

  const post = posts.find((p) => p.id === id);

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
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      )}

      <div className="mt-6 text-lg text-slate-700">
        <p>{post.description}</p>
      </div>

      <CommentSection postId={id} />
      <AuthorCard />
    </div>
  );
}
