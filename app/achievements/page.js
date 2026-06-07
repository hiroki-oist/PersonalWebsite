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
      "自由エネルギー原理を組み込んだ変分再帰型ニューラルネットワーク、PV-RNNを用いて人-ロボットの力覚相互作用をモデル化。Accuracy と Complexity のバランスを担うハイパーパラメータが、物理的な人-ロボット相互作用に与える影響を定量的に分析した。",
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
      "PV-RNNを用いたロボットの増分学習を扱い、新たな動作を学習した際に内部状態空間の情報分布がどのように変化するかを主成分分析により可視化・定量化した。",
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
      "予測符号化とクラスEmbeddingを多層RNNに統合し、ロボット運動の生成、認識、自信推定を単一モデルで扱うCERNetを提案。Reachyを用いた実ロボット実験で検証した。",
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
      "CeTe3およびCeTe2Seにおける磁気異方性と磁気モーメント方向に関する物性研究。",
    tags: ["Condensed Matter", "Magnetism"],
  },
  {
    authors: (
      <>
        東伸彦, <strong>澤田拓希</strong>, 伊藤大平, 坂上良介, 的場正憲, 臼井秀知,
        神原陽一
      </>
    ),
    year: "2021",
    title:
      "複合アニオン層状化合物 LaCu1-δS0.5Se0.5O (δ~0.01)多結晶縮退半導体の光学バンドギャップ内構造",
    venue: "材料の科学と工学 58 (2021) 64-68",
    href: "https://www.mssj.or.jp/zk/zk_backno/J58/NO2/mstjv58n02p64.pdf",
    description:
      "LaCu1-δS0.5Se0.5O 多結晶縮退半導体の光学バンドギャップ内構造に関する物性研究。",
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
      "複合アニオン層状化合物 LaCu1-δS0.5Se0.5O の熱輸送特性に関する研究。",
    tags: ["Materials Science", "Thermal Transport"],
  },
];

const researchHistory = [
  {
    period: "2025.1 – 2025.7",
    title:
      "生成・認識・自信推定を単一モデルで行う予測符号化RNNモデル CERNet の提案・実ロボットでの実証",
    institution:
      "CY Cergy Paris Université, Équipes Traitement de l’Information et Systèmes Lab",
    location: "Cergy, France",
    advisors: "Prof. Alexandre Pitti, Prof. Mathias Quoy",
    points: [
      "予測符号化を組み込んだ複数層再帰型ニューラルネットワークを提案。",
      "生成、認識、自信推定を単一の軽量なRNNモデルで統一的に実現。",
      "Pollen Robotics社製ヒューマノイドロボット Reachy を用いて、実空間でのアルファベット描画タスクを検証。",
    ],
  },
  {
    period: "2021.9 – present",
    title: "自由エネルギー原理を基にした力覚的な人-ロボット相互作用研究",
    institution: "Okinawa Institute of Science and Technology, Cognitive Neurorobotics Research Unit",
    location: "Okinawa, Japan",
    advisors: "Prof. Jun Tani",
    points: [
      "自由エネルギー原理に基づき、予測符号化的な変分RNNを用いて身体的な相互作用をモデル化。",
      "人間とロボット間の双方向の感覚運動ダイナミクスを探究。",
      "理論モデルおよび段階的学習の両面から、相互適応的な運動行動の発現を検証。",
    ],
  },
  {
    period: "2021.5 – 2021.9",
    title: "スマートフォンロボット同士がお互いを認識する画像認識モデルの構築",
    institution: "Okinawa Institute of Science and Technology, Neural Computation Unit",
    location: "Okinawa, Japan",
    advisors: "Prof. Kenji Doya",
    points: [
      "TensorFlowのCNNモデルを用いた転移学習により、スマートフォンロボット同士の画像認識モデルを構築。",
    ],
  },
  {
    period: "2019.7 – 2020.1 / 2021.1 – 2021.4",
    title: "ファンデルワールス化合物 CeTe3 及び CeTe2Se における磁気特性評価",
    institution: "Okinawa Institute of Science and Technology, Quantum Materials Science Unit",
    location: "Okinawa, Japan",
    advisors: "Associate Prof. Yoshinori Okada",
    points: [
      "ファンデルワールス層状化合物 CeTe3 および CeTe2Se の磁気特性を評価。",
      "研究成果は査読付き論文として発表。",
    ],
  },
  {
    period: "2019.4 – 2020.3",
    title:
      "Cu欠陥による複合アニオン層状化合物 LaCu1−δS0.5Se0.5O の熱電変換効率最適化に向けた試料合成",
    institution: "Keio University, Matoba-Kamihara Laboratory",
    location: "Kanagawa, Japan",
    advisors: "Prof. Masanori Matoba",
    points: [
      "LaCu1−δS0.5Se0.5O 多結晶体の合成に成功。",
      "Cu欠陥の熱電変換特性への影響を評価し、研究成果を論文として発表。",
    ],
  },
];

