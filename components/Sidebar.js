"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const switchToEnglish = () => {
    if (pathname.startsWith("/en")) return;
    router.push(`/en${pathname}`);
  };

  return (
    <div className="w-1/4 p-8 flex flex-col justify-between border-r border-gray-200 fixed top-0 left-0 h-screen bg-white overflow-auto">
      <div>
        {/* --- 自己紹介写真 --- */}
        <div className="flex justify-center mb-4">
          <img
            src="/SelfIntroPhoto.jpg"
            alt="Hiroki Sawada"
            className="w-40 h-40 object-cover object-top rounded-full shadow-md"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-800">澤田拓希の個人ページ</h1>

        {/* --- ✅ 自己紹介文スペースを固定 --- */}
        <div className="mt-2 mb-6 h-[120px] overflow-hidden">
          <p className="text-gray-600">
            ようこそ、AIとロボティクスの研究者、澤田拓希の個人ページです。
            慶應義塾大学理工学部物理情報工学科の学士を取得後、現在は沖縄科学技術大学院大学にて
            AIとロボティクスを専門とした博士課程の学生です。
          </p>
        </div>

        {/* --- 項目 --- */}
        <div className="space-y-3">
          <Link
           href="/" className="block text-blue-600 hover:underline text-lg font-semibold">
            トップ
          </Link>
          <Link
            href="/achievements"
            className="block text-blue-600 hover:underline text-lg font-semibold"
          >
            研究業績・プロフィール
          </Link>
          <Link
            href="/skills"
            className="block text-blue-600 hover:underline text-lg font-semibold"
          >
            スキル
          </Link>
          <Link
            href="/activities"
            className="block text-blue-600 hover:underline text-lg font-semibold"
          >
            活動記録
          </Link>
        </div>

        {/* --- ソーシャルリンク & 言語切替 --- */}
        <p className="text-gray-600">
            <br /><br />ソーシャルリンク
        </p>
        <div className="flex items-center space-x-4 mt-6">
          <Link
            href="https://www.linkedin.com/in/hiroki-sawada-1252461b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-200 hover:scale-110"
          >
            <img src="/linkedin.png" alt="LinkedIn" className="w-[50px] h-[50px]" />
          </Link>
          <Link
            href="https://x.com/hiroki_oist?s=11&t=4CQ_VsR6q-vWhdPpOnwXcA"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-200 hover:scale-110"
          >
            <img src="/x.png" alt="Twitter" className="w-[50px] h-[50px]" />
          </Link>
          <Link
            href="https://scholar.google.com/citations?hl=en&user=1-0jnO4AAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-200 hover:scale-110"
          >
            <img src="/GoogleScholar.png" alt="GoogleScholar" className="w-[50px] h-[50px]" />
          </Link>
          <Link
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
          </Link>

          {/* 言語切替 */}
          <button
            onClick={switchToEnglish}
            className="ml-2 px-3 py-1 text-sm font-semibold border border-gray-400 rounded hover:bg-gray-100"
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
}
