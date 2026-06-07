const contactLinks = [
  {
    label: "Google Scholar",
    value: "Publication profile",
    href: "https://scholar.google.co.jp/citations?user=1-0jnO4AAAAJ&hl=ja",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Professional profile",
    href: "https://www.linkedin.com/in/hiroki-sawada-1252461b6/",
    external: true,
  },
  {
    label: "X",
    value: "@hiroki_research",
    href: "https://x.com/hiroki_research",
    external: true,
  },
  {
    label: "Private Gmail",
    value: "hiroki.sawada.research@gmail.com",
    href: "mailto:hiroki.sawada.research@gmail.com",
    external: false,
  },
  {
    label: "Official Email",
    value: "hiroki.sawada@csl.sony.co.jp",
    href: "mailto:hiroki.sawada@csl.sony.co.jp",
    external: false,
  },
];

export default function Contact() {
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
              CONTACT
            </p>

            <h1 className="font-serif text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#2E2A27] md:text-7xl">
              Contact,
              <br />
              Profiles
              <br />
              <span className="text-[#B86524]">& Links</span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-[#4C4540] md:text-lg">
              研究、共同研究、講演、その他のお問い合わせは、以下のメールアドレスまたは各種プロフィールからご連絡ください。
            </p>
          </div>
        </div>
      </section>

      <ContactOverview />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-14">
        <div className="mb-8">
          <p className="mb-4 text-xs font-bold tracking-[0.22em] text-[#B86524]">
            CONTACT INFORMATION
          </p>

          <h2 className="font-serif text-4xl font-semibold tracking-[-0.03em] text-[#2E2A27] md:text-5xl">
            連絡先・プロフィール
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {contactLinks.map((item) => (
            <ContactCard key={item.label} item={item} />
          ))}
        </div>
      </section>

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

          <a className="transition hover:text-[#B86524]" href="/achievements">
            Research & Profile
          </a>

          <a className="transition hover:text-[#B86524]" href="/skills">
            Skills
          </a>

          <a className="transition hover:text-[#B86524]" href="/activities">
            Activities
          </a>

          <a className="text-[#B86524]" href="/contact">
            Contact
          </a>

          <div className="flex items-center gap-1 rounded-full border border-[#D8B98E] px-3 py-1 text-xs font-semibold text-[#8D542B]">
            <span className="text-[#B86524]">JP</span>
            <span className="text-[#C8A982]">|</span>
            <a href="/en/contact" className="transition hover:text-[#B86524]">
              EN
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function ContactOverview() {
  const items = [
    {
      value: "Google Scholar",
      label: "Research publications and citation profile",
    },
    {
      value: "LinkedIn",
      label: "Professional profile",
    },
    {
      value: "X",
      label: "Research updates",
    },
    {
      value: "Email",
      label: "Private and official contact addresses",
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

function ContactCard({ item }) {
  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className="group rounded-[28px] border border-[#E7D6C1] bg-white/80 p-7 shadow-[0_10px_34px_rgba(46,42,39,0.07)] transition hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(46,42,39,0.11)]"
    >
      <p className="text-sm font-semibold tracking-[0.16em] text-[#B86524]">
        {item.label.toUpperCase()}
      </p>

      <h3 className="mt-4 break-words font-serif text-2xl font-semibold leading-tight text-[#2E2A27] md:text-3xl">
        {item.value}
      </h3>

      <div className="mt-4 h-[2px] w-10 bg-[#B86524]" />

      <p className="mt-6 text-sm font-semibold text-[#B86524]">
        {item.href.startsWith("mailto:") ? "メールを送る" : "プロフィールを開く"}
        <span className="ml-2 transition group-hover:ml-3">→</span>
      </p>
    </a>
  );
}