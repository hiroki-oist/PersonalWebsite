import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const activitiesDir = path.join(process.cwd(), "content/activities_en");

function loadActivities() {
  return fs
    .readdirSync(activitiesDir)
    .filter((file) => /^\d+_.*\.mdx?$/.test(file))
    .sort((a, b) => {
      const nA = parseInt(a.split("_")[0], 10);
      const nB = parseInt(b.split("_")[0], 10);
      return nB - nA;
    })
    .map((file) => {
      const raw = fs.readFileSync(path.join(activitiesDir, file), "utf8");
      const { data } = matter(raw);

      return {
        id: data.id,
        title: data.title,
        date: data.date,
        summary: data.summary,
        thumbnail: data.thumbnail,
      };
    });
}

export default function ActivitiesEn() {
  const activities = loadActivities();

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
              ACTIVITIES
            </p>

            <h1 className="font-serif text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#2E2A27] md:text-7xl">
              Research,
              <br />
              Conferences
              <br />
              <span className="text-[#B86524]">& Field Notes</span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-[#4C4540] md:text-lg">
              Notes on international conferences, research stays, collaborations,
              and real-robot experiments.
            </p>
          </div>
        </div>
      </section>

      <ActivityOverview count={activities.length} />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-14">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.22em] text-[#B86524]">
              ACTIVITY LOG
            </p>
            <h2 className="font-serif text-4xl font-semibold tracking-[-0.03em] text-[#2E2A27] md:text-5xl">
              Recent Activities
            </h2>
          </div>

          <p className="text-sm leading-6 text-[#6E6259]">
            {activities.length} entries
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
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
          <a className="transition hover:text-[#B86524]" href="/en/skills">
            Skills
          </a>
          <a className="text-[#B86524]" href="/en/activities">
            Activities
          </a>
          <a className="transition hover:text-[#B86524]" href="mailto:hiroki1998@gmail.com">
            Contact
          </a>
          <a
            href="/activities"
            className="rounded-full border border-[#D8B98E] px-3 py-1 text-xs text-[#8D542B] transition hover:bg-white"
          >
            JP
          </a>
        </nav>
      </div>
    </header>
  );
}

function ActivityOverview({ count }) {
  const items = [
    {
      value: `${count}`,
      label: "Activity entries",
    },
    {
      value: "IROS 2024",
      label: "International conference participation",
    },
    {
      value: "CY Cergy",
      label: "Research stay in France",
    },
    {
      value: "HRI / FEP",
      label: "Core research focus",
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

function ActivityCard({ activity }) {
  return (
    <article className="group overflow-hidden rounded-[32px] border border-[#E7D6C1] bg-white/80 shadow-[0_10px_34px_rgba(46,42,39,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(46,42,39,0.11)]">
      {activity.thumbnail && (
        <Link href={`/en/activities/${activity.id}`} className="block">
          <div className="relative h-64 overflow-hidden bg-[#E9D9C6]">
            <img
              src={activity.thumbnail}
              alt={activity.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E2A27]/35 via-transparent to-transparent" />
          </div>
        </Link>
      )}

      <div className="p-7">
        <p className="text-sm font-semibold text-[#B86524]">
          {formatDate(activity.date)}
        </p>

        <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2E2A27]">
          <Link
            href={`/en/activities/${activity.id}`}
            className="transition hover:text-[#B86524]"
          >
            {activity.title}
          </Link>
        </h3>

        <p className="mt-5 line-clamp-4 text-base leading-7 text-[#5D534C]">
          {activity.summary}
        </p>

        <Link
          href={`/en/activities/${activity.id}`}
          className="mt-7 inline-flex items-center text-sm font-semibold text-[#B86524]"
        >
          Read more
          <span className="ml-2 transition group-hover:ml-3">→</span>
        </Link>
      </div>
    </article>
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