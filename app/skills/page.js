import Sidebar from "../../components/Sidebar";
import Link from "next/link";

export default function Achievements() {
  return (
    <main className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="w-3/4 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">スキル</h1>

        {/* --- 言語 --- */}
        <section className="mb-8 mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">言語</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
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
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">プログラミングスキル</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
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
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">フレームワーク & ツール</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
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
      </div>
    </main>
  );
}
