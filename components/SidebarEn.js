"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function SidebarEn() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ハンバーガー用
  const router = useRouter();
  const pathname = usePathname();

  const switchToJapanese = () => {
    if (!pathname.startsWith("/en")) return;
    router.push(pathname.replace(/^\/en/, "") || "/");
  };

  return (
    <>
      {/* --- PC/タブレット表示 --- */}
      <div className="hidden md:flex fixed top-0 left-0 h-full w-1/4 p-8 flex-col justify-between border-r border-gray-200 bg-white">
        <SidebarEnContent
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          switchToJapanese={switchToJapanese}
        />
      </div>

      {/* --- スマホ表示（ハンバーガーメニュー） --- */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        {/* ハンバーガーボタン */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 border rounded bg-white shadow"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </div>
        </button>

        {/* メニュー内容（全画面オーバーレイ） */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setMenuOpen(false)}
          >
            <div
              className="fixed top-0 left-0 w-full h-full bg-white p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <SidebarEnContent
                isHovered={isHovered}
                setIsHovered={setIsHovered}
                switchToJapanese={switchToJapanese}
                closeMenu={() => setMenuOpen(false)} // スマホリンク押下で閉じる
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

/* --- Sidebarの共通内容部分 --- */
function SidebarEnContent({
  isHovered,
  setIsHovered,
  switchToJapanese,
  closeMenu,
}) {
  return (
    <div>
      {/* Profile Photo */}
      <div className="flex justify-center mb-4">
        <img
          src="/SelfIntroPhoto.jpg"
          alt="Hiroki Sawada"
          className="w-32 h-32 object-cover object-top rounded-full shadow-md"
        />
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-2">Hiroki Sawada&apos;s Page</h1>

      <p className="text-gray-600 text-sm mb-6">
        Welcome to the personal page of Hiroki Sawada, a researcher in AI and
        Robotics. After receiving a B.S. in Applied Physics and Informatics from
        Keio University, I am currently pursuing a Ph.D. in AI and Robotics at
        the Okinawa Institute of Science and Technology.
      </p>

      {/* Menu */}
      <div className="space-y-3 mb-6">
        <Link
          href="/en"
          className="block text-blue-600 hover:underline text-lg font-semibold"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          href="/en/achievements"
          className="block text-blue-600 hover:underline text-lg font-semibold"
          onClick={closeMenu}
        >
          Academic Profile
        </Link>
        <Link
          href="/en/skills"
          className="block text-blue-600 hover:underline text-lg font-semibold"
          onClick={closeMenu}
        >
          Skills
        </Link>
        <Link
          href="/en/activities"
          className="block text-blue-600 hover:underline text-lg font-semibold"
          onClick={closeMenu}
        >
          Activities
        </Link>
      </div>

      {/* Social Links */}
      <p className="text-gray-600 mb-2">Social Links</p>
      <div className="flex items-center space-x-4 mt-4">
        <Link
          href="https://www.linkedin.com/in/hiroki-sawada-1252461b6/"
          target="_blank"
          className="transform transition duration-200 hover:scale-110"
        >
          <img src="/linkedin.png" alt="LinkedIn" className="w-[40px] h-[40px]" />
        </Link>
        <Link
          href="https://x.com/hiroki_oist?s=11&t=4CQ_VsR6q-vWhdPpOnwXcA"
          target="_blank"
          className="transform transition duration-200 hover:scale-110"
        >
          <img src="/x.png" alt="Twitter" className="w-[40px] h-[40px]" />
        </Link>
        <Link
          href="https://scholar.google.com/citations?hl=en&user=1-0jnO4AAAAJ"
          target="_blank"
          className="transform transition duration-200 hover:scale-110"
        >
          <img
            src="/GoogleScholar.png"
            alt="GoogleScholar"
            className="w-[40px] h-[40px]"
          />
        </Link>
        <Link
          href="https://github.com/hiroki-oist"
          target="_blank"
          className="transform transition duration-200 hover:scale-110"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            key={isHovered ? "gif" : "static"}
            src={isHovered ? "/github.gif" : "/github_static.png"}
            alt="Github"
            className="w-[40px] h-[40px]"
          />
        </Link>

        {/* Language Switch */}
        <button
          onClick={switchToJapanese}
          className="ml-2 px-3 py-1 text-sm font-semibold border border-gray-400 rounded hover:bg-gray-100"
        >
          JP
        </button>
      </div>
    </div>
  );
}
