import Link from "next/link";
import { Page, SectionHeading, LinkRow } from "./Layout";

const external = { target: "_blank", rel: "noopener noreferrer" };

const linkClass = "font-semibold text-[#333] transition-colors hover:text-[#999]";

const profileLinks = (lang) => [
  <a key="cv" href={lang === "en" ? "/cv/cv_en.pdf" : "/cv/cv_jp.pdf"} className={linkClass}>
    CV
  </a>,
  <a key="csl" href="https://www.sonycsl.co.jp/people/hiroki-sawada/" className={linkClass} {...external}>
    Sony CSL
  </a>,
  <a key="gs" href="https://scholar.google.com/citations?hl=en&user=1-0jnO4AAAAJ" className={linkClass} {...external}>
    Google Scholar
  </a>,
  <a key="gh" href="https://github.com/hiroki-oist" className={linkClass} {...external}>
    GitHub
  </a>,
  <a key="li" href="https://www.linkedin.com/in/hiroki-sawada-1252461b6/" className={linkClass} {...external}>
    LinkedIn
  </a>,
];

const selectedPapers = [
  {
    title: "PredVLA: Predictive Sensorimotor Modeling for Sub-Million-Parameter Robot Manipulation",
    authors: <><strong>Hiroki Sawada</strong> and Shunichi Kasahara</>,
    venue: "arXiv 2026",
    links: [["arXiv", "https://arxiv.org/abs/2608.26673"]],
  },
  {
    title: "Beyond Single-Axis Testing: Paired Evaluation of Compound Robustness in Vision-Language-Action Policies",
    authors: <><strong>Hiroki Sawada</strong> and Shunichi Kasahara</>,
    venue: "arXiv 2026",
    links: [["arXiv", "https://arxiv.org/abs/2609.15940"]],
  },
  {
    title: "Free-Energy-Gated Plasticity for Real-Time Online Motor Learning in Physical Human-Robot Interaction",
    authors: <><strong>Hiroki Sawada</strong> and Jun Tani</>,
    venue: "arXiv 2026",
    links: [["arXiv", "https://arxiv.org/abs/2608.23000"]],
  },
  {
    title: "CERNet: Class-Embedding Predictive-Coding RNN for Unified Robot Motion, Recognition, and Confidence Estimation",
    authors: <><strong>Hiroki Sawada</strong>, Alexandre Pitti, and Mathias Quoy</>,
    venue: "IEEE ICRA 2026",
    links: [
      ["Paper", "https://doi.org/10.1109/ICRA57385.2026.11695989"],
      ["arXiv", "https://arxiv.org/abs/2512.07041"],
    ],
  },
  {
    title: "Human-Robot Kinaesthetic Interaction Based on The Free Energy Principle",
    authors: <><strong>Hiroki Sawada</strong>, Wataru Ohata, and Jun Tani</>,
    venue: "IEEE Transactions on Systems, Man and Cybernetics: Systems, 2024",
    links: [["Paper", "https://ieeexplore.ieee.org/abstract/document/10734410"]],
  },
];

const text = {
  ja: {
    name: "澤田 拓希 / Hiroki Sawada",
    role: "Project Researcher, Sony Computer Science Laboratories",
    bio: [
      <>
        人工知能とロボティクスの研究者です。慶應義塾大学にて物理情報工学の学士を取得後、沖縄科学技術大学院大学（OIST）にてAIとロボティクスの博士号を取得。現在はソニーコンピュータサイエンス研究所（Sony CSL）にてプロジェクトリサーチャーとして研究をしています。2025年にはフランス政府奨学金を得て CY Cergy Paris Université（フランス）に6ヶ月間滞在し、国際共同研究の成果を ICRA 2026 で発表しました。
      </>,
      <>
        <strong>自由エネルギー原理</strong>、<strong>予測符号化</strong>、
        <strong>人-ロボット相互作用</strong>、身体性AIを軸に、ロボットが実世界の感覚運動相互作用に根ざした予測モデルを通して、どのように行動を生成・認識・適応させられるかを研究しています。
      </>,
    ],
    news: "Recent News",
    more: "→ すべての活動記録",
    papers: "Selected Publications",
    allPapers: "→ すべての研究業績",
  },
  en: {
    name: "Hiroki Sawada",
    role: "Project Researcher, Sony Computer Science Laboratories",
    bio: [
      <>
        I am a researcher in AI and robotics. I received my B.Eng. in Applied Physics and Physico-Informatics from Keio University and my Ph.D. from the Okinawa Institute of Science and Technology (OIST). I am currently a Project Researcher at Sony Computer Science Laboratories (Sony CSL).
      </>,
      <>
        My research focuses on the <strong>Free Energy Principle</strong>, <strong>Predictive Coding</strong>,{" "}
        <strong>Human-Robot Interaction</strong>, and Embodied AI — exploring how robots can generate, recognize,
        and adapt their behavior through predictive models grounded in real-world sensorimotor interaction.
      </>,
    ],
    news: "Recent News",
    more: "→ See all activities",
    papers: "Selected Publications",
    allPapers: "→ See all publications",
  },
};

export default function Home({ lang = "ja", activities = [] }) {
  const t = text[lang];
  const prefix = lang === "en" ? "/en" : "";

  return (
    <Page>
      <section className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
        <img
          src="/sawada20260713-14_1200.jpg"
          alt="Hiroki Sawada"
          className="aspect-square w-full object-cover sm:w-[300px] sm:shrink-0"
        />
        <div className="min-w-0">
          <h1 className="text-[25px] font-light tracking-[0.04em] text-[#333]">{t.name}</h1>
          <p className="mt-1 text-[13px] text-[#777]">{t.role}</p>
          <p className="mt-2">
            <LinkRow items={profileLinks(lang)} />
          </p>
          <div className="mt-5 space-y-4 text-justify text-[14px] leading-[1.75]">
            {t.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <SectionHeading>{t.news}</SectionHeading>
      <ul className="max-h-[320px] space-y-2 overflow-y-auto pr-2 text-[14px]">
        {activities.map((a) => (
          <li key={a.id} className="flex flex-col sm:flex-row sm:gap-6">
            <span className="shrink-0 text-[13px] text-[#999] sm:w-24">{a.date?.replaceAll("-", ".")}</span>
            <Link href={`${prefix}/activities/${a.id}`} className="text-[#333] transition-colors hover:text-[#999]">
              {a.title}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[13px]">
        <Link href={`${prefix}/activities`} className="text-[#999] hover:text-[#333]">
          {t.more}
        </Link>
      </p>

      <SectionHeading>{t.papers}</SectionHeading>
      <ul className="space-y-6">
        {selectedPapers.map((paper) => (
          <li key={paper.title}>
            <p className="text-[15px] font-semibold leading-snug text-[#333]">{paper.title}</p>
            <p className="mt-1 text-[13px] text-[#666]">{paper.authors}</p>
            <p className="mt-0.5 text-[13px] text-[#777]">
              {paper.venue}
              {paper.links.map(([label, href]) => (
                <span key={href}>
                  <span className="mx-2 text-[#bbb]">|</span>
                  <a href={href} className={linkClass} {...external}>
                    {label}
                  </a>
                </span>
              ))}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[13px]">
        <Link href={`${prefix}/achievements`} className="text-[#999] hover:text-[#333]">
          {t.allPapers}
        </Link>
      </p>
    </Page>
  );
}
