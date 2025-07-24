"use client";

import SidebarEn from "../../components/SidebarEn";
import { SidebarEnContent } from "../../components/SidebarEn"; // ← これをexportして使う
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function HomeEn() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const switchToJapanese = () => {
    if (!pathname.startsWith("/en")) return;
    router.push(pathname.replace(/^\/en/, "") || "/");
  };

  return (
    <main className="flex min-h-screen bg-white md:ml-[25%]">
      <SidebarEn />

      <div className="relative w-full">
        {/* 背景画像 */}
        <img
          src="/BackGround.png"
          alt="Background"
          className="w-full h-screen object-cover"
        />

        {/* ✅ 背景に重ねる英語版サイドバーコンテンツ */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-70 rounded-lg p-6 shadow-md max-w-md">
            <SidebarEnContent
              isHovered={isHovered}
              setIsHovered={setIsHovered}
              switchToJapanese={switchToJapanese}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
