import Projects from "@/components/simple/Projects";

const projects = [
  {
    period: "2026.10",
    title: "魔法の塔 復刻版",
    platform: "iOSアプリ（App Store 公開中）",
    description:
      "1995年にN.W氏がPC-9800シリーズ向けに発表したローグライクダンジョンRPG「魔法の塔」を、原作者の許諾を得てiPhone向けにリメイク。全50階の盤面配置・敵の数値・イベントの順序を原典どおりに再現しています。企画・UI設計・開発から公開・運営まで、すべて一人で手がけました。",
    tags: ["C#", "Unity", "iOS"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/jp/app/%E9%AD%94%E6%B3%95%E3%81%AE%E5%A1%94-%E5%BE%A9%E5%88%BB%E7%89%88/id6815624226" },
      { label: "プライバシーポリシー", href: "https://hiroki-oist.github.io/MagicTower_PrivacyPolicy/" },
    ],
  },
];

export default function ProjectsPage() {
  return <Projects lang="ja" projects={projects} />;
}
