import { Page, PageTitle, SectionHeading } from "@/components/simple/Layout";

const robotSkills = [
  {
    name: "OpenArm (OpenArm 01 / OpenArm 2.0 / OpenArm Cell)",
    maker: "Enactic",
    text: "Enactic社製のオープンソース7自由度ヒューマノイドロボットアーム。初代のOpenArm 01、後継のOpenArm 2.0、およびデータ収集・方策評価用の標準作業環境OpenArm Cellを使用。",
    tags: ["オープンソース", "7自由度アーム", "双腕", "物理的HRI"],
    image: "/robots/openarm.jpg",
    url: "https://openarm.dev/",
    imageCredit: { label: "Image: Enactic (Apache-2.0)", href: "https://github.com/enactic/openarm" },
  },
  {
    name: "YAM",
    maker: "I2RT Robotics",
    text: "個人プロジェクト。",
    tags: ["6自由度アーム"],
    image: "",
    url: "https://i2rt.com/products/yam-6-dof-arm",
  },
  {
    name: "SO-101",
    maker: "TheRobotStudio / Hugging Face",
    text: "個人プロジェクト。",
    tags: ["オープンソース", "LeRobot"],
    image: "/robots/so101.jpg",
    url: "https://github.com/TheRobotStudio/SO-ARM100",
    imageCredit: { label: "Image: TheRobotStudio (Apache-2.0)", href: "https://github.com/TheRobotStudio/SO-ARM100" },
  },
  {
    name: "Torobo",
    maker: "東京ロボティクス",
    text: "東京ロボティクス社製ヒューマノイド上半身ロボット。カメラ搭載、全18自由度。",
    tags: ["ヒューマノイド", "18自由度", "力覚HRI"],
    image: "/Torobo.jpg",
    url: "https://robotics.tokyo/technologies/torobo/",
  },
  {
    name: "Reachy",
    maker: "Pollen Robotics",
    text: "Pollen Robotics社製ヒューマノイド上半身ロボット。全17自由度。",
    tags: ["ヒューマノイド", "17自由度", "実ロボット実験"],
    image: "/robots/reachy.jpg",
    url: "https://www.pollen-robotics.com/reachy/",
    imageCredit: { label: "Image: Pollen Robotics (Apache-2.0)", href: "https://github.com/pollen-robotics/reachy-2021-docs" },
  },
  {
    name: "スマートフォンロボット",
    maker: "ラボ自作ロボット",
    text: "ラボ自作の小型ローバ型ロボット。スマートフォン搭載で動作、車輪駆動。",
    tags: ["小型移動ロボット", "画像認識", "車輪駆動"],
    image: "",
  },
];

const languageSkills = [
  {
    name: "英語",
    level: "準ネイティブレベル",
    text: "海外に13年在住経験。TOEIC 975。沖縄科学技術大学院大学（OIST）の博士課程を英語で修了。",
  },
  {
    name: "日本語",
    level: "ネイティブ",
    text: "母国語。",
  },
  {
    name: "フランス語",
    level: "日常会話レベル / CEFR A2",
    text: "パリに6ヶ月間、研究員として滞在。",
  },
];

const programmingSkills = [
  {
    name: "Python",
    text: "機械学習・ロボティクス開発。TensorFlow、PyTorch、ROS2統合。",
    tags: ["機械学習", "ロボティクス", "PyTorch", "TensorFlow", "ROS2"],
  },
  {
    name: "C++",
    text: "ロボット向けアルゴリズム実装。Eigenを用いたテンソルでの独自変分RNNの実装・ライブラリ作成。",
    tags: ["ロボティクス", "Eigen", "変分RNN", "数値計算"],
  },
  {
    name: "JavaScript / Node.js",
    text: "フルスタック開発。バックエンド設計からデプロイまで一貫対応。",
    tags: ["バックエンド", "フルスタック", "API", "デプロイ"],
  },
  {
    name: "Swift",
    text: "iOSアプリ開発。カジュアルゲーム、iPhoneゲームアプリを開発中。",
    tags: ["iOS", "SpriteKit", "ゲームアプリ"],
  },
];

const toolSkills = [
  {
    category: "フロントエンド",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "クラウド・インフラ",
    items: ["AWS EC2", "AWS S3", "SageMaker", "Lambda"],
  },
  {
    category: "データベース",
    items: ["MySQL"],
  },
  {
    category: "開発ツール",
    items: ["Docker", "Git", "GitHub"],
  },
];

