import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

const activitiesDir = path.join(process.cwd(), "content/activities");

function getActivityFiles() {
  return fs
    .readdirSync(activitiesDir)
    .filter((file) => /^\d+_.*\.mdx?$/.test(file));
}

function findActivityFileBySlug(slug) {
  const files = getActivityFiles();

  return files.find((file) => {
    const raw = fs.readFileSync(path.join(activitiesDir, file), "utf8");
    const { data } = matter(raw);
    return data.id === slug;
  });
}

function loadActivityBySlug(slug) {
  const file = findActivityFileBySlug(slug);

  if (!file) return null;

  const raw = fs.readFileSync(path.join(activitiesDir, file), "utf8");
  const { data, content } = matter(raw);

  return {
    data,
    content,
  };
}

export async function generateStaticParams() {
  return getActivityFiles().map((file) => {
    const raw = fs.readFileSync(path.join(activitiesDir, file), "utf8");
    const { data } = matter(raw);

    return {
      slug: data.id,
    };
  });
}

export async function generateMetadata({ params }) {
  const activity = loadActivityBySlug(params.slug);

  if (!activity) {
    return {
      title: "Activity Not Found | Hiroki Sawada",
    };
  }

  return {
    title: `${activity.data.title} | Hiroki Sawada`,
    description: activity.data.summary,
  };
}

export default async function ActivityDetail({ params }) {
  const activity = loadActivityBySlug(params.slug);

  if (!activity) {
    notFound();
  }

  const { data, content } = activity;

  const { content: MDXContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: false,
    },
    components: {
      a: MdxLink,
      img: MdxImage,
      p: MdxParagraph,
      h2: MdxH2,
      h3: MdxH3,
    },
  });

  return (
    <main className="min-h-screen bg-[#FBF6EF] text-[#2E2A27]">
      <Header />

      <article>
        <section className="relative overflow-hidden border-b border-[#E9D9C6]">
          <img
            src="/assets/home/hero-orbit-lines.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-35"
          />

          <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#D99455]/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#B86524]/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20 lg:px-14">
            <Link
              href="/activities"
              className="mb-8 inline-flex items-center gap-2 rounded-2xl border border-[#D8B98E] bg-white/75 px-4 py-3 text-sm font-semibold text-[#8D542B] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
            >
              <span aria-hidden="true">←</span>
              Back to Activities
            </Link>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <p className="mb-5 text-sm font-semibold tracking-[0.22em] text-[#B86524]">
                  ACTIVITY NOTE
                </p>

                <h1 className="font-serif text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-[#2E2A27] md:text-6xl">
                  {data.title}
                </h1>

                <p className="mt-6 text-sm font-semibold text-[#B86524]">
                  {formatDate(data.date)}
                </p>

                {data.summary && (
                  <p className="mt-6 max-w-3xl text-base leading-8 text-[#4C4540] md:text-lg">
                    {data.summary}
                  </p>
                )}
              </div>

              {data.thumbnail && (
                <div className="relative overflow-hidden rounded-[34px] border border-white/70 bg-white/35 p-3 shadow-[0_30px_90px_rgba(46,42,39,0.16)] backdrop-blur">
                  <img
                    src={data.thumbnail}
                    alt={data.title}
                    className="h-[320px] w-full rounded-[26px] object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:px-10 lg:grid-cols-[260px_1fr] lg:px-14">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[28px] border border-[#E7D6C1] bg-white/70 p-5 shadow-[0_10px_34px_rgba(46,42,39,0.06)] backdrop-blur">
              <p className="mb-4 text-xs font-bold tracking-[0.22em] text-[#B86524]">
                ARTICLE
              </p>

              <div className="space-y-4 text-sm leading-6 text-[#5D534C]">
                <div>
                  <p className="font-semibold text-[#2E2A27]">Date</p>
                  <p className="mt-1">{formatDate(data.date)}</p>
                </div>

                <div>
                  <p className="font-semibold text-[#2E2A27]">Category</p>
                  <p className="mt-1">Research Activity</p>
                </div>

                <Link
                  href="/activities"
                  className="mt-4 inline-flex text-sm font-semibold text-[#B86524] transition hover:text-[#A8581F]"
                >
                  All activities →
                </Link>
              </div>
            </div>
          </aside>

          <div className="rounded-[32px] border border-[#E7D6C1] bg-white/85 p-7 shadow-[0_10px_34px_rgba(46,42,39,0.06)] md:p-10">
            <div className="activity-mdx max-w-none">{MDXContent}</div>
          </div>
        </section>
      </article>

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
          <a className="text-[#B86524]" href="/activities">
            Activities
          </a>
          <a
            className="transition hover:text-[#B86524]"
            href="mailto:hiroki1998@gmail.com"
          >
            Contact
          </a>
          <a
            href="/en/activities"
            className="rounded-full border border-[#D8B98E] px-3 py-1 text-xs text-[#8D542B] transition hover:bg-white"
          >
            EN
          </a>
        </nav>
      </div>
    </header>
  );
}

function MdxLink({ href = "", children, ...props }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="font-semibold text-[#B86524] underline decoration-[#D8B98E] decoration-2 underline-offset-4 transition hover:text-[#A8581F]"
      {...props}
    >
      {children}
    </a>
  );
}

function MdxImage({ src, alt = "", ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className="my-8 w-full rounded-[28px] border border-[#E7D6C1] shadow-[0_18px_60px_rgba(46,42,39,0.1)]"
      {...props}
    />
  );
}

function MdxParagraph({ children }) {
  return (
    <p className="my-6 text-base leading-8 text-[#4C4540] md:text-lg">
      {children}
    </p>
  );
}

function MdxH2({ children }) {
  return (
    <h2 className="mt-12 font-serif text-3xl font-semibold tracking-[-0.03em] text-[#2E2A27] md:text-4xl">
      {children}
    </h2>
  );
}

function MdxH3({ children }) {
  return (
    <h3 className="mt-10 font-serif text-2xl font-semibold tracking-[-0.02em] text-[#2E2A27] md:text-3xl">
      {children}
    </h3>
  );
}

function formatDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}