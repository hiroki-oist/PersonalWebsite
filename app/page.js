"use client";

import Sidebar, { SidebarContent } from "../components/Sidebar";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const switchToEnglish = () => {
    if (pathname.startsWith("/en")) return;
    router.push(`/en${pathname}`);
  };

  return (
    <main className="flex min-h-screen bg-white md:ml-[25%]">
      <Sidebar />

      <div className="relative w-full">
        {/* 背景画像 */}
        <img
          src="/BackGround.png"
          alt="Background"
          className="w-full h-screen object-cover"
        />

        {/* ✅ 背景に重ねるコンテンツ */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-80 p-6 rounded shadow-md max-w-md">
            <SidebarContent
              isHovered={isHovered}
              setIsHovered={setIsHovered}
              switchToEnglish={switchToEnglish}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
