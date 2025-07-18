// app/activities/page.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Sidebar from "../../components/Sidebar";
import ActivityCard from "../../components/ActivityCard";

function loadActivities() {
  const dir = path.join(process.cwd(), "content/activities");
  return fs
    .readdirSync(dir)
    .filter((f) => /^\d+_.*\.mdx?$/.test(f))
    .sort((a, b) => {
      const nA = parseInt(a.split("_")[0], 10);
      const nB = parseInt(b.split("_")[0], 10);
      return nB - nA; // 大きい番号＝新しい
    })
    .map((file) => {
      const { data } = matter(
        fs.readFileSync(path.join(dir, file), "utf8")
      );
      return data; // front-matter (id, title…)
    });
}

export default function Activities() {
  const activities = loadActivities();

  return (
    <main className="flex min-h-screen bg-white md:ml-[25%]">
      <Sidebar />
      <div className="w-full p-8">
        <h1 className="mb-6 text-3xl font-bold">活動記録</h1>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {activities.map((meta) => (
            <ActivityCard key={meta.id} {...meta} />
          ))}
        </div>
      </div>
    </main>
  );
}
