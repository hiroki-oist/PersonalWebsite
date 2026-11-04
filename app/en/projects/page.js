import Projects from "@/components/simple/Projects";

const projects = [
  {
    period: "Oct 2026",
    title: "Magic Tower Revival (魔法の塔 復刻版)",
    platform: "iOS app (available on the App Store)",
    description:
      "A remake of “Magic Tower,” the 1995 roguelike dungeon RPG by N.W for the PC-9800 series, rebuilt for iPhone with permission from the original author. It faithfully reproduces the original 50-floor layouts, enemy stats, and event sequences. I planned, designed, built, released, and operate it entirely on my own.",
    icon: "/projects/magic-tower-icon.png",
    tags: ["C#", "Unity", "iOS"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/jp/app/%E9%AD%94%E6%B3%95%E3%81%AE%E5%A1%94-%E5%BE%A9%E5%88%BB%E7%89%88/id6815624226" },
      { label: "Privacy Policy", href: "https://hiroki-oist.github.io/MagicTower_PrivacyPolicy/" },
    ],
  },
];

export default function ProjectsEnPage() {
  return <Projects lang="en" projects={projects} />;
}
