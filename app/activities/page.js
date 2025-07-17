import Sidebar from "../../components/Sidebar";
import ActivityCard from "../../components/ActivityCard";

const activityModules = import.meta.glob("./*.js");

export default async function Activities() {
  const activities = [];

  for (const path in activityModules) {
    if (path.includes("page.js")) continue; // 自分自身を除外

    const mod = await activityModules[path]();
    if (mod.meta) {
      // ファイル名から番号を抽出 (例: "./21_newest-activity.js" → 21)
      const match = path.match(/(\d+)_/);
      const order = match ? parseInt(match[1], 10) : 0;

      activities.push({
        ...mod.meta,
        order, // ソート用に番号を保存
      });
    }
  }

  // ✅ ファイル番号の大きい順にソート
  activities.sort((a, b) => b.order - a.order);

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