const interests = [
  {
    name: "空手・古武道",
    text: "琉球古武道琉棍会守道館 二段。第九回沖縄県古武道選手権大会 サイの部 三位。",
    tags: ["黒帯", "琉球古武道", "サイ"],
  },
  {
    name: "囲碁",
    text: "三段。",
    tags: ["三段"],
  },
  {
    name: "スキューバダイビング",
    text: "PADI アドバンスド・オープン・ウォーター・ダイバー。",
    tags: ["PADI AOW"],
  },
];

const overview = [
  {
    value: "ロボティクス",
    label: "Torobo、Reachy、ラボ自作ロボットを用いた実機研究",
  },
  {
    value: "AI / RNN",
    label: "予測符号化、PV-RNN、ロボット学習",
  },
  {
    value: "フルスタック",
    label: "Next.js、Node.js、AWS、MySQLを用いた開発",
  },
  {
    value: "言語",
    label: "日本語、英語、フランス語",
  },
];

export default function Skills() {
  return (
    <Page>
      <PageTitle sub="実ロボットを用いた身体的相互作用研究、予測符号化モデルの実装、Web・クラウド開発、国際的な研究環境でのコミュニケーションを支えるスキルセットです。">Skills</PageTitle>

      <ul className="space-y-1">
        {overview.map((item) => (
          <li key={item.value}>
            <span className="font-semibold text-[#333]">{item.value}</span>
            <span className="text-[#777]"> — {item.label}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-[13px]">
        <a href="/achievements" className="font-semibold text-[#333] hover:text-[#999]">
          研究業績を見る →
        </a>
      </p>

      <SectionHeading id="robotics">ロボット経験</SectionHeading>
      <div className="space-y-6">
        {robotSkills.map((robot) => (
          <RobotItem key={robot.name} robot={robot} />
        ))}
      </div>

      <SectionHeading id="languages">言語</SectionHeading>
      <div className="space-y-6">
        {languageSkills.map((language) => (
          <Item key={language.name} title={language.name} meta={language.level} text={language.text} />
        ))}
      </div>

      <SectionHeading id="programming">プログラミング</SectionHeading>
      <div className="space-y-6">
        {programmingSkills.map((skill) => (
          <Item key={skill.name} title={skill.name} text={skill.text} tags={skill.tags} />
        ))}
      </div>

      <SectionHeading id="tools">フレームワーク・ツール</SectionHeading>
      <dl className="space-y-3">
        {toolSkills.map((group) => (
          <div key={group.category} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
            <dt className="text-[15px] font-semibold text-[#333] sm:w-[220px] sm:shrink-0">{group.category}</dt>
            <dd>{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>

      <SectionHeading id="interests">趣味・活動</SectionHeading>
      <div className="space-y-6">
        {interests.map((item) => (
          <Item key={item.name} title={item.name} text={item.text} tags={item.tags} />
        ))}
      </div>
    </Page>
  );
}

function Item({ title, meta, text, tags }) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold text-[#333]">{title}</h3>
      {meta && <p className="text-[13px] text-[#777]">{meta}</p>}
      <p className="mt-1">{text}</p>
      {tags && tags.length > 0 && (
        <p className="mt-1 text-[13px] text-[#999]">{tags.join(" · ")}</p>
      )}
    </div>
  );
}

function RobotItem({ robot }) {
  const external = { target: "_blank", rel: "noopener noreferrer" };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
      <div className="w-[150px] shrink-0">
        {robot.image ? (
          <img
            src={robot.image}
            alt={robot.name}
            className="h-[110px] w-[150px] bg-[#f5f5f5] object-contain"
          />
        ) : (
          <div className="flex h-[110px] w-[150px] items-center justify-center bg-[#f5f5f5] text-[12px] text-[#bbb]">
            No photo
          </div>
        )}
        {robot.imageCredit && (
          <a
            href={robot.imageCredit.href}
            {...external}
            className="mt-1 block text-[10px] leading-tight text-[#bbb] hover:text-[#777]"
          >
            {robot.imageCredit.label}
          </a>
        )}
      </div>
      <div className="min-w-0">
        <Item
          title={
            robot.url ? (
              <a href={robot.url} {...external} className="hover:text-[#999]">
                {robot.name} <span className="text-[12px] font-normal text-[#999]">↗</span>
              </a>
            ) : (
              robot.name
            )
          }
          meta={robot.maker}
          text={robot.text}
          tags={robot.tags}
        />
      </div>
    </div>
  );
}
