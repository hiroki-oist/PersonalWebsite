import Link from "next/link";

const publications = [
  {
    authors: (
      <>
        <strong>Hiroki Sawada</strong>, Wataru Ohata, and Jun Tani
      </>
    ),
    year: "2024",
    title:
      "Human-Robot Kinaesthetic Interaction Based on The Free Energy Principle",
    venue: "IEEE Transactions on Systems, Man and Cybernetics: Systems",
    href: "https://ieeexplore.ieee.org/abstract/document/10734410",
    description:
      "Modeled physical human-robot kinaesthetic interaction using a predictive-coding-inspired variational RNN based on the Free Energy Principle. Quantitatively analyzed how the hyperparameter balancing prediction accuracy and model complexity affects human-robot force interaction.",
    tags: ["FEP", "PV-RNN", "HRI", "Torobo"],
    featured: true,
  },
  {
    authors: (
      <>
        <strong>Hiroki Sawada</strong> and Jun Tani
      </>
    ),
    year: "2024",
    title:
      "Incremental Learning in Physical Human-Robot Interaction Using Predictive-Coding inspired Variational RNNs",
    venue:
      "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2024, Late Breaking Poster",
    href: "/241008_IROS_POSTER.pdf",
    description:
      "Extended PV-RNN to incremental learning in physical HRI. Principal component analysis on the internal state space clarified how incremental learning reshapes the distribution of learned motion patterns.",
    tags: ["Incremental Learning", "Predictive Coding", "PV-RNN", "Torobo"],
    featured: true,
  },
  {
    authors: (
      <>
        <strong>Hiroki Sawada</strong>, Alexandre Pitti, and Mathias Quoy
      </>
    ),
    year: "2026",
    title:
      "CERNet: Class-Embedding Predictive-Coding RNN for Unified Robot Motion, Recognition, and Confidence Estimation",
    venue: "Proceedings in IEEE ICRA 2026 (accepted)",
    href: "https://arxiv.org/abs/2512.07041",
    description:
      "Proposed CERNet, a hierarchical predictive-coding RNN with class embedding, enabling unified real-time motion generation, recognition, and meta-inference of confidence. Demonstrated the model using the Reachy humanoid robot in both simulation and real-world settings.",
    tags: ["CERNet", "ICRA 2026", "Predictive Coding", "Reachy"],
    featured: true,
  },
  {
    authors: (
      <>
        Ueta Daichi, Riki Kobayashi, <strong>Hiroki Sawada</strong>, et al.
      </>
    ),
    year: "2022",
    title:
      "Anomalous Magnetic Moment Direction under Magnetic Anisotropy Originated from Crystalline Electric Field in van der Waals Compounds CeTe3 and CeTe2Se",
    venue: "Journal of the Physical Society of Japan 91(9):094706",
    href: "https://journals.jps.jp/doi/abs/10.7566/JPSJ.91.094706",
    description:
      "Investigated magnetic anisotropy and anomalous magnetic moment direction in van der Waals compounds CeTe3 and CeTe2Se.",
    tags: ["Condensed Matter", "Magnetism"],
  },
  {
    authors: (
      <>
        Azuma Nobuhiko, <strong>Hiroki Sawada</strong>, Itoh Houji, Sakagami Ryosuke,
        Matoba Masanori, Usui Hidenori, and Kamihara Yoichi
      </>
    ),
    year: "2021",
    title:
      "In-gap-states of a mixed anion layered compound, polycrystalline LaCu1-deltaS0.5Se0.5O(delta~0.01) as a degenerate semiconductor",
    venue: "Journal of the Society of Materials Science, Japan 58, 64-68",
    href: "https://www.mssj.or.jp/zk/zk_backno/J58/NO2/mstjv58n02p64.pdf",
    description:
      "Studied in-gap states in the mixed-anion layered compound LaCu1-deltaS0.5Se0.5O as a degenerate semiconductor.",
    tags: ["Materials Science", "Thermoelectric"],
  },
  {
    authors: (
      <>
        N. Azuma, <strong>H. Sawada</strong>, H. Ito, R. Sakagami, Y. Tanaka,
        T. Fujioka, M. Matoba, and Y. Kamihara
      </>
    ),
    year: "2024",
    title:
      "Thermal transport properties of a mixed anion layered compound, polycrystalline LaCu1-δS0.5Se0.5O (δ = 0.01)",
    venue: "Korean Journal of Materials Research 34, 464-474",
    href: "https://journal.mrs-k.or.kr/articles/article/LYNR/#Information",
    description:
      "Investigated thermal transport properties of the mixed-anion layered compound LaCu1-δS0.5Se0.5O.",
    tags: ["Materials Science", "Thermal Transport"],
  },
];

