"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function SidebarEn() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const switchToJapanese = () => {
    if (!pathname.startsWith("/en")) return; // すでに日本語なら何もしない
    router.push(pathname.replace(/^\/en/, "") || "/"); // /enを外して飛ぶ
  };

  return (
    <div className="w-1/4 p-8 flex flex-col justify-between border-r border-gray-200">
      <div>
        {/* --- Profile Photo --- */}
        <div className="flex justify-center mb-4">
          <img
            src="/SelfIntroPhoto.jpg"
            alt="Hiroki Sawada"
            className="w-40 h-40 object-cover object-top rounded-full shadow-md"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-800">Hiroki Sawada&apos;s Page</h1>

        {/* ✅ --- Fix: Make Intro Text Height Consistent --- */}
        <div className="mt-2 mb-6 h-[120px] overflow-hidden">
          <p className="text-gray-600">
            Welcome to the personal page of Hiroki Sawada, a researcher in AI and Robotics.
            After receiving a B.S. in Applied Physics and Informatics from Keio University,
            I am currently pursuing a Ph.D. in AI and Robotics at the Okinawa Institute
            of Science and Technology.
          </p>
        </div>

        {/* --- Menu --- */}
        <div className="space-y-3">
          <a
            href="/en"
            className="block text-blue-600 hover:underline text-lg font-semibold"
          >
            Home
          </a>
          <a
            href="/en/achievements"
            className="block text-blue-600 hover:underline text-lg font-semibold"
          >
            Academic Profile
          </a>
          <a
            href="/en/activities"
            className="block text-blue-600 hover:underline text-lg font-semibold"
          >
            Activities
          </a>
        </div>

        {/* --- Social Links & Language Switch --- */}
        <div className="flex items-center space-x-4 mt-6">
          <a
            href="https://www.linkedin.com/in/hiroki-sawada-1252461b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-200 hover:scale-110"
          >
            <img
              src="/linkedin.png"
              alt="LinkedIn"
              className="w-[50px] h-[50px]"
            />
          </a>
          <a
            href="https://x.com/hiroki_oist?s=11&t=4CQ_VsR6q-vWhdPpOnwXcA"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-200 hover:scale-110"
          >
            <img
              src="/x.png"
              alt="Twitter"
              className="w-[50px] h-[50px]"
            />
          </a>
          <a
            href="https://scholar.google.com/citations?hl=en&user=1-0jnO4AAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-200 hover:scale-110"
          >
            <img
              src="/GoogleScholar.png"
              alt="GoogleScholar"
              className="w-[50px] h-[50px]"
            />
          </a>
          <a
            href="https://github.com/hiroki-oist"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-200 hover:scale-110"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              key={isHovered ? "gif" : "static"}
              src={isHovered ? "/github.gif" : "/github_static.png"}
              alt="Github"
              className="w-[50px] h-[50px]"
            />
          </a>

          {/* --- Language Switch --- */}
          <button
            onClick={switchToJapanese}
            className="ml-2 px-3 py-1 text-sm font-semibold border border-gray-400 rounded hover:bg-gray-100"
          >
            JP
          </button>
        </div>
      </div>
    </div>
  );
}