const workHistory = [
  {
    period: "2023.9 – present",
    title: "大規模生成モデルと自然言語処理モデルを統合した自動議事録送付システムの開発・運用",
    organization: "株式会社レアゾン・ホールディングス, R&D開発本部",
    location: "Tokyo, Japan",
    points: [
      "正社員エンジニアとして週4日勤務。",
      "LLMとNLPを統合した自動議事録送付システムをメインエンジニアとして開発。",
      "AWS EC2, S3, SageMaker, Lambda などを用いた非同期推論システムを構築。",
      "RAGを活用したGPTエージェントを開発し、社内規則に関する自然言語問い合わせに対応。",
    ],
  },
];

const education = [
  {
    period: "2020.9 – present",
    school: "Okinawa Institute of Science and Technology",
    degree: "PhD in Cognitive Neurorobotics, expected February 2026",
    location: "Okinawa, Japan",
  },
  {
    period: "2016.4 – 2020.3",
    school: "Keio University",
    degree: "Bachelor of Engineering in Applied Physics and Physico-Informatics",
    location: "Kanagawa, Japan",
  },
];

const fellowships = [
  {
    period: "2025.1 – 2025.7",
    title: "French Government Scholarship",
    organization: "Government of France",
    description:
      "日本人博士課程学生を対象としたフランス政府奨学金。6ヶ月間、月額1709ユーロの給付型奨学金。",
  },
  {
    period: "2021.4 – 2022.3",
    title: "JEES・ソフトバンクAI人材育成奨学金",
    organization: "SoftBank / JEES",
    description:
      "AI分野の博士課程学生を対象とした給付型奨学金。使途自由の100万円を給付。",
  },
  {
    period: "2020.9 – present",
    title: "OIST PhD Fellowship",
    organization: "Okinawa Institute of Science and Technology",
    description:
      "OIST博士課程における博士奨学生として採択。年間240万円の奨学金。",
  },
];

const academicActivities = [
  {
    period: "2025.5",
    title: "Reviewer, IEEE ICDL 2025 Contributed Papers",
    description:
      "IEEE International Conference on Development and Learning 2025 における認知ロボティクスと学習分野のフルペーパー査読。",
  },
];

export default function Achievements() {
  return (
    <main className="min-h-screen bg-[#FBF6EF] text-[#2E2A27]">
      <Header />

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
              自由エネルギー原理、予測符号化、再帰型ニューラルネットワーク、
              身体性AIを軸に、人間とロボットの相互適応的な運動生成・認識・推論を研究しています。
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
              <SideLink href="#academic">Academic Activities</SideLink>
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
            <Timeline
              items={workHistory.map((item) => ({
                period: item.period,
                title: item.title,
                institution: item.organization,
                location: item.location,
                points: item.points,
              }))}
            />
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
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#B86524]">
                        {item.period}
                      </p>
                      <h3 className="mt-3 font-serif text-2xl font-semibold text-[#2E2A27]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[#8A7A6E]">
                        {item.organization}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-base leading-7 text-[#4C4540]">
                    {item.description}
                  </p>
                </SimpleCard>
              ))}
            </div>
          </Section>

          <Section id="academic" label="ACADEMIC ACTIVITIES" title="Academic Activities">
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

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E9D9C6] bg-[#FBF6EF]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-14">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/assets/home/logo-hs.svg"
            alt="Hiroki Sawada"
            className="h-11 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#3C3631] md:flex">
          <a className="transition hover:text-[#B86524]" href="/">
            Top
          </a>
          <a className="text-[#B86524]" href="/achievements">
            Research & Profile
          </a>
          <a className="transition hover:text-[#B86524]" href="/skills">
            Skills
          </a>
          <a className="transition hover:text-[#B86524]" href="/activities">
            Activities
          </a>
          <a
            className="transition hover:text-[#B86524]"
            href="mailto:hiroki1998@gmail.com"
          >
            Contact
          </a>
          <a
            href="/en/achievements"
            className="rounded-full border border-[#D8B98E] px-3 py-1 text-xs text-[#8D542B] transition hover:bg-white"
          >
            EN
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