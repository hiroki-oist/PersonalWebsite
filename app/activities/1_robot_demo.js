export const meta = {
  id: "robot-demo",
  title: "CERNet実機デモ（CY Cergy Paris University）",
  date: "2025-02-01",
  thumbnail: "/images/robot_demo.jpg", // ← 最初の画像 or null
  summary: "フランスで行ったCERNetを用いたロボット実機デモの概要。",
};

export default function ActivityPage() {
  return (
    <div className="p-8">
      <h1 className="mb-2">{meta.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{meta.date}</p>
      {meta.thumbnail && (
        <img
          src={meta.thumbnail}
          alt={meta.title}
          className="w-full max-w-lg h-auto rounded mb-4"
        />
      )}
      <p>
        フランスのCY Cergy Paris Universityにて、CERNetを用いた実機デモを行いました。
        Predictive-Coding RNNを活用した生成・認識・自信推定を実時間で検証し、...
      </p>
    </div>
  );
}
