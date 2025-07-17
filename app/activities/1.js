import { useRouter } from "next/router";
import Sidebar from "../../components/Sidebar";

export default function ActivityDetail() {
  const router = useRouter();
  const { id } = router.query;

  // 実際にはAPIやデータベースから取得
  const activityDetails = {
    "robot-demo": {
      title: "CERNet実機デモ（CY Cergy Paris University）",
      date: "2025-02-01",
      content: `
        フランスのCY Cergy Paris Universityにて、CERNetを用いた実機デモを行いました。
        Predictive-Coding RNNを活用した生成・認識・自信推定を実時間で検証し、...（詳細続く）
      `,
      thumbnail: "/images/robot_demo.jpg",
    },
    "conference-review": {
      title: "IEEE ICDL 2025 査読活動",
      date: "2025-05-10",
      content: `
        IEEE ICDL 2025における認知ロボティクス分野の査読活動に参加しました。
        査読した論文は...（詳細続く）
      `,
      thumbnail: null,
    },
  };

  const activity = activityDetails[id];

  if (!activity) {
    return <p className="p-8">読み込み中、または活動が見つかりません。</p>;
  }

  return (
    <main className="flex min-h-screen bg-white md:ml-[25%]">
      <Sidebar />
      <div className="w-1/1 p-8">
        <button
          onClick={() => router.back()}
          className="mb-4 px-3 py-1 text-sm border rounded hover:bg-gray-100"
        >
          ← 戻る
        </button>

        <h1 className="mb-2">{activity.title}</h1>
        <p className="text-sm text-gray-500 mb-4">{activity.date}</p>

        {activity.thumbnail && (
          <img
            src={activity.thumbnail}
            alt={activity.title}
            className="w-full max-w-lg h-auto rounded mb-4"
          />
        )}
        <p className="whitespace-pre-wrap">{activity.content}</p>
      </div>
    </main>
  );
}
