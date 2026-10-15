import Achievements from "@/components/simple/Achievements";

const publications = [
  {
    authors: (
      <>
        <strong>Hiroki Sawada</strong> and Shunichi Kasahara
      </>
    ),
    year: "2026",
    title:
      "PredVLA: Predictive Sensorimotor Modeling for Sub-Million-Parameter Robot Manipulation",
    venue: "arXiv preprint (arXiv:2608.26673)",
    href: "https://arxiv.org/abs/2608.26673",
    description:
      "小型ロボット制御器を「観測→行動」の写像として圧縮するのではなく、センサ運動ダイナミクスの予測と予測誤差による潜在状態推論として組むPredVLAを提案。ロボットデータの事前学習なし・約0.68MパラメータでLIBERO短horizon 3スイート平均86.94%（LONG含む4スイート平均75.35%）を達成し、同一のパラメータ予算・同一のfrozen front endを与えたBC-Transformer（19.73%）とBC-LSTM（10.26%）を大きく上回った。",
    tags: ["PredVLA", "Predictive Coding", "Robot Manipulation", "LIBERO"],
    featured: true,
  },
  {
    authors: (
      <>
        <strong>Hiroki Sawada</strong> and Shunichi Kasahara
      </>
    ),
    year: "2026",
    title:
      "Beyond Single-Axis Testing: Paired Evaluation of Compound Robustness in Vision-Language-Action Policies",
    venue: "arXiv preprint (arXiv:2609.15940)",
    href: "https://arxiv.org/abs/2609.15940",
    description:
      "同一の初期状態を単軸条件と同時条件でペアにして評価する6軸ベンチマーク LIBERO-CTRL を提案。集計成功率では区別できない emergent failures（単軸は全て成功するが同時条件で失敗）と compensated successes（単軸で失敗があるが同時条件で成功）という逆向きの2つの遷移が相殺するため、集計値が単軸評価と整合して見える場合でも最大29.0%の初期状態で結果が入れ替わり、最も影響の大きい条件では34.5%に達することを6方策・3強度で示した。",
    tags: ["LIBERO-CTRL", "VLA", "Robustness", "Benchmark"],
    featured: true,
  },
  {
    authors: (
      <>
        Henrique Oyama, <strong>Hiroki Sawada</strong>, and Jun Tani
      </>
    ),
    year: "2026",
    title:
      "Predictive-Coding-Based Autonomous Regulation of Internally Generated and Externally Coupled Processing in Human-Robot Interaction",
    venue: "arXiv preprint (arXiv:2609.06888)",
    href: "https://arxiv.org/abs/2609.06888",
    description:
      "PV-RNNのメタプライアを、直近の相互作用履歴に蓄積された再構成誤差に応じてオンラインで切り替える機構を提案。内部生成された予測と外界の感覚証拠への依存度をロボット自身が調整する。3種類の物理的人-ロボット相互作用タスクにおいて、再構成履歴に駆動されたレジーム選択が将来方向の予測誤差とロボット側の物理的衝突を低減することを示した。",
    tags: ["PV-RNN", "Meta-Prior", "Predictive Coding", "HRI"],
  },
  {
    authors: (
      <>
        <strong>Hiroki Sawada</strong> and Jun Tani
      </>
    ),
    year: "2026",
    title:
      "Free-Energy-Gated Plasticity for Real-Time Online Motor Learning in Physical Human-Robot Interaction",
    venue: "arXiv preprint (arXiv:2608.23000)",
    href: "https://arxiv.org/abs/2608.23000",
    description:
      "PV-RNNをシナプス重みの逐次適応まで拡張し、変分自由エネルギーに応じて実効学習率を制御するFree-Energy-Gated Plasticity (FEGP)を提案。事前学習・リプレイ・タスク境界信号なしに実時間の物理的人-ロボット相互作用から3つの周期運動を獲得し、可塑性の平均的な大きさではなく予測ズレに対する時間的配置が既獲得動作の保持を決めることを示した。",
    tags: ["FEGP", "PV-RNN", "Online Learning", "Torobo"],
    featured: true,
  },
  {
    authors: (
      <>
        <strong>Hiroki Sawada</strong>, Wataru Ohata, and Jun Tani
      </>
    ),
    year: "2024",
    title:
      "Human-Robot Kinaesthetic Interaction Based on The Free Energy Principle",
    venue: "IEEE Transactions on Systems, Man and Cybernetics: Systems",
    href: "https://ieeexplore.ieee.org/abstract/document/10734410",
    description:
      "自由エネルギー原理を組み込んだ変分再帰型ニューラルネットワーク、PV-RNNを用いて人-ロボットの力覚相互作用をモデル化。Accuracy と Complexity のバランスを担うハイパーパラメータが、物理的な人-ロボット相互作用に与える影響を定量的に分析した。",
    tags: ["FEP", "PV-RNN", "HRI", "Torobo"],
    featured: true,
  },
  {
    authors: (
      <>
        <strong>Hiroki Sawada</strong> and Jun Tani
      </>
    ),
    year: "2024",
    title:
      "Incremental Learning in Physical Human-Robot Interaction Using Predictive-Coding inspired Variational RNNs",
    venue:
      "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2024, Late Breaking Poster",
    href: "/241008_IROS_POSTER.pdf",
    description:
      "PV-RNNを用いたロボットの増分学習を扱い、新たな動作を学習した際に内部状態空間の情報分布がどのように変化するかを主成分分析により可視化・定量化した。",
    tags: ["Incremental Learning", "Predictive Coding", "PV-RNN", "Torobo"],
    featured: true,
  },
  {
    authors: (
      <>
        <strong>Hiroki Sawada</strong>, Alexandre Pitti, and Mathias Quoy
      </>
    ),
    year: "2026",
    title:
      "CERNet: Class-Embedding Predictive-Coding RNN for Unified Robot Motion, Recognition, and Confidence Estimation",
    venue: "2026 IEEE International Conference on Robotics and Automation (ICRA), pp. 21744-21751",
    href: "https://doi.org/10.1109/ICRA57385.2026.11695989",
    description:
      "予測符号化とクラスEmbeddingを多層RNNに統合し、ロボット運動の生成、認識、自信推定を単一モデルで扱うCERNetを提案。Reachyを用いた実ロボット実験で検証した。",
    tags: ["CERNet", "ICRA 2026", "Predictive Coding", "Reachy"],
    featured: true,
  },
  {
    authors: (
      <>
        Ueta Daichi, Riki Kobayashi, <strong>Hiroki Sawada</strong>, et al.
      </>
    ),
    year: "2022",
    title:
      "Anomalous Magnetic Moment Direction under Magnetic Anisotropy Originated from Crystalline Electric Field in van der Waals Compounds CeTe3 and CeTe2Se",
    venue: "Journal of the Physical Society of Japan 91(9):094706",
    href: "https://journals.jps.jp/doi/abs/10.7566/JPSJ.91.094706",
    description:
      "CeTe3およびCeTe2Seにおける磁気異方性と磁気モーメント方向に関する物性研究。",
    tags: ["Condensed Matter", "Magnetism"],
  },
  {
    authors: (
      <>
        東伸彦, <strong>澤田拓希</strong>, 伊藤大平, 坂上良介, 的場正憲, 臼井秀知,
        神原陽一
      </>
    ),
    year: "2021",
    title:
      "複合アニオン層状化合物 LaCu1-δS0.5Se0.5O (δ~0.01)多結晶縮退半導体の光学バンドギャップ内構造",
    venue: "材料の科学と工学 58 (2021) 64-68",
    href: "https://www.mssj.or.jp/zk/zk_backno/J58/NO2/mstjv58n02p64.pdf",
    description:
      "LaCu1-δS0.5Se0.5O 多結晶縮退半導体の光学バンドギャップ内構造に関する物性研究。",
    tags: ["Materials Science", "Thermoelectric"],
  },
  {
    authors: (
      <>
        N. Azuma, <strong>H. Sawada</strong>, H. Ito, R. Sakagami, Y. Tanaka,
        T. Fujioka, M. Matoba, and Y. Kamihara
      </>
    ),
    year: "2024",
    title:
      "Thermal transport properties of a mixed anion layered compound, polycrystalline LaCu1-δS0.5Se0.5O (δ = 0.01)",
    venue: "Korean Journal of Materials Research 34, 464-474",
    href: "https://journal.mrs-k.or.kr/articles/article/LYNR/#Information",
    description:
      "複合アニオン層状化合物 LaCu1-δS0.5Se0.5O の熱輸送特性に関する研究。",
    tags: ["Materials Science", "Thermal Transport"],
  },
];