const researchHistory = [
  {
    period: "Jan. 2025 – Jul. 2025",
    title:
      "Proposal and Real-Robot Demonstration of CERNet: A Unified Predictive-Coding RNN for Generation, Recognition, and Confidence Estimation",
    institution:
      "CY Cergy Paris Université, Équipes Traitement de l’Information et Systèmes Lab",
    location: "Cergy, France",
    advisors: "Prof. Alexandre Pitti, Prof. Mathias Quoy",
    points: [
      "Proposed CERNet, a hierarchical predictive-coding RNN integrating generation, recognition, and confidence estimation into a unified lightweight model.",
      "Demonstrated real-time motion generation, intention inference, and confidence meta-inference in a real-world handwriting task.",
      "Conducted real-robot experiments using the Reachy humanoid robot by Pollen Robotics.",
    ],
  },
  {
    period: "Sep. 2021 – present",
    title:
      "Human-Robot Kinaesthetic Interaction Based on the Free Energy Principle",
    institution:
      "Okinawa Institute of Science and Technology, Cognitive Neurorobotics Research Unit",
    location: "Okinawa, Japan",
    advisors: "Prof. Jun Tani",
    points: [
      "Modeled physical human-robot interaction using a predictive-coding-inspired variational RNN based on the Free Energy Principle.",
      "Explored bidirectional sensorimotor dynamics between humans and robots.",
      "Demonstrated the emergence of mutually adaptive motor behaviors through theoretical modeling and incremental learning.",
    ],
  },
  {
    period: "May 2021 – Sep. 2021",
    title:
      "Image Recognition Model for Smartphone Robots Using Transfer Learning",
    institution:
      "Okinawa Institute of Science and Technology, Neural Computation Unit",
    location: "Okinawa, Japan",
    advisors: "Prof. Kenji Doya",
    points: [
      "Built an image recognition model enabling mutual recognition between smartphone robots via transfer learning of a CNN model in TensorFlow.",
    ],
  },
  {
    period: "Jul. 2019 – Jan. 2020 / Jan. 2021 – Apr. 2021",
    title:
      "Magnetic Properties of van der Waals Compounds CeTe3 and CeTe2Se",
    institution:
      "Okinawa Institute of Science and Technology, Quantum Materials Science Unit",
    location: "Okinawa, Japan",
    advisors: "Assoc. Prof. Yoshinori Okada",
    points: [
      "Evaluated magnetic properties of van der Waals layered compounds CeTe3 and CeTe2Se.",
      "Published the research results in a peer-reviewed journal.",
    ],
  },
  {
    period: "Apr. 2019 – Mar. 2020",
    title:
      "Sample Synthesis for Optimizing Thermoelectric Conversion Efficiency of LaCu1−δS0.5Se0.5O",
    institution: "Keio University, Matoba-Kamihara Laboratory",
    location: "Kanagawa, Japan",
    advisors: "Prof. Masanori Matoba",
    points: [
      "Successfully synthesized polycrystalline LaCu1−δS0.5Se0.5O.",
      "Evaluated the effect of Cu defects on thermoelectric properties and published the results.",
    ],
  },
];

const workHistory = [
  {
    period: "Sep. 2023 – present",
    title:
      "Development and Operation of an Automated Meeting Minutes Delivery System Integrating LLM and NLP",
    institution: "Reazon Holdings Corporation, R&D Division",
    location: "Tokyo, Japan",
    points: [
      "Employed as a full-time engineer four days per week.",
      "Main engineer for an automated meeting minutes delivery system combining LLM and NLP.",
      "Built a scalable backend using AWS EC2, S3, SageMaker Asynchronous Inference, and Lambda.",
      "Developed a GPT agent using Retrieval-Augmented Generation to answer natural language queries about company regulations.",
    ],
  },
];

