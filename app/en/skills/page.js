import SidebarEn from "../../../components/SidebarEn";
import Link from "next/link";

export default function Achievements() {
  return (
    <main className="flex min-h-screen bg-white md:ml-[25%]">
      <SidebarEn />
      <div className="w-1/1 p-8">
        <h1 className="mb-6">Skills</h1>

        {/* --- Robots --- */}
        <section className="mb-8 mt-12">
        <h2 className="mb-4">Robots</h2>
        <ul className="list-disc list-inside space-y-2">
            <li>
            <span className="font-bold">Torobo:</span> A humanoid upper-body robot developed by Tokyo Robotics, 
            equipped with cameras and 18 degrees of freedom (DoF). 
            </li>
            <li>
            <span className="font-bold">Reachy:</span> A humanoid upper-body robot developed by Pollen Robotics, 
            with 17 degrees of freedom (DoF).
            </li>
            <li>
            <span className="font-bold">Smartphone Robot:</span> A custom-built lab robot — a small rover-type platform 
            operated via a mounted smartphone, equipped with wheels.
            </li>
        </ul>
        </section>

        {/* --- Languages --- */}
        <section className="mb-8 mt-12">
          <h2 className="mb-4">Languages</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">English:</span> Near-native fluency
              (13 years of residence abroad, TOEIC 880)
            </li>
            <li>
              <span className="font-bold">Japanese:</span> Native (mother tongue)
            </li>
            <li>
              <span className="font-bold">French:</span> Conversational level
              (CEFR A2, 6-month research stay in Paris)
            </li>
          </ul>
        </section>

        {/* --- Programming Skills --- */}
        <section className="mb-8 mt-12">
          <h2 className="mb-4">Programming Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">Python:</span> Machine learning & robotics development
              (TensorFlow, PyTorch, ROS2 integration)
            </li>
            <li>
              <span className="font-bold">C++:</span> Algorithmic implementation for robotics
              (custom variational RNN with Eigen tensor operations; library development)
            </li>
            <li>
              <span className="font-bold">JavaScript / Node.js:</span> Full-stack development
              (backend architecture and deployment)
            </li>
            <li>
              <span className="font-bold">Swift:</span> iOS app development
              (casual game; currently developing an iPhone game app)
            </li>
          </ul>
        </section>

        {/* --- Frameworks & Tools --- */}
        <section className="mb-8 mt-12">
          <h2 className="mb-4">Frameworks & Tools</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">Frontend:</span> React, Next.js, Tailwind CSS
            </li>
            <li>
              <span className="font-bold">Cloud & Infrastructure:</span> AWS (EC2, S3, SageMaker,
              Lambda, etc.)
            </li>
            <li>
              <span className="font-bold">Databases:</span> MySQL
            </li>
            <li>
              <span className="font-bold">Development Tools:</span> Docker, Git, GitHub
            </li>
          </ul>
        </section>

        {/* --- Hobby --- */}
        <section className="mb-8 mt-12">
          <h2 className="mb-4">Hobbies</h2>
          <ul className="list-disc list-inside pace-y-2">
            <li>
              <span className="font-bold">Karate(Kobudo):</span> Ryukyu-Kobudo Ryukonkai Syudo-kan 1st-dan (black belt)
            </li>
            <li>
              <span className="font-bold">Go:</span> 3rd-dan
            </li>
            <li>
              <span className="font-bold">Scuba Diving:</span> PADI Advanced Open Water Diver
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
