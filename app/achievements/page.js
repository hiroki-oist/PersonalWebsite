import Sidebar from "../../components/Sidebar";

export default function Achievements() {
  return (
    <main className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="w-3/4 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">業績</h1>

        {/* --- 発表論文・学会 --- */}
        <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            発表論文・学会（すべて査読あり）
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
            <span className="font-bold underline">Hiroki Sawada</span>, Wataru Ohata, and Jun Tani. (2024).
            <br />
            <em>
                <a
                href="https://ieeexplore.ieee.org/abstract/document/10734410"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
                >
                &quot;Human-Robot Kinaesthetic Interaction Based on The Free Energy Principle&quot;
                </a>
            </em>
            <br />
            IEEE Transactions on Systems, Man and Cybernetics: Systems.
            <p className="ml-6 mt-1 text-sm text-gray-600">
                    自由エネルギー原理を組み込んだ変分再起型ニューラルネットワーク、PV-RNNを用いて人-ロボットの力覚相互作用をモデル化した。
                    特に、自由エネルギー原理における「予測の正確さ（Accuracy）」と「内部モデルの複雑さ（Complexity）」のバランスを担うハイパーパラメータがPV-RNNにおいて
                    どのように人ーロボットの力覚相互作用に影響を及ぼすかを定量的に分析した。
                    東京ロボティクス社製ヒューマノイドロボット、Toroboを使用。
            </p>
            </li>
            <li>
            <span className="font-bold underline">Hiroki Sawada</span> and Jun Tani. (2024).
            <br />
            <em>
                <a
                href="/241008_IROS_POSTER.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
                >
                &quot;Incremental Learning in Physical Human-Robot Interaction Using Predictive-Coding inspired Variational RNNs&quot;
                </a>
            </em>
            <br />
            IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2024, Late Breaking Poster presentation.
            <p className="ml-6 mt-1 text-sm text-gray-600">
                    [1]と同様の予測符号化RNNモデル、PV-RNNを用いて、ロボットに増分学習を行った。
                    PV-RNNの内部状態空間に主成分分析を行い、増分学習で新たな動きをモデルに学ばせた際にどのように内部状態での情報分布が変化していくか定量的に示した。
                    東京ロボティクス社製ヒューマノイドロボット、Toroboを使用。
            </p>
            </li>
            <li>
            <span className="font-bold underline">Hiroki Sawada</span>, Alexandre Pitti, Mathias Quoy. (2025, under review).
            <br />
            <em>
                &quot;CERNet: Class-Embedding Predictive-Coding RNN for Unified Robot Motion, Recognition, and Confidence Estimation&quot;
                <span className="text-gray-500 text-sm ml-2">(Coming soon)</span>
            </em>
            <br />
            IEEE Robotics and Automation Letters (RA-L).
            <p className="ml-6 mt-1 text-sm text-gray-600">
                    予測符号化とクラスEmbeddingを多層化RNNに埋め込むことで、「生成、認識、自信のメタ推論」をリアルタイムに行える新たなモデル、CERNetを提案。
                    ロボットを人が導いて手書きアルファベット26文字を教えることで、シミュレーションと実空間それぞれにおいて、学んだ26軌道の安定生成、軌道情報の推定および
                    起動情報の推定の確度をメタ推定を行えることを示した。
                    奨学金を取得してフランスのラボにて外部研究員として勤務し、当該ラボの教授２名と共同研究を行った。
                    Pollen Robotics社製ヒューマノイドロボット、Reachyを使用。
            </p>
            </li>
            <li>
            Ueta Daichi, Riki Kobayashi, <span className="font-bold underline">Hiroki Sawada</span>, et al. (2022).
            <br />
            <em>
                <a
                href="https://journals.jps.jp/doi/abs/10.7566/JPSJ.91.094706"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
                >
                &quot;Anomalous Magnetic Moment Direction under Magnetic Anisotropy Originated from Crystalline Electric Field in van der Waals Compounds CeTe3 and CeTe2Se&quot;
                </a>
            </em>
            <br />
            Journal of the Physical Society of Japan 91(9):094706.
            <p className="ml-6 mt-1 text-sm text-gray-600">
                    van der Waals化合物CeTe₃およびCeTe₂Seの磁気異方性を非弾性中性子散乱により解析し、結晶電場異方性が支配的である通常のCeTe₃に対し、
                    CeTe₂Seでは反対称スピン軌道相互作用との競合により磁気モーメントが異常にハード軸方向へ整列する機構を明らかにした。
            </p>
            </li>
            <li>
            東伸彦，<span className="font-bold underline">澤田拓希</span>，伊藤大平，坂上良介，的場正憲，臼井秀知，神原陽一. (2021).
            <br />
            <em>
                <a
                href="https://www.mssj.or.jp/zk/zk_backno/J58/NO2/mstjv58n02p64.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
                >
                &quot;複合アニオン層状化合物 LaCu1-δS0.5Se0.5O (δ~0.01)多結晶縮退半導体の光学バンドギャップ内構造&quot;
                </a>
            </em>
            <br />
            材料の科学と工学 58 (2021) 64-68.
            <p className="ml-6 mt-1 text-sm text-gray-600">
                    LaCu₁₋δS₀.₅Se₀.₅O（δ≈0.01）の混合アニオン層状化合物において、
                    Cu欠損によるin‑gap state（価電子帯エッジから約0.5 eV上方）を観測し、これが電気伝導の主役であることを明らかにした。
            </p>
            </li>
            <li>
            N. Azuma, <span className="font-bold underline">H. Sawada</span>, H. Ito, R. Sakagami, Y. Tanaka, T. Fujioka, M. Matoba, and Y. Kamihara. (2024).
            <br />
            <em>
                <a
                href="https://journal.mrs-k.or.kr/articles/article/LYNR/#Information"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
                >
                &quot;Thermal transport properties of a mixed anion layered compound, polycrystalline LaCu1-δS0.5Se0.5O (δ = 0.01)&quot;
                </a>
            </em>
            <br />
            Korean Journal of Materials Research 34, 464-474.
            <p className="ml-6 mt-1 text-sm text-gray-600">
                    多結晶LaCu₁₋δS₀.₅Se₀.₅O（δ = 0.01）の熱電特性を解析し、Cu欠陥が抵抗率を低下させる一方で、ゼーベック係数の小ささによりZTが低いことを示した。
                    さらに、熱伝導率においてデバイモデルに従うフォノン挙動を確認した。
            </p>
            </li>
        </ol>
        </section>


        {/* --- 研究歴 --- */}
        <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">研究歴</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4">

            {/* 1. CY セルジー・パリ大学 */}
            <li className="grid grid-cols-5 gap-2">
            <div className="col-span-1 text-sm text-gray-600">
                2025.1 – 2025.7
            </div>
            <div className="col-span-4">
                <p className="font-bold">
                生成・認識・自信推定を単一モデルで行う予測符号化RNNモデル:CERNetの提案・実ロボットでの実証
                </p>
                <p className="text-sm text-gray-700">
                アレクサンドル ピティ教授, マティアス クォイ教授 (Prof. Alexandre Pitti, Prof. Mathias Quoy) / セルジー、フランス
                </p>
                <p className="text-sm text-gray-700 mt-1">
                CY セルジー・パリ大学 情報処理・システム工学研究室
                (Équipes Traitement de l’Information et Systèmes Lab)
                </p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                <li>
                    予測符号化を組み込んだ新たな複数層再帰型ニューラルネットワークを提案し、生成（予測）・認識・自信推定を統一的に単一の軽量なRNNモデルで実現。
                    物理ロボット上でのアルファベット描画タスクに対し、実世界での安定した生成、行動（意図）推論、推論の確証度メタ推論をリアルタイムに行うことを実証。
                    IEEE RA-Lに投稿済み [3]。
                </li>
                </ul>
            </div>
            </li>

            {/* 2. 沖縄科学技術大学院大学 認知脳ロボティクス */}
            <li className="grid grid-cols-5 gap-2">
            <div className="col-span-1 text-sm text-gray-600">
                2021.9 – present
            </div>
            <div className="col-span-4">
                <p className="font-bold">
                自由エネルギー原理を基にした力覚的な人-ロボットの相互作用研究
                </p>
                <p className="text-sm text-gray-700">
                谷淳 教授 / 沖縄、日本
                </p>
                <p className="text-sm text-gray-700 mt-1">
                沖縄科学技術大学院大学 認知脳ロボティクス研究ユニット
                </p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                <li>
                    自由エネルギー原理に基づき、予測符号化的な変分RNNを用いてヒューマノイドロボットとの身体的な相互作用をモデル化。
                </li>
                <li>
                    人間とロボット間の双方向の感覚運動ダイナミクスを探究し、相互適応的な運動行動の発現を理論モデル [1] および段階的学習 [2] の両面で実証。
                </li>
                </ul>
            </div>
            </li>

            {/* 3. 沖縄科学技術大学院大学 認知脳ロボティクス */}
            <li className="grid grid-cols-5 gap-2">
            <div className="col-span-1 text-sm text-gray-600">
                2021.5 – 2021.9
            </div>
            <div className="col-span-4">
                <p className="font-bold">
                転移学習を用いた、スマートフォンロボット同士がお互いを認識する画像認識モデルの構築
                </p>
                <p className="text-sm text-gray-700">
                銅谷　賢治 教授 / 沖縄、日本
                </p>
                <p className="text-sm text-gray-700 mt-1">
                沖縄科学技術大学院大学 神経計算ユニット
                </p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                <li>
                    TensorflowのCNNモデルの転移学習を行うことで、スマートフォンロボット同士がお互いを認識できる画像認識モデルを構築。
                </li>
                </ul>
            </div>
            </li>

            {/* 4. 沖縄科学技術大学院大学 量子物質化学ユニット */}
            <li className="grid grid-cols-5 gap-2">
            <div className="col-span-1 text-sm text-gray-600">
                2019.7 – 2020.1
                <br />
                2021.1 – 2021.4
            </div>
            <div className="col-span-4">
                <p className="font-bold">
                ファンデルワールス化合物CeTe3及びCeTe2Seにおける磁気特性評価
                </p>
                <p className="text-sm text-gray-700">
                岡田佳憲 准教授 / 沖縄、日本
                </p>
                <p className="text-sm text-gray-700 mt-1">
                沖縄科学技術大学院大学 量子物質化学ユニット
                </p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                <li>
                    藤澤博士と今井博士と共に、ファンデルワールス層状化合物CeTe3及びCeTe2Seの磁気特性を評価。
                </li>
                <li>
                    研究成果は論文として発表済み [4]。
                </li>
                </ul>
            </div>
            </li>

            {/* 5. 慶應義塾大学 的場・神原研究室 */}
            <li className="grid grid-cols-5 gap-2">
            <div className="col-span-1 text-sm text-gray-600">
                2019.4 – 2020.3
            </div>
            <div className="col-span-4">
                <p className="font-bold">
                Cu欠陥による複合アニオン層状化合物 LaCu1−δS0.5Se0.5O の熱電変換効率最適化に向けた試料合成
                </p>
                <p className="text-sm text-gray-700">
                的場正憲 教授 / 神奈川、日本
                </p>
                <p className="text-sm text-gray-700 mt-1">
                慶應義塾大学 的場・神原研究室
                </p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                <li>
                    高い熱電変換効率が期待されるLaCu1−δS0.5Se0.5の多結晶体合成に初めて成功。
                </li>
                <li>
                    LaCu1−δS0.5Se0.5多結晶体におけるCu欠陥の熱電変換特性への影響を評価。研究成果は論文として発表済み [5, 6]。
                </li>
                </ul>
            </div>
            </li>

        </ol>
        </section>
        {/* --- 職歴 --- */}
        <section className="mb-8 mt-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">職歴</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li className="grid grid-cols-5 gap-2">
            {/* 左1/5：期間 */}
            <div className="col-span-1 text-sm text-gray-600">
                2023.9 – present
            </div>

            {/* 右4/5：内容 */}
            <div className="col-span-4">
                <p className="font-bold">
                大規模生成モデルと自然言語処理モデルを統合した自動議事録送付システムの開発・運用
                </p>
                <p className="text-sm text-gray-700">
                東京、日本
                </p>
                <p className="text-sm text-gray-700 mt-1">
                株式会社レアゾン・ホールディングス、R&D開発本部 エンジニア
                </p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                <li>正社員（週４日勤務）として勤務中。</li>
                <li>
                    LLMとNLPを統合した自動議事録送付システムをメインエンジニアとして開発（コードの95%以上を担当）。現在は社内で稼働中。
                </li>
                <li>
                    バックエンドにはAWS EC2, S3, SageMaker Asynchronous Inference, Lambdaなどを活用し、非同期推論によるスケーラブルな構成を構築。
                </li>
                <li>
                    RAG (Retrieval-Augmented Generation) を活用したGPTエージェントを開発し、社内規則に関する自然言語での問い合わせに対応可能とした。
                </li>
                </ul>
            </div>
            </li>
        </ol>
        </section>

        {/* --- 学歴 --- */}
        <section className="mb-8 mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">学歴</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li className="grid grid-cols-5 gap-2">
              <div className="col-span-1 text-sm text-gray-600">
                2016.4 – 2020.3
              </div>
              <div className="col-span-4">
                <p className="font-bold">慶應義塾大学</p>
                <p className="text-sm text-gray-700">物理情報工学 学士</p>
                <p className="text-sm text-gray-700">日本、神奈川</p>
              </div>
            </li>
            <li className="grid grid-cols-5 gap-2">
              <div className="col-span-1 text-sm text-gray-600">
                2020.9 – present
              </div>
              <div className="col-span-4">
                <p className="font-bold">沖縄科学技術大学院大学</p>
                <p className="text-sm text-gray-700">
                  認知脳ロボティクス 博士（2026年2月修了予定）
                </p>
                <p className="text-sm text-gray-700">日本、沖縄</p>
              </div>
            </li>
          </ol>
        </section>


        {/* --- 資格と賞罰歴 --- */}
        <section className="mb-8 mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            資格と賞罰歴
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li className="grid grid-cols-5 gap-2">
              <div className="col-span-1 text-sm text-gray-600">
                2020.9 – present
              </div>
              <div className="col-span-4">
                <p className="font-bold">
                  沖縄科学技術大学院大学 博士奨学生
                </p>
                <p className="text-sm text-gray-700">沖縄、日本</p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                  <li>
                    年間240万円の奨学金を5年間給付される博士奨学生に採択。
                  </li>
                </ul>
              </div>
            </li>
            <li className="grid grid-cols-5 gap-2">
              <div className="col-span-1 text-sm text-gray-600">
                2021.4 – 2022.3
              </div>
              <div className="col-span-4">
                <p className="font-bold">
                  JEES・ソフトバンクAI人材育成奨学金
                </p>
                <p className="text-sm text-gray-700">ソフトバンク、日本</p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                  <li>使途自由の100万円の給付型奨学金。</li>
                  <li>AI分野における博士課程の学生100人が受賞。</li>
                </ul>
              </div>
            </li>
            <li className="grid grid-cols-5 gap-2">
              <div className="col-span-1 text-sm text-gray-600">
                2025.1 – 2025.7
              </div>
              <div className="col-span-4">
                <p className="font-bold">フランス政府奨学金</p>
                <p className="text-sm text-gray-700">フランス政府</p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                  <li>フランス政府から日本人の博士課程生への奨学金。</li>
                  <li>6ヶ月間、1709ユーロ/月の給付型奨学金。</li>
                </ul>
              </div>
            </li>
            <li className="grid grid-cols-5 gap-2">
              <div className="col-span-1 text-sm text-gray-600">
                2025.5
              </div>
              <div className="col-span-4">
                <p className="font-bold">
                  IEEE ICDL 2025 Contributed Papers 査読者
                </p>
                <p className="text-sm text-gray-700">
                  IEEE International Conference on Development and Learning (ICDL)
                  2025の認知ロボティクスと学習の分野におけるフルペーパー査読。
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* --- 言語 --- */}
        <section className="mb-8 mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">言語</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <span className="font-bold">英語：</span> ネイティブレベル（海外に13年在住経験あり）
            </li>
            <li>
              <span className="font-bold">日本語：</span> ネイティブレベル（母国語）
            </li>
            <li>
              <span className="font-bold">フランス語：</span> 日常会話レベル（CEFR A2レベル）
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}