const researchHistory = [
  {
    period: "2026.4 – present",
    title: "高度技能ロボットを実現する身体融合学習基盤の創出（CREST）",
    institution: "Sony Computer Science Laboratories, Humanity Science Project",
    location: "Tokyo, Japan",
    advisors: "Project Researcher",
    points: [
      "プロジェクトリサーチャーとして、物理的な人-ロボット相互作用実験の立ち上げを担当。",
      "Enactic社製のオープンソースヒューマノイドロボット「OpenArm」を使用。",
    ],
  },
  {
    period: "2025.1 – 2025.7",
    title:
      "生成・認識・自信推定を単一モデルで行う予測符号化RNNモデル CERNet の提案・実ロボットでの実証",
    institution:
      "CY Cergy Paris Université, Équipes Traitement de l’Information et Systèmes Lab",
    location: "Cergy, France",
    advisors: "Prof. Alexandre Pitti, Prof. Mathias Quoy",
    points: [
      "予測符号化を組み込んだ複数層再帰型ニューラルネットワークを提案。",
      "生成、認識、自信推定を単一の軽量なRNNモデルで統一的に実現。",
      "Pollen Robotics社製ヒューマノイドロボット Reachy を用いて、実空間でのアルファベット描画タスクを検証。",
    ],
  },
  {
    period: "2021.9 – 2026.6",
    title: "自由エネルギー原理を基にした力覚的な人-ロボット相互作用研究",
    institution: "Okinawa Institute of Science and Technology, Cognitive Neurorobotics Research Unit",
    location: "Okinawa, Japan",
    advisors: "Prof. Jun Tani",
    points: [
      "自由エネルギー原理に基づき、予測符号化的な変分RNNを用いて身体的な相互作用をモデル化。",
      "人間とロボット間の双方向の感覚運動ダイナミクスを探究。",
      "理論モデルおよび段階的学習の両面から、相互適応的な運動行動の発現を検証。",
    ],
  },
  {
    period: "2021.5 – 2021.9",
    title: "スマートフォンロボット同士がお互いを認識する画像認識モデルの構築",
    institution: "Okinawa Institute of Science and Technology, Neural Computation Unit",
    location: "Okinawa, Japan",
    advisors: "Prof. Kenji Doya",
    points: [
      "TensorFlowのCNNモデルを用いた転移学習により、スマートフォンロボット同士の画像認識モデルを構築。",
    ],
  },
  {
    period: "2019.7 – 2020.1 / 2021.1 – 2021.4",
    title: "ファンデルワールス化合物 CeTe3 及び CeTe2Se における磁気特性評価",
    institution: "Okinawa Institute of Science and Technology, Quantum Materials Science Unit",
    location: "Okinawa, Japan",
    advisors: "Associate Prof. Yoshinori Okada",
    points: [
      "ファンデルワールス層状化合物 CeTe3 および CeTe2Se の磁気特性を評価。",
      "研究成果は査読付き論文として発表。",
    ],
  },
  {
    period: "2019.4 – 2020.3",
    title:
      "Cu欠陥による複合アニオン層状化合物 LaCu1−δS0.5Se0.5O の熱電変換効率最適化に向けた試料合成",
    institution: "Keio University, Matoba-Kamihara Laboratory",
    location: "Kanagawa, Japan",
    advisors: "Prof. Masanori Matoba",
    points: [
      "LaCu1−δS0.5Se0.5O 多結晶体の合成に成功。",
      "Cu欠陥の熱電変換特性への影響を評価し、研究成果を論文として発表。",
    ],
  },
];

