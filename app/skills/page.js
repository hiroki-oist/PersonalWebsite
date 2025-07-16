import Sidebar from "../../components/Sidebar";
import Link from "next/link";

export default function Achievements() {
  return (
    <main className="flex min-h-screen bg-white md:ml-[25%]">
      <Sidebar />
      <div className="w-1/1 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">スキル</h1>

        {/* --- ロボット --- */}
        <section className="mb-8 mt-12">
          <h2 className="mb-4">ロボット</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
                <span className="font-bold">Torobo：</span> 東京ロボティクス社製ヒューマノイド上半身ロボット。カメラ搭載、全18自由度。
            </li>
            <li>
                <span className="font-bold">Reachy：</span> Pollen Robotics社製ヒューマノイド上半身ロボット。全17自由度。
            </li>
            <li>
                <span className="font-bold">スマートフォンロボット：</span> ラボ自作の小型ローバ型ロボット。スマートフォン搭載で動作、車輪駆動。
            </li>
          </ul>
        </section>

        {/* --- 言語 --- */}
        <section className="mb-8 mt-12">
          <h2 className="mb-4">言語</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">英語：</span> 準ネイティブレベル（海外に13年在住経験、TOEIC880）
            </li>
            <li>
              <span className="font-bold">日本語：</span> ネイティブレベル（母国語）
            </li>
            <li>
              <span className="font-bold">フランス語：</span> 日常会話レベル（CEFR A2レベル、パリに6ヶ月間研究員として滞在）
            </li>
          </ul>
        </section>

        {/* --- プログラミングスキル --- */}
        <section className="mb-8 mt-12">
        <h2 className="mb-4">プログラミングスキル</h2>
        <ul className="list-disc list-inside space-y-2">
            <li>
            <span className="font-bold">Python：</span> 機械学習・ロボティクス開発（TensorFlow、PyTorch、ROS2統合）
            </li>
            <li>
            <span className="font-bold">C++：</span> ロボット向けアルゴリズム実装（Eigenを用いたテンソルでの独自変分RNNの実装・ライブラリ作成）
            </li>
            <li>
            <span className="font-bold">JavaScript / Node.js：</span> フルスタック開発（バックエンド設計・デプロイまで一貫対応）
            </li>
            <li>
            <span className="font-bold">Swift：</span> iOSアプリ開発（カジュアルゲーム、iPhoneゲームアプリ開発中）
            </li>
        </ul>
        </section>

        {/* --- フレームワーク & ツール --- */}
        <section className="mb-8 mt-12">
        <h2 className="mb-4">フレームワーク & ツール</h2>
        <ul className="list-disc list-inside space-y-2">
            <li>
            <span className="font-bold">フロントエンド：</span> React、Next.js、Tailwind CSS
            </li>
            <li>
            <span className="font-bold">クラウド・インフラ：</span> AWS（EC2、S3、SageMaker、Lambdaなど）
            </li>
            <li>
            <span className="font-bold">データベース：</span> MySQL
            </li>
            <li>
            <span className="font-bold">開発ツール：</span> Docker、Git、GitHub 
            </li>
        </ul>
        </section>

        {/* --- 趣味 --- */}
        <section className="mb-8 mt-12">
          <h2 className="mb-4">趣味</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">空手（古武道）:</span> 守礼堂　琉球古武道琉棍会　初段（黒帯）。
            </li>
            <li>
              <span className="font-bold">スキューバダイビング:</span> PADI アドバンスド・オープン・ウォーター・ダイバー。
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
