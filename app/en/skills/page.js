const robotSkills = [
  {
    name: "Torobo",
    maker: "Tokyo Robotics",
    text: "A humanoid upper-body robot developed by Tokyo Robotics, equipped with cameras and 18 degrees of freedom.",
    tags: ["Humanoid Robot", "18 DoF", "Kinaesthetic HRI"],
  },
  {
    name: "Reachy",
    maker: "Pollen Robotics",
    text: "A humanoid upper-body robot developed by Pollen Robotics, with 17 degrees of freedom.",
    tags: ["Humanoid Robot", "17 DoF", "Real-world HRI"],
  },
  {
    name: "Smartphone Robot",
    maker: "Lab-built Robot",
    text: "A custom-built small rover-type robot operated via a mounted smartphone and driven by wheels.",
    tags: ["Mobile Robot", "Computer Vision", "Wheeled Platform"],
  },
];

const languageSkills = [
  {
    name: "English",
    level: "Near-native",
    text: "13 years of residence abroad. TOEIC 975.",
  },
  {
    name: "Japanese",
    level: "Native",
    text: "Mother tongue.",
  },
  {
    name: "French",
    level: "Conversational / CEFR A2",
    text: "Six-month research stay in Paris.",
  },
];

const programmingSkills = [
  {
    name: "Python",
    text: "Machine learning and robotics development, including TensorFlow, PyTorch, and ROS2 integration.",
    tags: ["Machine Learning", "Robotics", "PyTorch", "TensorFlow", "ROS2"],
  },
  {
    name: "C++",
    text: "Algorithmic implementation for robotics, including custom variational RNN implementation with Eigen tensor operations and library development.",
    tags: ["Robotics", "Eigen", "Variational RNN", "Numerical Computing"],
  },
  {
    name: "JavaScript / Node.js",
    text: "Full-stack development, including backend architecture and deployment.",
    tags: ["Backend", "Full-stack", "API", "Deployment"],
  },
  {
    name: "Swift",
    text: "iOS app development, including casual game development and an iPhone game app currently under development.",
    tags: ["iOS", "SpriteKit", "Game App"],
  },
];

const toolSkills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Cloud / Infrastructure",
    items: ["AWS EC2", "AWS S3", "SageMaker", "Lambda"],
  },
  {
    category: "Database",
    items: ["MySQL"],
  },
  {
    category: "Development Tools",
    items: ["Docker", "Git", "GitHub"],
  },
];

const interests = [
  {
    name: "Karate / Kobudo",
    text: "Ryukyu Kobudo Ryukonkai Syudo-kan, 2nd dan black belt. Third place in the Sai division at the 9th Okinawa Prefecture Kobudo Championship.",
    tags: ["Black Belt", "Ryukyu Kobudo", "Sai"],
  },
  {
    name: "Go",
    text: "3rd dan.",
    tags: ["3rd dan"],
  },
  {
    name: "Scuba Diving",
    text: "PADI Advanced Open Water Diver.",
    tags: ["PADI AOW"],
  },
];

