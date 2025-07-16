import SidebarEn from "../../../components/SidebarEn";
import Link from "next/link";

export default function AchievementsEn() {
  return (
    <main className="flex min-h-screen bg-white ml-[25%]">
      <SidebarEn />
      <div className="w-1/1 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Achievements</h1>

        {/* --- Publications --- */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Publications (All Peer-Reviewed)
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              <span className="font-bold underline">Hiroki Sawada</span>, Wataru Ohata, and Jun Tani. (2024).
              <br />
              <em>
                <Link
                  href="https://ieeexplore.ieee.org/abstract/document/10734410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  &quot;Human-Robot Kinaesthetic Interaction Based on The Free Energy Principle&quot;
                </Link>
              </em>
              <br />
              IEEE Transactions on Systems, Man and Cybernetics: Systems.
              <p className="ml-6 mt-1 text-sm text-gray-600">
                Modeled physical human-robot kinaesthetic interaction using a predictive-coding-inspired variational RNN (PV-RNN) based on the Free Energy Principle.
                Quantitatively analyzed how the hyperparameter balancing prediction accuracy and model complexity affects human-robot force interaction.
                Experiments conducted using the Torobo humanoid robot (Tokyo Robotics).
              </p>
            </li>

            <li>
              <span className="font-bold underline">Hiroki Sawada</span> and Jun Tani. (2024).
              <br />
              <em>
                <Link
                  href="/241008_IROS_POSTER.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  &quot;Incremental Learning in Physical Human-Robot Interaction Using Predictive-Coding inspired Variational RNNs&quot;
                </Link>
              </em>
              <br />
              IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2024, Late Breaking Poster.
              <p className="ml-6 mt-1 text-sm text-gray-600">
                Extended the PV-RNN to incremental learning in physical HRI.
                Principal component analysis on the internal state space clarified how incremental learning reshapes the distribution of learned motion patterns.
                Experiments conducted using the Torobo humanoid robot.
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
                Proposed CERNet, a hierarchical predictive-coding RNN with class embedding,
                enabling unified real-time motion generation, recognition, and meta-inference of confidence.
                Demonstrated stable reproduction of 26 handwritten alphabet trajectories and confidence estimation using the Reachy humanoid robot (Pollen Robotics) in both simulation and real-world settings.
              </p>
            </li>

            <li>
              Ueta Daichi, Riki Kobayashi, <span className="font-bold underline">Hiroki Sawada</span>, et al. (2022).
              <br />
              <em>
                <Link
                  href="https://journals.jps.jp/doi/abs/10.7566/JPSJ.91.094706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  &quot;Anomalous Magnetic Moment Direction under Magnetic Anisotropy Originated from Crystalline Electric Field in van der Waals Compounds CeTe3 and CeTe2Se&quot;
                </Link>
              </em>
              <br />
              Journal of the Physical Society of Japan 91(9):094706.
              {/* <p className="ml-6 mt-1 text-sm text-gray-600">
                Investigated magnetic anisotropy in CeTe₃ and CeTe₂Se via inelastic neutron scattering.
                Revealed that the unusual alignment of magnetic moments along the hard axis in CeTe₂Se originates from competition between antisymmetric spin-orbit coupling and crystal electric field anisotropy.
              </p> */}
            </li>

            <li>
              Azuma Nobuhiko, <span className="font-bold underline">Hiroki Sawada</span>, Itoh Houji, Sakagami Ryosuke, Matoba Masanori, Usui Hidenori, and Kamihara Yoichi. (2021).
              <br />
              <em>
                <Link
                  href="https://www.mssj.or.jp/zk/zk_backno/J58/NO2/mstjv58n02p64.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  &quot;In-gap-states of a mixed anion layered compound, polycrystalline LaCu1-deltaS0.5Se0.5O(delta~0.01) as a degenerate semiconductor&quot;
                </Link>
              </em>
              <br />
              Journal of the Society of Materials Science, Japan 58, 64-68.
              {/* <p className="ml-6 mt-1 text-sm text-gray-600">
                Observed in-gap states (~0.5 eV above the valence band edge) in LaCu₁₋δS₀.₅Se₀.₅O (δ≈0.01).
                Identified these in-gap states as the main carriers contributing to electrical conductivity.
              </p> */}
              </li>
            <li>
                N. Azuma, <span className="font-bold underline">H. Sawada</span>, H. Ito, R. Sakagami, Y. Tanaka, T. Fujioka, M. Matoba, and Y. Kamihara. (2024).
                <br />
                <em>
                    <Link
                    href="https://journal.mrs-k.or.kr/articles/article/LYNR/#Information"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                    >
                    &quot;Thermal transport properties of a mixed anion layered compound, polycrystalline LaCu1-δS0.5Se0.5O (δ = 0.01)&quot;
                    </Link>
                </em>
                <br />
                Korean Journal of Materials Research 34, 464-474.
                {/* <p className="ml-6 mt-1 text-sm text-gray-600">
                        We investigated the thermoelectric properties of polycrystalline LaCu₁₋δS₀.₅Se₀.₅O (δ = 0.01) and 
                        demonstrated that Cu vacancies reduce resistivity but lead to a low figure of merit (ZT ≈ 6.4×10⁻⁴) due to a 
                        small Seebeck coefficient. We also confirmed Debye-like phonon behavior in its thermal conductivity.
                </p> */}
            </li>
          </ol>
        </section>

       {/* --- Research History --- */}
        <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Research History</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li className="grid grid-cols-5 gap-2">
            <div className="col-span-1 text-sm text-gray-600">2025.1 – 2025.7</div>
            <div className="col-span-4">
                <p className="font-bold">
                Proposal and Real-Robot Demonstration of CERNet: A Unified Predictive-Coding RNN for Generation, Recognition, and Confidence Estimation
                </p>
                <p className="text-sm text-gray-700">
                Prof. Alexandre Pitti, Prof. Mathias Quoy / Cergy, France
                </p>
                <p className="text-sm text-gray-700 mt-1">
                CY Cergy Paris University, Information Processing and Systems Lab
                </p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                <li>
                    Proposed a new hierarchical predictive-coding RNN model (CERNet) integrating generation, recognition, and confidence estimation into a unified lightweight model.
                    Demonstrated real-time generation, intention inference, and meta-inference of confidence in a real-world handwriting task using a physical robot.
                    Submitted to IEEE RA-L [3].
                </li>
                </ul>
            </div>
            </li>

            <li className="grid grid-cols-5 gap-2">
            <div className="col-span-1 text-sm text-gray-600">2021.9 – present</div>
            <div className="col-span-4">
                <p className="font-bold">
                Human-Robot Kinaesthetic Interaction Based on the Free Energy Principle
                </p>
                <p className="text-sm text-gray-700">Prof. Jun Tani / Okinawa, Japan</p>
                <p className="text-sm text-gray-700 mt-1">
                Cognitive Neurorobotics Research Unit, Okinawa Institute of Science and Technology
                </p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                <li>
                    Modeled physical human-robot interaction using a predictive-coding-inspired variational RNN based on the Free Energy Principle.
                </li>
                <li>
                    Explored bidirectional sensorimotor dynamics and demonstrated the emergence of mutually adaptive motor behaviors, both through theoretical modeling [1] and incremental learning [2].
                </li>
                </ul>
            </div>
            </li>

            <li className="grid grid-cols-5 gap-2">
            <div className="col-span-1 text-sm text-gray-600">2021.5 – 2021.9</div>
            <div className="col-span-4">
                <p className="font-bold">
                Image Recognition Model for Smartphone Robots Using Transfer Learning
                </p>
                <p className="text-sm text-gray-700">Prof. Kenji Doya / Okinawa, Japan</p>
                <p className="text-sm text-gray-700 mt-1">
                Neural Computation Unit, Okinawa Institute of Science and Technology
                </p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                <li>
                    Built an image recognition model enabling mutual recognition between smartphone robots via transfer learning of a CNN (TensorFlow).
                </li>
                </ul>
            </div>
            </li>

            <li className="grid grid-cols-5 gap-2">
            <div className="col-span-1 text-sm text-gray-600">
                2019.7 – 2020.1
                <br />
                2021.1 – 2021.4
            </div>
            <div className="col-span-4">
                <p className="font-bold">
                Magnetic Properties of van der Waals Compounds CeTe3 and CeTe2Se
                </p>
                <p className="text-sm text-gray-700">Assoc. Prof. Yoshinori Okada / Okinawa, Japan</p>
                <p className="text-sm text-gray-700 mt-1">
                Quantum Materials Chemistry Unit, Okinawa Institute of Science and Technology
                </p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                <li>
                    Evaluated magnetic properties of van der Waals layered compounds CeTe3 and CeTe2Se in collaboration with Dr. Fujisawa and Dr. Imai.
                </li>
                <li>
                    Results published in the Journal of the Physical Society of Japan [4].
                </li>
                </ul>
            </div>
            </li>

            <li className="grid grid-cols-5 gap-2">
            <div className="col-span-1 text-sm text-gray-600">2019.4 – 2020.3</div>
            <div className="col-span-4">
                <p className="font-bold">
                Sample Synthesis for Optimizing Thermoelectric Conversion Efficiency of LaCu1−δS0.5Se0.5O
                </p>
                <p className="text-sm text-gray-700">Prof. Masanori Matoba / Kanagawa, Japan</p>
                <p className="text-sm text-gray-700 mt-1">
                Matoba-Kamihara Laboratory, Keio University
                </p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                <li>
                    Successfully synthesized polycrystalline LaCu1−δS0.5Se0.5 for the first time.
                </li>
                <li>
                    Evaluated the effect of Cu defects on thermoelectric properties; results published [5, 6].
                </li>
                </ul>
            </div>
            </li>
        </ol>
        </section>


        {/* --- Work Experience --- */}
        <section className="mb-8 mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Work Experience</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li className="grid grid-cols-5 gap-2">
              <div className="col-span-1 text-sm text-gray-600">2023.9 – present</div>
              <div className="col-span-4">
                <p className="font-bold">
                  Development and Operation of an Automated Meeting Minutes Delivery System Integrating LLM and NLP
                </p>
                <p className="text-sm text-gray-700">Tokyo, Japan</p>
                <p className="text-sm text-gray-700 mt-1">
                  R&D Engineer, Reazon Holdings Corporation
                </p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                  <li>Employed as a full-time engineer (4 days/week).</li>
                  <li>
                    Main engineer (95% of code) for developing an automated meeting minutes delivery system combining LLM and NLP; currently operational within the company.
                  </li>
                  <li>
                    Built a scalable backend using AWS EC2, S3, SageMaker Asynchronous Inference, and Lambda for asynchronous inference.
                  </li>
                  <li>
                    Developed a GPT agent leveraging Retrieval-Augmented Generation (RAG) to answer natural language queries about company regulations.
                  </li>
                </ul>
              </div>
            </li>
          </ol>
        </section>

        {/* --- Education --- */}
        <section className="mb-8 mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Education</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li className="grid grid-cols-5 gap-2">
              <div className="col-span-1 text-sm text-gray-600">2016.4 – 2020.3</div>
              <div className="col-span-4">
                <p className="font-bold">Keio University</p>
                <p className="text-sm text-gray-700">B.S. in Applied Physics and Informatics</p>
                <p className="text-sm text-gray-700">Kanagawa, Japan</p>
              </div>
            </li>
            <li className="grid grid-cols-5 gap-2">
              <div className="col-span-1 text-sm text-gray-600">2020.9 – present</div>
              <div className="col-span-4">
                <p className="font-bold">Okinawa Institute of Science and Technology</p>
                <p className="text-sm text-gray-700">
                  Ph.D. in Cognitive Neurorobotics (expected completion: Feb. 2026)
                </p>
                <p className="text-sm text-gray-700">Okinawa, Japan</p>
              </div>
            </li>
          </ol>
        </section>

        {/* --- Scholarships and Fellowships --- */}
        <section className="mb-8 mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Scholarships and Fellowships
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li className="grid grid-cols-5 gap-2">
              <div className="col-span-1 text-sm text-gray-600">2020.9 – present</div>
              <div className="col-span-4">
                <p className="font-bold">
                  OIST Ph.D. Fellowship
                </p>
                <p className="text-sm text-gray-700">Okinawa, Japan</p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                  <li>
                    Selected as a Ph.D. fellow receiving 2.4 million JPY annually for five years.
                  </li>
                </ul>
              </div>
            </li>
            <li className="grid grid-cols-5 gap-2">
              <div className="col-span-1 text-sm text-gray-600">2021.4 – 2022.3</div>
              <div className="col-span-4">
                <p className="font-bold">
                  JEES & SoftBank AI Human Resource Development Scholarship
                </p>
                <p className="text-sm text-gray-700">SoftBank, Japan</p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                  <li>Received a 1 million JPY unrestricted research scholarship.</li>
                  <li>One of 100 Ph.D. students in AI nationwide to be awarded.</li>
                </ul>
              </div>
            </li>
            <li className="grid grid-cols-5 gap-2">
              <div className="col-span-1 text-sm text-gray-600">2025.1 – 2025.7</div>
              <div className="col-span-4">
                <p className="font-bold">French Government Scholarship</p>
                <p className="text-sm text-gray-700">France</p>
                <ul className="list-disc list-inside mt-1 text-sm text-gray-700 space-y-1">
                  <li>Scholarship for Japanese Ph.D. students.</li>
                  <li>1,709 EUR/month for 6 months.</li>
                </ul>
              </div>
            </li>
          </ol>
        </section>
        {/* --- Academic Services --- */}
        <section className="mb-8 mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Academic Services
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li className="grid grid-cols-5 gap-2">
              <div className="col-span-1 text-sm text-gray-600">2025.5</div>
              <div className="col-span-4">
                <p className="font-bold">
                  Reviewer, IEEE ICDL 2025 Contributed Papers
                </p>
                <p className="text-sm text-gray-700">
                  Reviewed full papers in the fields of cognitive robotics and learning for the IEEE International Conference on Development and Learning (ICDL) 2025.
                </p>
              </div>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
