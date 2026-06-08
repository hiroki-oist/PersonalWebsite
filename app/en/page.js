"use client";

import { useRouter, usePathname } from "next/navigation";

export default function HomeEn() {
  const router = useRouter();
  const pathname = usePathname();

  const switchToJapanese = () => {
    if (!pathname.startsWith("/en")) return;

    const nextPath = pathname.replace(/^\/en/, "") || "/";
    router.push(nextPath);
  };

  return (
    <main className="min-h-screen bg-[#FBF6EF] text-[#2E2A27]">
      <HeaderEn switchToJapanese={switchToJapanese} />

      <section className="relative overflow-hidden bg-[#FBF6EF]">
        <img
          src="/assets/home/hero-orbit-lines.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-80"
        />

        <img
          src="/assets/home/robot-silhouettes.png"
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-70px]
            left-1/2
            z-[1]
            w-[980px]
            max-w-none
            -translate-x-1/2
            opacity-55
            mix-blend-multiply
            md:bottom-[-95px]
            md:left-[58%]
            md:w-[1150px]
            lg:bottom-[-110px]
            lg:left-[59%]
            lg:w-[1250px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-[2]
            w-[55%]
            bg-gradient-to-r
            from-[#FBF6EF]
            via-[#FBF6EF]/92
            to-transparent
          "
        />

        <div className="relative z-10 mx-auto grid min-h-[760px] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-10 lg:px-14">
          <div className="z-10 max-w-2xl">
            <p className="mb-5 text-sm font-semibold tracking-[0.22em] text-[#B86524]">
              AI × ROBOTICS × EMBODIED INTELLIGENCE
            </p>

            <h1 className="font-serif text-6xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#2E2A27] md:text-7xl lg:text-8xl">
              Hiroki
              <br />
              <span className="text-[#B86524]">Sawada</span>
            </h1>

            <h2 className="mt-6 font-serif text-2xl text-[#8D542B] md:text-3xl">
              Artificial Intelligence and Robotics
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-[#4C4540] md:text-lg">
              <p>
                I am a researcher in AI and robotics, focusing on{" "}
                <span className="font-semibold text-[#B86524]">
                  Free Energy Principle
                </span>
                ,{" "}
                <span className="font-semibold text-[#B86524]">
                  Human-Robot Interaction
                </span>
                , Predictive Coding, and Embodied AI.
              </p>

              <p>
                My research explores how robots can generate, recognize, and adapt
                their behavior through predictive models grounded in real-world
                sensorimotor interaction.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/en/achievements"
                className="inline-flex items-center gap-3 rounded-2xl bg-[#B86524] px-6 py-4 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(184,101,36,0.28)] transition hover:-translate-y-0.5 hover:bg-[#A8581F]"
              >
                View Research
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="/cv_en.pdf"
                className="inline-flex items-center gap-3 rounded-2xl border border-[#D8B98E] bg-white/75 px-6 py-4 text-sm font-semibold text-[#2E2A27] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                Download CV
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="relative z-10">
            <div className="absolute -left-8 top-16 h-72 w-72 rounded-full bg-[#D99455]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[42px] border border-white/70 bg-white/35 p-3 shadow-[0_30px_90px_rgba(46,42,39,0.18)] backdrop-blur">
              <div className="relative overflow-hidden rounded-[34px]">
                <img
                  src="/Hiroki_Sawada.png"
                  alt="Hiroki Sawada"
                  className="h-[520px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2E2A27]/30 via-transparent to-transparent" />

                <div className="pointer-events-none absolute -right-24 -top-20 h-[560px] w-[560px] rounded-full border border-white/70" />
                <div className="pointer-events-none absolute -right-10 top-10 h-[420px] w-[420px] rounded-full border border-[#D99455]/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResearchHighlights />

      <PreviewCards />

      <div className="mt-20">
        <img
          src="/assets/home/soft-wave-footer.svg"
          alt=""
          aria-hidden="true"
          className="w-full"
        />
      </div>
    </main>
  );
}

function HeaderEn({ switchToJapanese }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E9D9C6] bg-[#FBF6EF]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-14">
        <a href="/en" className="flex items-center gap-3">
          <img
            src="/assets/home/logo-hs.svg"
            alt="Hiroki Sawada"
            className="h-11 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#3C3631] md:flex">
          <a className="text-[#B86524]" href="/en">
            Top
          </a>
          <a className="transition hover:text-[#B86524]" href="/en/achievements">
            Research & Profile
          </a>
          <a className="transition hover:text-[#B86524]" href="/en/skills">
            Skills
          </a>
          <a className="transition hover:text-[#B86524]" href="/en/activities">
            Activities
          </a>
          <a
            className="transition hover:text-[#B86524]"
            href="mailto:hiroki1998@gmail.com"
          >
            Contact
          </a>

          <div className="flex items-center gap-1 rounded-full border border-[#D8B98E] px-3 py-1 text-xs font-semibold text-[#8D542B]">
            <button
              type="button"
              onClick={switchToJapanese}
              className="transition hover:text-[#B86524]"
            >
              JP
            </button>
            <span className="text-[#C8A982]">|</span>
            <span className="text-[#B86524]">EN</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

function ResearchHighlights() {
  const highlights = [
    {
      icon: "/assets/home/icon-award.svg",
      title: "IROS 2024",
      text: "First-author LBR",
    },
    {
      icon: "/assets/home/icon-calendar.svg",
      title: "ICRA 2026",
      text: "First-author paper",
    },
    {
      icon: "/assets/home/icon-wave.svg",
      title: "IEEE T-SMC",
      text: "First-author journal",
    },
    {
      icon: "/assets/home/icon-scholarship.svg",
      title: "France Gov. Scholarship",
      text: "Research stay at CY Cergy Paris Université",
    },
  ];

  return (
    <section className="relative z-10 border-y border-[#E9D9C6] bg-[#FFFDF9]/80 px-6 py-10 backdrop-blur md:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs font-bold tracking-[0.22em] text-[#B86524]">
          RESEARCH HIGHLIGHTS
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-3xl border border-[#E7D6C1] bg-white/80 p-5 shadow-[0_10px_34px_rgba(46,42,39,0.06)]"
            >
              <img src={item.icon} alt="" aria-hidden="true" className="h-12 w-12" />

              <div>
                <h3 className="font-serif text-xl font-semibold text-[#2E2A27]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-5 text-[#6E6259]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PreviewCards() {
  const cards = [
    {
      icon: "/assets/home/icon-publications.svg",
      title: "Publications",
      text: "Peer-reviewed journal articles, international conference papers, and selected research outputs.",
      href: "/en/achievements",
    },
    {
      icon: "/assets/home/icon-projects.svg",
      title: "Research",
      text: "Research themes centered on the Free Energy Principle, predictive coding, and embodied AI.",
      href: "/en/achievements",
    },
    {
      icon: "/assets/home/icon-activities.svg",
      title: "Activities",
      text: "Conference participation, research stays, collaborations, and other academic activities.",
      href: "/en/activities",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-14">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="group rounded-[28px] border border-[#E7D6C1] bg-white/80 p-7 shadow-[0_10px_34px_rgba(46,42,39,0.07)] transition hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(46,42,39,0.11)]"
          >
            <img src={card.icon} alt="" aria-hidden="true" className="h-16 w-16" />

            <h3 className="mt-6 font-serif text-3xl font-semibold text-[#2E2A27]">
              {card.title}
            </h3>

            <div className="mt-3 h-[2px] w-10 bg-[#B86524]" />

            <p className="mt-5 min-h-[72px] text-base leading-7 text-[#5D534C]">
              {card.text}
            </p>

            <p className="mt-7 text-sm font-semibold text-[#B86524]">
              Learn more
              <span className="ml-2 transition group-hover:ml-3">→</span>
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}