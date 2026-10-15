import { Page, PageTitle, SectionHeading } from "@/components/simple/Layout";

const robotSkills = [
  {
    name: "OpenArm (OpenArm 01 / OpenArm 2.0 / OpenArm Cell)",
    maker: "Enactic",
    text: "An open-source 7-DoF humanoid robot arm developed by Enactic. Experience with the first-generation OpenArm 01, its successor OpenArm 2.0, and OpenArm Cell, a standardized workspace for data collection and policy evaluation.",
    tags: ["Open Source", "7-DoF Arm", "Bimanual", "Physical HRI"],
    image: "/robots/openarm.jpg",
    url: "https://openarm.dev/",
    imageCredit: { label: "Image: Enactic (Apache-2.0)", href: "https://github.com/enactic/openarm" },
  },
  {
    name: "YAM",
    maker: "I2RT Robotics",
    text: "Personal project.",
    tags: ["6-DoF Arm"],
    image: "",
    url: "https://i2rt.com/products/yam-6-dof-arm",
  },
  {
    name: "SO-101",
    maker: "TheRobotStudio / Hugging Face",
    text: "Personal project.",
    tags: ["Open Source", "LeRobot"],
    image: "/robots/so101.jpg",
    url: "https://github.com/TheRobotStudio/SO-ARM100",
    imageCredit: { label: "Image: TheRobotStudio (Apache-2.0)", href: "https://github.com/TheRobotStudio/SO-ARM100" },
  },
  {
    name: "Torobo",
    maker: "Tokyo Robotics",
    text: "A humanoid upper-body robot developed by Tokyo Robotics, equipped with cameras and 18 degrees of freedom.",
    tags: ["Humanoid Robot", "18 DoF", "Kinaesthetic HRI"],
    image: "/Torobo.jpg",
    url: "https://robotics.tokyo/technologies/torobo/",
  },
  {
    name: "Reachy",
    maker: "Pollen Robotics",
    text: "A humanoid upper-body robot developed by Pollen Robotics, with 17 degrees of freedom.",
    tags: ["Humanoid Robot", "17 DoF", "Real-world HRI"],
    image: "/robots/reachy.jpg",
    url: "https://www.pollen-robotics.com/reachy/",
    imageCredit: { label: "Image: Pollen Robotics (Apache-2.0)", href: "https://github.com/pollen-robotics/reachy-2021-docs" },
  },
  {
    name: "Smartphone Robot",
    maker: "Lab-built Robot",
    text: "A custom-built small rover-type robot operated via a mounted smartphone and driven by wheels.",
    tags: ["Mobile Robot", "Computer Vision", "Wheeled Platform"],
    image: "",
  },
];

const languageSkills = [
  {
    name: "English",
    level: "Near-native",
    text: "13 years of residence abroad. TOEIC 975. Completed my PhD at the Okinawa Institute of Science and Technology (OIST) entirely in English.",
  },
  {
    name: "Japanese",
    level: "Native",
    text: "Mother tongue.",
  },
  {
    name: "French",
    level: "Conversational / CEFR A2",
    text: "Six-month research stay in Paris.",
  },
];

const programmingSkills = [
  {
    name: "Python",
    text: "Machine learning and robotics development, including TensorFlow, PyTorch, and ROS2 integration.",
    tags: ["Machine Learning", "Robotics", "PyTorch", "TensorFlow", "ROS2"],
  },
  {
    name: "C++",
    text: "Algorithmic implementation for robotics, including custom variational RNN implementation with Eigen tensor operations and library development.",
    tags: ["Robotics", "Eigen", "Variational RNN", "Numerical Computing"],
  },
  {
    name: "JavaScript / Node.js",
    text: "Full-stack development, including backend architecture and deployment.",
    tags: ["Backend", "Full-stack", "API", "Deployment"],
  },
  {
    name: "Swift",
    text: "iOS app development, including casual game development and an iPhone game app currently under development.",
    tags: ["iOS", "SpriteKit", "Game App"],
  },
];

const toolSkills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Cloud / Infrastructure",
    items: ["AWS EC2", "AWS S3", "SageMaker", "Lambda"],
  },
  {
    category: "Database",
    items: ["MySQL"],
  },
  {
    category: "Development Tools",
    items: ["Docker", "Git", "GitHub"],
  },
];

const interests = [
  {
    name: "Karate / Kobudo",
    text: "Ryukyu Kobudo Ryukonkai Syudo-kan, 2nd dan black belt. Third place in the Sai division at the 9th Okinawa Prefecture Kobudo Championship.",
    tags: ["Black Belt", "Ryukyu Kobudo", "Sai"],
  },
  {
    name: "Go",
    text: "3rd dan.",
    tags: ["3rd dan"],
  },
  {
    name: "Scuba Diving",
    text: "PADI Advanced Open Water Diver.",
    tags: ["PADI AOW"],
  },
];

const overview = [
  {
    value: "Robotics",
    label: "Torobo, Reachy, and lab-built mobile robots",
  },
  {
    value: "AI / RNN",
    label: "Predictive coding, PV-RNN, and robot learning",
  },
  {
    value: "Full-stack",
    label: "Next.js, Node.js, AWS, and MySQL",
  },
  {
    value: "Languages",
    label: "Japanese, English, and French",
  },
];

export default function SkillsEn() {
  return (
    <Page>
      <PageTitle sub="A skill set supporting real-robot interaction research, predictive-coding model implementation, web and cloud development, and international research collaboration.">Skills</PageTitle>

      <ul className="space-y-1">
        {overview.map((item) => (
          <li key={item.value}>
            <span className="font-semibold text-[#333]">{item.value}</span>
            <span className="text-[#777]"> — {item.label}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-[13px]">
        <a href="/en/achievements" className="font-semibold text-[#333] hover:text-[#999]">
          Research Profile →
        </a>
      </p>

      <SectionHeading id="robotics">Robotic Platforms</SectionHeading>
      <div className="space-y-6">
        {robotSkills.map((robot) => (
          <RobotItem key={robot.name} robot={robot} />
        ))}
      </div>

      <SectionHeading id="languages">Languages</SectionHeading>
      <div className="space-y-6">
        {languageSkills.map((language) => (
          <Item key={language.name} title={language.name} meta={language.level} text={language.text} />
        ))}
      </div>

      <SectionHeading id="programming">Programming Skills</SectionHeading>
      <div className="space-y-6">
        {programmingSkills.map((skill) => (
          <Item key={skill.name} title={skill.name} text={skill.text} tags={skill.tags} />
        ))}
      </div>

      <SectionHeading id="tools">Frameworks & Tools</SectionHeading>
      <dl className="space-y-3">
        {toolSkills.map((group) => (
          <div key={group.category} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
            <dt className="text-[15px] font-semibold text-[#333] sm:w-[220px] sm:shrink-0">{group.category}</dt>
            <dd>{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>

      <SectionHeading id="interests">Interests</SectionHeading>
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
