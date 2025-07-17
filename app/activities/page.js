// app/activities/page.js
import fs from "fs";
import path from "path";
import Sidebar from "../../components/Sidebar";
import ActivityCard from "../../components/ActivityCard";

// ✅ ファイル読み込み関数
function getActivities() {
  const activitiesDir = path.join(process.cwd(), "app/activities");
  const files = fs
    .readdirSync(activitiesDir)
    .filter((file) => /^\d+_.*\.js$/.test(file)) // 例: 21_robot-demo.js
    .sort((a, b) => {
      // 数字が大きいものを先に
      const numA = parseInt(a.split("_")[0]);
      const numB = parseInt(b.split("_")[0]);
      return numB - numA;
    });

  return files.map((file) => {
    const { meta } = require(path.join(activitiesDir, file));
    return meta;
  });
}

export default function Activities() {
  const activities = getActivities();

  return (
    <main className="flex min-h-screen bg-white md:ml-[25%]">
      <Sidebar />
      <div className="w-1/1 p-8">
        <h1 className="mb-6">活動記録</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} {...activity} />
          ))}
        </div>
      </div>
    </main>
  );
}
