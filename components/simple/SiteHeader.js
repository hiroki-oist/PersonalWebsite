"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Bio" },
  { href: "/achievements", label: "Research" },
  { href: "/skills", label: "Skills" },
  { href: "/activities", label: "Activities" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname() || "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const basePath = isEn ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const prefix = isEn ? "/en" : "";
  const jpPath = basePath;
  const enPath = basePath === "/" ? "/en" : `/en${basePath}`;

  const isActive = (href) =>
    href === "/" ? basePath === "/" : basePath === href || basePath.startsWith(`${href}/`);

  const toHref = (href) => (href === "/" ? prefix || "/" : `${prefix}${href}`);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e1e1e1] bg-white">
      <div className="relative mx-auto flex h-14 max-w-[1200px] items-center justify-center px-4">
        <nav className="hidden items-center gap-9 text-[14px] text-[#333] md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={toHref(item.href)}
              className={
                isActive(item.href)
                  ? "underline underline-offset-[6px]"
                  : "transition-colors hover:text-[#999]"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute right-4 flex items-center gap-4 text-[12px] text-[#999]">
          <span className="flex items-center gap-2">
            <Link href={jpPath} className={isEn ? "hover:text-[#333]" : "text-[#333]"}>
              jp
            </Link>
            <span>|</span>
            <Link href={enPath} className={isEn ? "text-[#333]" : "hover:text-[#333]"}>
              en
            </Link>
          </span>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[5px] py-2 md:hidden"
          >
            <span className="block h-px w-5 bg-[#333]" />
            <span className="block h-px w-5 bg-[#333]" />
            <span className="block h-px w-5 bg-[#333]" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-[#e1e1e1] bg-white px-4 py-2 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={toHref(item.href)}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 text-[14px] ${
                isActive(item.href) ? "text-[#333] underline underline-offset-4" : "text-[#666]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
