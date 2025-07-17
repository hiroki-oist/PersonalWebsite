"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ハンバーガー用
  const router = useRouter();
  const pathname = usePathname();

  const switchToEnglish = () => {
    if (pathname.startsWith("/en")) return;
    router.push(`/en${pathname}`);
  };

  return (
    <>
      {/* --- PC/タブレット表示 --- */}
      <div className="hidden md:flex fixed top-0 left-0 h-full w-1/4 p-8 flex-col justify-between border-r border-gray-200 bg-white">
        <SidebarContent
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          switchToEnglish={switchToEnglish}
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
              onClick={(e) => e.stopPropagation()} // 背景タップで閉じるが内容タップでは閉じない
            >
              <SidebarContent
                isHovered={isHovered}
                setIsHovered={setIsHovered}
                switchToEnglish={switchToEnglish}
                closeMenu={() => setMenuOpen(false)} // ← 追加
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

/* --- Sidebarの共通内容部分 --- */
function SidebarContent({
  isHovered,
  setIsHovered,
  switchToEnglish,
  closeMenu, // スマホ用：押したら閉じる
}) {
  return (
    <div>
      {/* 自己紹介写真 */}
      <div className="flex justify-center mb-4">
        <img
          src="/SelfIntroPhoto.jpg"
          alt="Hiroki Sawada"
          className="w-32 h-32 object-cover object-top rounded-full shadow-md"
        />
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-2">澤田拓希の個人ページ</h1>

      {/* --- 自己紹介文 --- */}
      <div className="mt-2 mb-6 h-[120px] overflow-hidden">
        <p className="text-gray-600 text-sm">
          ようこそ、AIとロボティクスの研究者、澤田拓希の個人ページです。
          2019年3月に慶應義塾大学にて個体物理関連の研究で学士を取得後、沖縄科学技術大学院大学にて
          AIとロボティクスの博士課程をしています。
        </p>
      </div>

      {/* 項目 */}
      <div className="space-y-3 mb-6">
        <Link
          href="/"
          className="block text-blue-600 hover:underline text-lg font-semibold"
          onClick={closeMenu}
        >
          トップ
        </Link>
        <Link
          href="/achievements"
          className="block text-blue-600 hover:underline text-lg font-semibold"
          onClick={closeMenu}
        >
          研究業績・プロフィール
        </Link>
        <Link
          href="/skills"
          className="block text-blue-600 hover:underline text-lg font-semibold"
          onClick={closeMenu}
        >
          スキル
        </Link>
        <Link
          href="/activities"
          className="block text-blue-600 hover:underline text-lg font-semibold"
          onClick={closeMenu}
        >
          活動記録
        </Link>
      </div>

      {/* ソーシャルリンク */}
      <div className="flex items-center space-x-4 mt-6">
        <Link
          href="https://www.linkedin.com/in/hiroki-sawada-1252461b6/"
          target="_blank"
          className="transform transition duration-200 hover:scale-110"
        >
          <img src="/linkedin.png" alt="LinkedIn" className="w-[40px] h-[40px]" />
        </Link>
        {/* <Link
          href="https://x.com/hiroki_oist?s=11&t=4CQ_VsR6q-vWhdPpOnwXcA"
          target="_blank"
          className="transform transition duration-200 hover:scale-110"
        >
          <img src="/x.png" alt="Twitter" className="w-[40px] h-[40px]" />
        </Link> */}
        <Link
          href="https://scholar.google.com/citations?hl=en&user=1-0jnO4AAAAJ"
          target="_blank"
          className="transform transition duration-200 hover:scale-110"
        >
          <img src="/GoogleScholar.png" alt="GoogleScholar" className="w-[40px] h-[40px]" />
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
        <button
          onClick={switchToEnglish}
          className="ml-2 px-3 py-1 text-sm font-semibold border border-gray-400 rounded hover:bg-gray-100"
        >
          EN
        </button>
      </div>
    </div>
  );
}