export default function SkillsEn() {
  return (
    <main className="min-h-screen bg-[#FBF6EF] text-[#2E2A27]">
      <HeaderEn />

      <section className="relative overflow-hidden border-b border-[#E9D9C6]">
        <img
          src="/assets/home/hero-orbit-lines.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-40"
        />

        <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#D99455]/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#B86524]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-14">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold tracking-[0.22em] text-[#B86524]">
              SKILLS & BACKGROUND
            </p>

            <h1 className="font-serif text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#2E2A27] md:text-7xl">
              Skills &
              <br />
              <span className="text-[#B86524]">Experiences</span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-[#4C4540] md:text-lg">
              A skill set supporting real-robot interaction research, predictive-coding
              model implementation, web and cloud development, and international research collaboration.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#robotics"
                className="inline-flex items-center gap-3 rounded-2xl bg-[#B86524] px-6 py-4 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(184,101,36,0.28)] transition hover:-translate-y-0.5 hover:bg-[#A8581F]"
              >
                View Skills
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="/en/achievements"
                className="inline-flex items-center gap-3 rounded-2xl border border-[#D8B98E] bg-white/75 px-6 py-4 text-sm font-semibold text-[#2E2A27] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                Research Profile
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SkillOverview />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:px-10 lg:grid-cols-[260px_1fr] lg:px-14">
        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-[28px] border border-[#E7D6C1] bg-white/70 p-5 shadow-[0_10px_34px_rgba(46,42,39,0.06)] backdrop-blur">
            <p className="mb-4 text-xs font-bold tracking-[0.22em] text-[#B86524]">
              CONTENTS
            </p>

            <nav className="space-y-2 text-sm font-medium text-[#5D534C]">
              <SideLink href="#robotics">Robotics</SideLink>
              <SideLink href="#languages">Languages</SideLink>
              <SideLink href="#programming">Programming</SideLink>
              <SideLink href="#tools">Frameworks & Tools</SideLink>
              <SideLink href="#interests">Interests</SideLink>
            </nav>
          </div>
        </aside>

        <div className="space-y-20">
          <Section id="robotics" label="ROBOTICS" title="Robotic Platforms">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {robotSkills.map((robot) => (
                <FeatureCard key={robot.name}>
                  <p className="text-sm font-semibold text-[#B86524]">
                    {robot.maker}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-semibold text-[#2E2A27]">
                    {robot.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#4C4540]">
                    {robot.text}
                  </p>
                  <TagList tags={robot.tags} />
                </FeatureCard>
              ))}
            </div>
          </Section>

          <Section id="languages" label="LANGUAGES" title="Languages">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {languageSkills.map((language) => (
                <FeatureCard key={language.name}>
                  <p className="text-sm font-semibold text-[#B86524]">
                    {language.level}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-semibold text-[#2E2A27]">
                    {language.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#4C4540]">
                    {language.text}
                  </p>
                </FeatureCard>
              ))}
            </div>
          </Section>

          <Section id="programming" label="PROGRAMMING" title="Programming Skills">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {programmingSkills.map((skill) => (
                <FeatureCard key={skill.name}>
                  <h3 className="font-serif text-3xl font-semibold text-[#2E2A27]">
                    {skill.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#4C4540]">
                    {skill.text}
                  </p>
                  <TagList tags={skill.tags} />
                </FeatureCard>
              ))}
            </div>
          </Section>

          <Section id="tools" label="FRAMEWORKS & TOOLS" title="Frameworks & Tools">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {toolSkills.map((group) => (
                <FeatureCard key={group.category}>
                  <h3 className="font-serif text-3xl font-semibold text-[#2E2A27]">
                    {group.category}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#E7D6C1] bg-[#FBF6EF] px-4 py-2 text-sm font-semibold text-[#8D542B]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </FeatureCard>
              ))}
            </div>
          </Section>

          <Section id="interests" label="INTERESTS" title="Interests">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {interests.map((item) => (
                <FeatureCard key={item.name}>
                  <h3 className="font-serif text-3xl font-semibold text-[#2E2A27]">
                    {item.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#4C4540]">
                    {item.text}
                  </p>
                  <TagList tags={item.tags} />
                </FeatureCard>
              ))}
            </div>
          </Section>
        </div>
      </div>

      <div className="mt-10">
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

function HeaderEn() {
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
          <a className="transition hover:text-[#B86524]" href="/en">
            Top
          </a>
          <a className="transition hover:text-[#B86524]" href="/en/achievements">
            Research & Profile
          </a>
          <a className="text-[#B86524]" href="/en/skills">
            Skills
          </a>
          <a className="transition hover:text-[#B86524]" href="/en/activities">
            Activities
          </a>
          <a className="transition hover:text-[#B86524]" href="mailto:hiroki1998@gmail.com">
            Contact
          </a>
          <a
            href="/skills"
            className="rounded-full border border-[#D8B98E] px-3 py-1 text-xs text-[#8D542B] transition hover:bg-white"
          >
            JP
          </a>
        </nav>
      </div>
    </header>
  );
}

function SkillOverview() {
  const items = [
    {
      value: "Robotics",
      label: "Torobo, Reachy, and lab-built mobile robots",
    },
    {
      value: "AI / RNN",
      label: "Predictive coding, PV-RNN, and robot learning",
    },
    {
      value: "Full-stack",
      label: "Next.js, Node.js, AWS, and MySQL",
    },
    {
      value: "Languages",
      label: "Japanese, English, and French",
    },
  ];

  return (
    <section className="relative z-10 border-y border-[#E9D9C6] bg-[#FFFDF9]/80 px-6 py-10 backdrop-blur md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.value}
            className="rounded-3xl border border-[#E7D6C1] bg-white/80 p-5 shadow-[0_10px_34px_rgba(46,42,39,0.06)]"
          >
            <p className="font-serif text-2xl font-semibold text-[#2E2A27]">
              {item.value}
            </p>
            <p className="mt-2 text-sm leading-5 text-[#6E6259]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <p className="mb-4 text-xs font-bold tracking-[0.22em] text-[#B86524]">
        {label}
      </p>
      <h2 className="mb-8 font-serif text-4xl font-semibold tracking-[-0.03em] text-[#2E2A27] md:text-5xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

function SideLink({ href, children }) {
  return (
    <a
      href={href}
      className="block rounded-2xl px-4 py-3 transition hover:bg-[#FBF6EF] hover:text-[#B86524]"
    >
      {children}
    </a>
  );
}

function FeatureCard({ children }) {
  return (
    <article className="rounded-[28px] border border-[#E7D6C1] bg-white/80 p-6 shadow-[0_10px_34px_rgba(46,42,39,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(46,42,39,0.1)]">
      {children}
    </article>
  );
}

function TagList({ tags }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-[#FBF6EF] px-3 py-1 text-xs font-semibold text-[#8D542B]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}