const education = [
  {
    period: "Sep. 2020 – present",
    school: "Okinawa Institute of Science and Technology",
    degree: "Ph.D. in Cognitive Neurorobotics, expected February 2026",
    location: "Okinawa, Japan",
  },
  {
    period: "Apr. 2016 – Mar. 2020",
    school: "Keio University",
    degree: "B.S. in Applied Physics and Physico-Informatics",
    location: "Kanagawa, Japan",
  },
];

const fellowships = [
  {
    period: "Jan. 2025 – Jul. 2025",
    title: "French Government Scholarship",
    organization: "Government of France",
    description:
      "A French government scholarship for Japanese Ph.D. students. Provided 1,709 EUR per month for six months.",
  },
  {
    period: "Apr. 2021 – Mar. 2022",
    title: "JEES & SoftBank AI Human Resource Development Scholarship",
    organization: "SoftBank / JEES",
    description:
      "An unrestricted 1 million JPY scholarship awarded to selected Ph.D. students in AI.",
  },
  {
    period: "Sep. 2020 – present",
    title: "OIST Ph.D. Fellowship",
    organization: "Okinawa Institute of Science and Technology",
    description:
      "Selected as an OIST Ph.D. fellow receiving an annual scholarship of 2.4 million JPY.",
  },
];

const academicActivities = [
  {
    period: "May 2025",
    title: "Reviewer, IEEE ICDL 2025 Contributed Papers",
    description:
      "Reviewed full papers in cognitive robotics and learning for the IEEE International Conference on Development and Learning 2025.",
  },
];

