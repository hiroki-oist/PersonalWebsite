import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Page, PageTitle } from "@/components/simple/Layout";

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
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export default function ActivitiesEn() {
  const activities = loadActivities();

  return (
    <Page>
      <PageTitle sub="Notes on international conferences, research stays, collaborations, and real-robot experiments.">Activities</PageTitle>

      <ul className="border-t border-[#e1e1e1]">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </ul>
    </Page>
  );
}

function ActivityItem({ activity }) {
  const href = `/en/activities/${activity.id}`;

  return (
    <li className="flex flex-col gap-4 border-b border-[#e1e1e1] py-6 sm:flex-row sm:gap-6">
      {activity.thumbnail && (
        <Link href={href} className="shrink-0">
          <img
            src={activity.thumbnail}
            alt={activity.title}
            className="h-[100px] w-[150px] object-cover"
          />
        </Link>
      )}

      <div className="min-w-0">
        <p className="text-[13px] text-[#999]">{formatDate(activity.date)}</p>
        <h2 className="mt-1 text-[16px] font-semibold leading-snug">
          <Link href={href} className="text-[#333] hover:text-[#999]">
            {activity.title}
          </Link>
        </h2>
        {activity.summary && (
          <p className="mt-2 line-clamp-3 text-[14px] leading-relaxed">
            {activity.summary}
          </p>
        )}
      </div>
    </li>
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
