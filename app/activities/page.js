import Sidebar from "../../components/Sidebar";
import ActivityCard from "../../components/ActivityCard";

export default function Activities() {
  // 仮データ（将来的にはDBやCMSから取得可能）
  const activities = [
    {
      id: "robot-demo",
      title: "CERNet実機デモ（CY Cergy Paris University）",
      date: "2025-02-01",
      summary: "フランスで行ったCERNetを用いたロボット実機デモの概要。",
      thumbnail: "/images/robot_demo.jpg",
    },
    {
      id: "conference-review",
      title: "IEEE ICDL 2025 査読活動",
      date: "2025-05-10",
      summary: "認知ロボティクス分野の査読者として参加した活動。",
      thumbnail: null, // サムネなし
    },
  ];

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