export default function AchievementsEn() {
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
              RESEARCH & PROFILE
            </p>

            <h1 className="font-serif text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#2E2A27] md:text-7xl">
              Publications,
              <br />
              Research History
              <br />
              <span className="text-[#B86524]">& Profile</span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-[#4C4540] md:text-lg">
              I study adaptive human-robot interaction, predictive coding, recurrent neural networks,
              and embodied artificial intelligence based on the Free Energy Principle.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#publications"
                className="inline-flex items-center gap-3 rounded-2xl bg-[#B86524] px-6 py-4 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(184,101,36,0.28)] transition hover:-translate-y-0.5 hover:bg-[#A8581F]"
              >
                View Publications
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-3 rounded-2xl border border-[#D8B98E] bg-white/75 px-6 py-4 text-sm font-semibold text-[#2E2A27] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                Download CV
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <QuickStats />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:px-10 lg:grid-cols-[260px_1fr] lg:px-14">
        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-[28px] border border-[#E7D6C1] bg-white/70 p-5 shadow-[0_10px_34px_rgba(46,42,39,0.06)] backdrop-blur">
            <p className="mb-4 text-xs font-bold tracking-[0.22em] text-[#B86524]">
              CONTENTS
            </p>
            <nav className="space-y-2 text-sm font-medium text-[#5D534C]">
              <SideLink href="#publications">Publications</SideLink>
              <SideLink href="#research">Research History</SideLink>
              <SideLink href="#work">Work Experience</SideLink>
              <SideLink href="#education">Education</SideLink>
              <SideLink href="#fellowships">Fellowships</SideLink>
              <SideLink href="#academic">Academic Services</SideLink>
            </nav>
          </div>
        </aside>

        <div className="space-y-20">
          <Section id="publications" label="PUBLICATIONS" title="Selected Publications">
            <div className="space-y-5">
              {publications.map((paper, index) => (
                <PublicationCard key={paper.title} paper={paper} index={index} />
              ))}
            </div>
          </Section>

          <Section id="research" label="RESEARCH HISTORY" title="Research Experience">
            <Timeline items={researchHistory} />
          </Section>

          <Section id="work" label="WORK EXPERIENCE" title="Engineering Experience">
            <Timeline items={workHistory} />
          </Section>

          <Section id="education" label="EDUCATION" title="Education">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {education.map((item) => (
                <SimpleCard key={item.school}>
                  <p className="text-sm font-semibold text-[#B86524]">
                    {item.period}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-[#2E2A27]">
                    {item.school}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#4C4540]">
                    {item.degree}
                  </p>
                  <p className="mt-2 text-sm text-[#8A7A6E]">{item.location}</p>
                </SimpleCard>
              ))}
            </div>
          </Section>

          <Section id="fellowships" label="FELLOWSHIPS" title="Scholarships & Fellowships">
            <div className="grid grid-cols-1 gap-5">
              {fellowships.map((item) => (
                <SimpleCard key={item.title}>
                  <p className="text-sm font-semibold text-[#B86524]">
                    {item.period}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-[#2E2A27]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#8A7A6E]">
                    {item.organization}
                  </p>
                  <p className="mt-4 text-base leading-7 text-[#4C4540]">
                    {item.description}
                  </p>
                </SimpleCard>
              ))}
            </div>
          </Section>

          <Section id="academic" label="ACADEMIC SERVICES" title="Academic Services">
            <div className="space-y-5">
              {academicActivities.map((item) => (
                <SimpleCard key={item.title}>
                  <p className="text-sm font-semibold text-[#B86524]">
                    {item.period}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-[#2E2A27]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#4C4540]">
                    {item.description}
                  </p>
                </SimpleCard>
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
          <a className="text-[#B86524]" href="/en/achievements">
            Research & Profile
          </a>
          <a className="transition hover:text-[#B86524]" href="/en/skills">
            Skills
          </a>
          <a className="transition hover:text-[#B86524]" href="/en/activities">
            Activities
          </a>
          <a className="transition hover:text-[#B86524]" href="mailto:hiroki1998@gmail.com">
            Contact
          </a>
          <a
            href="/achievements"
            className="rounded-full border border-[#D8B98E] px-3 py-1 text-xs text-[#8D542B] transition hover:bg-white"
          >
            JP
          </a>
        </nav>
      </div>
    </header>
  );
}

function QuickStats() {
  const stats = [
    {
      value: "ICRA 2026",
      label: "First-author accepted paper",
    },
    {
      value: "IEEE T-SMC",
      label: "First-author journal paper",
    },
    {
      value: "IROS 2024",
      label: "First-author LBR",
    },
    {
      value: "FEP / HRI",
      label: "Core research area",
    },
  ];

  return (
    <section className="relative z-10 border-y border-[#E9D9C6] bg-[#FFFDF9]/80 px-6 py-10 backdrop-blur md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
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

function PublicationCard({ paper, index }) {
  return (
    <article
      className={`rounded-[28px] border p-6 shadow-[0_10px_34px_rgba(46,42,39,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(46,42,39,0.1)] ${
        paper.featured
          ? "border-[#D8B98E] bg-white/90"
          : "border-[#E7D6C1] bg-white/75"
      }`}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#B86524]">
            [{index + 1}] {paper.year}
          </p>

          <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-[#2E2A27]">
            <Link
              href={paper.href}
              target={paper.href.startsWith("http") ? "_blank" : undefined}
              rel={paper.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="transition hover:text-[#B86524]"
            >
              {paper.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#5D534C]">
            {paper.authors}
          </p>

          <p className="mt-2 text-sm font-medium leading-6 text-[#8A7A6E]">
            {paper.venue}
          </p>
        </div>

        {paper.featured && (
          <span className="w-fit shrink-0 rounded-full border border-[#D8B98E] bg-[#FBF6EF] px-3 py-1 text-xs font-semibold text-[#8D542B]">
            Featured
          </span>
        )}
      </div>

      <p className="mt-5 text-base leading-7 text-[#4C4540]">
        {paper.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {paper.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#FBF6EF] px-3 py-1 text-xs font-semibold text-[#8D542B]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function Timeline({ items }) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <article
          key={`${item.period}-${item.title}`}
          className="grid grid-cols-1 gap-5 rounded-[28px] border border-[#E7D6C1] bg-white/80 p-6 shadow-[0_10px_34px_rgba(46,42,39,0.06)] md:grid-cols-[180px_1fr]"
        >
          <div>
            <p className="text-sm font-semibold leading-6 text-[#B86524]">
              {item.period}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-semibold leading-tight text-[#2E2A27]">
              {item.title}
            </h3>

            <p className="mt-3 text-sm font-medium leading-6 text-[#5D534C]">
              {item.institution}
            </p>

            <div className="mt-1 space-y-1 text-sm leading-6 text-[#8A7A6E]">
              {item.advisors && <p>{item.advisors}</p>}
              {item.location && <p>{item.location}</p>}
            </div>

            <ul className="mt-5 space-y-2 text-base leading-7 text-[#4C4540]">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-[0.75em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B86524]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

function SimpleCard({ children }) {
  return (
    <article className="rounded-[28px] border border-[#E7D6C1] bg-white/80 p-6 shadow-[0_10px_34px_rgba(46,42,39,0.06)]">
      {children}
    </article>
  );
}