const workHistory = [
  {
    period: "2026.3 – 2026.4",
    title: "LLM評価のための理化学系プロンプトデザイン",
    organization: "Mercor（Bilingual Japanese STEM Expert Writer & Editor）",
    location: "Tokyo, Japan",
    points: [
      "LLMを評価するための理化学系プロンプト（Prompt-Rubric）を設計。",
      "プロンプトの作成者（Writer）および評価者（Editor）として従事。",
    ],
  },
  {
    period: "2023.9 – 2026.3",
    title: "大規模生成モデルと自然言語処理モデルを統合した自動議事録送付システムの開発・運用",
    organization: "株式会社レアゾン・ホールディングス, R&D開発本部",
    location: "Tokyo, Japan",
    points: [
      "正社員エンジニアとして週4日勤務。",
      "LLMとNLPを統合した自動議事録送付システムをメインエンジニアとして開発。",
      "AWS EC2, S3, SageMaker, Lambda などを用いた非同期推論システムを構築。",
      "RAGを活用したGPTエージェントを開発し、社内規則に関する自然言語問い合わせに対応。",
    ],
  },
];

const education = [
  {
    period: "2020.9 – 2026.6",
    school: "Okinawa Institute of Science and Technology",
    degree: "PhD in Computer Science (Cognitive Neurorobotics)",
    location: "Okinawa, Japan",
  },
  {
    period: "2016.4 – 2020.3",
    school: "Keio University",
    degree: "Bachelor of Engineering in Applied Physics and Physico-Informatics",
    location: "Kanagawa, Japan",
  },
];

const fellowships = [
  {
    period: "2025.1 – 2025.7",
    title: "French Government Scholarship",
    organization: "Government of France",
    description:
      "日本人博士課程学生を対象としたフランス政府奨学金。6ヶ月間、月額1709ユーロの給付型奨学金。",
  },
  {
    period: "2021.4 – 2022.3",
    title: "JEES・ソフトバンクAI人材育成奨学金",
    organization: "SoftBank / JEES",
    description:
      "AI分野の博士課程学生を対象とした給付型奨学金。使途自由の100万円を給付。",
  },
  {
    period: "2020.9 – 2026.6",
    title: "OIST PhD Fellowship",
    organization: "Okinawa Institute of Science and Technology",
    description:
      "OIST博士課程における博士奨学生として採択。年間240万円の奨学金。",
  },
];

const academicActivities = [
  {
    period: "2026.10",
    title: "Reviewer, IEEE ICRA 2027 Conference Papers",
    description:
      "IEEE International Conference on Robotics and Automation 2027 における本会議Proceedings論文の査読。",
  },
  {
    period: "2025.5",
    title: "Reviewer, IEEE ICDL 2025 Contributed Papers",
    description:
      "IEEE International Conference on Development and Learning 2025 における認知ロボティクスと学習分野のフルペーパー査読。",
  },
];

export default function AchievementsPage() {
  return (
    <Achievements
      lang="ja"
      publications={publications}
      researchHistory={researchHistory}
      workHistory={workHistory}
      education={education}
      fellowships={fellowships}
      academicActivities={academicActivities}
    />
  );
}
