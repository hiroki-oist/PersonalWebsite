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
      "Proposed PredVLA, a compact recurrent controller organized around predicting sensorimotor dynamics and inferring its latent state from prediction error, rather than compressing a conventional observation-to-action policy. With no robot-data pretraining and about 0.68M trainable parameters, it reaches 86.94% mean success on the three short-horizon LIBERO suites (75.35% across all four), against 19.73% for BC-Transformer and 10.26% for BC-LSTM under a matched parameter budget and an identical frozen front end.",
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
      "Introduced LIBERO-CTRL, a six-axis benchmark that pairs each initial state across single-axis conditions and a matched simultaneous condition. The design exposes two opposing outcome changes that aggregate success rates cannot distinguish, emergent failures and compensated successes; because they cancel, as many as 29.0% of matched initial states change outcome even when the aggregate appears consistent with single-axis measurements, reaching 34.5% in the most affected condition across six policies and three severity levels.",
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
      "Proposed an online mechanism that switches the meta-prior of a PV-RNN according to reconstruction error accumulated over recent interaction history, letting the robot itself regulate how strongly inference relies on internally generated predictions versus external sensory evidence. Across three physical human-robot interaction tasks, reconstruction-history-driven regime selection reduced prospective prediction error and robot-side physical interaction conflict.",
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
      "Extended PV-RNN to continuously adapt its synaptic weights and proposed Free-Energy-Gated Plasticity (FEGP), which regulates the effective learning rate according to variational free energy. A randomly initialized network acquired three cyclic motor patterns during real-time physical human-robot interaction without pretraining, replay, or task-boundary signals, showing that the timing of plasticity relative to model-environment mismatch, rather than its average magnitude, preserves previously acquired behaviors.",
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
      "Modeled physical human-robot kinaesthetic interaction using a predictive-coding-inspired variational RNN based on the Free Energy Principle. Quantitatively analyzed how the hyperparameter balancing prediction accuracy and model complexity affects human-robot force interaction.",
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
      "Extended PV-RNN to incremental learning in physical HRI. Principal component analysis on the internal state space clarified how incremental learning reshapes the distribution of learned motion patterns.",
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
      "Proposed CERNet, a hierarchical predictive-coding RNN with class embedding, enabling unified real-time motion generation, recognition, and meta-inference of confidence. Demonstrated the model using the Reachy humanoid robot in both simulation and real-world settings.",
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
      "Investigated magnetic anisotropy and anomalous magnetic moment direction in van der Waals compounds CeTe3 and CeTe2Se.",
    tags: ["Condensed Matter", "Magnetism"],
  },
  {
    authors: (
      <>
        Azuma Nobuhiko, <strong>Hiroki Sawada</strong>, Itoh Houji, Sakagami Ryosuke,
        Matoba Masanori, Usui Hidenori, and Kamihara Yoichi
      </>
    ),
    year: "2021",
    title:
      "In-gap-states of a mixed anion layered compound, polycrystalline LaCu1-deltaS0.5Se0.5O(delta~0.01) as a degenerate semiconductor",
    venue: "Journal of the Society of Materials Science, Japan 58, 64-68",
    href: "https://www.mssj.or.jp/zk/zk_backno/J58/NO2/mstjv58n02p64.pdf",
    description:
      "Studied in-gap states in the mixed-anion layered compound LaCu1-deltaS0.5Se0.5O as a degenerate semiconductor.",
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
      "Investigated thermal transport properties of the mixed-anion layered compound LaCu1-δS0.5Se0.5O.",
    tags: ["Materials Science", "Thermal Transport"],
  },
];

const researchHistory = [
  {
    period: "Apr. 2026 – present",
    title: "Body Integration Learning Framework for Highly Skilled Robots (CREST)",
    institution: "Sony Computer Science Laboratories, Humanity Science Project",
    location: "Tokyo, Japan",
    advisors: "Project Researcher",
    points: [
      "Leading the setup of physical human-robot interaction experiments as a Project Researcher.",
      "Using the open-source humanoid robot “OpenArm” by Enactic.",
    ],
  },
  {
    period: "Jan. 2025 – Jul. 2025",
    title:
      "Proposal and Real-Robot Demonstration of CERNet: A Unified Predictive-Coding RNN for Generation, Recognition, and Confidence Estimation",
    institution:
      "CY Cergy Paris Université, Équipes Traitement de l’Information et Systèmes Lab",
    location: "Cergy, France",
    advisors: "Prof. Alexandre Pitti, Prof. Mathias Quoy",
    points: [
      "Proposed CERNet, a hierarchical predictive-coding RNN integrating generation, recognition, and confidence estimation into a unified lightweight model.",
      "Demonstrated real-time motion generation, intention inference, and confidence meta-inference in a real-world handwriting task.",
      "Conducted real-robot experiments using the Reachy humanoid robot by Pollen Robotics.",
    ],
  },
  {
    period: "Sep. 2021 – Jun. 2026",
    title:
      "Human-Robot Kinaesthetic Interaction Based on the Free Energy Principle",
    institution:
      "Okinawa Institute of Science and Technology, Cognitive Neurorobotics Research Unit",
    location: "Okinawa, Japan",
    advisors: "Prof. Jun Tani",
    points: [
      "Modeled physical human-robot interaction using a predictive-coding-inspired variational RNN based on the Free Energy Principle.",
      "Explored bidirectional sensorimotor dynamics between humans and robots.",
      "Demonstrated the emergence of mutually adaptive motor behaviors through theoretical modeling and incremental learning.",
    ],
  },
  {
    period: "May 2021 – Sep. 2021",
    title:
      "Image Recognition Model for Smartphone Robots Using Transfer Learning",
    institution:
      "Okinawa Institute of Science and Technology, Neural Computation Unit",
    location: "Okinawa, Japan",
    advisors: "Prof. Kenji Doya",
    points: [
      "Built an image recognition model enabling mutual recognition between smartphone robots via transfer learning of a CNN model in TensorFlow.",
    ],
  },
  {
    period: "Jul. 2019 – Jan. 2020 / Jan. 2021 – Apr. 2021",
    title:
      "Magnetic Properties of van der Waals Compounds CeTe3 and CeTe2Se",
    institution:
      "Okinawa Institute of Science and Technology, Quantum Materials Science Unit",
    location: "Okinawa, Japan",
    advisors: "Assoc. Prof. Yoshinori Okada",
    points: [
      "Evaluated magnetic properties of van der Waals layered compounds CeTe3 and CeTe2Se.",
      "Published the research results in a peer-reviewed journal.",
    ],
  },
  {
    period: "Apr. 2019 – Mar. 2020",
    title:
      "Sample Synthesis for Optimizing Thermoelectric Conversion Efficiency of LaCu1−δS0.5Se0.5O",
    institution: "Keio University, Matoba-Kamihara Laboratory",
    location: "Kanagawa, Japan",
    advisors: "Prof. Masanori Matoba",
    points: [
      "Successfully synthesized polycrystalline LaCu1−δS0.5Se0.5O.",
      "Evaluated the effect of Cu defects on thermoelectric properties and published the results.",
    ],
  },
];

const workHistory = [
  {
    period: "Mar. 2026 – Apr. 2026",
    title: "Designing Scientific Prompts and Evaluation Frameworks for AI Systems",
    institution: "Mercor (Bilingual Japanese STEM Expert Writer & Editor)",
    location: "Tokyo, Japan",
    points: [
      "Designed prompt-rubrics for evaluating LLMs in science and engineering.",
      "Worked as both a prompt creator (Writer) and an evaluator (Editor).",
    ],
  },
  {
    period: "Sep. 2023 – Mar. 2026",
    title:
      "Development and Operation of an Automated Meeting Minutes Delivery System Integrating LLM and NLP",
    institution: "Reazon Holdings Corporation, R&D Division",
    location: "Tokyo, Japan",
    points: [
      "Employed as a full-time engineer four days per week.",
      "Main engineer for an automated meeting minutes delivery system combining LLM and NLP.",
      "Built a scalable backend using AWS EC2, S3, SageMaker Asynchronous Inference, and Lambda.",
      "Developed a GPT agent using Retrieval-Augmented Generation to answer natural language queries about company regulations.",
    ],
  },
];

const education = [
  {
    period: "Sep. 2020 – Jun. 2026",
    school: "Okinawa Institute of Science and Technology",
    degree: "Ph.D. in Computer Science (Cognitive Neurorobotics)",
    location: "Okinawa, Japan",
  },
  {
    period: "Apr. 2016 – Mar. 2020",
    school: "Keio University",
    degree: "B.S. in Applied Physics and Physico-Informatics",
    location: "Kanagawa, Japan",
  },
];

const fellowships = [
  {
    period: "Jan. 2025 – Jul. 2025",
    title: "French Government Scholarship",
    organization: "Government of France",
    description:
      "A French government scholarship for Japanese Ph.D. students. Provided 1,709 EUR per month for six months.",
  },
  {
    period: "Apr. 2021 – Mar. 2022",
    title: "JEES & SoftBank AI Human Resource Development Scholarship",
    organization: "SoftBank / JEES",
    description:
      "An unrestricted 1 million JPY scholarship awarded to selected Ph.D. students in AI.",
  },
  {
    period: "Sep. 2020 – Jun. 2026",
    title: "OIST Ph.D. Fellowship",
    organization: "Okinawa Institute of Science and Technology",
    description:
      "Selected as an OIST Ph.D. fellow receiving an annual scholarship of 2.4 million JPY.",
  },
];

const academicActivities = [
  {
    period: "Oct 2026",
    title: "Reviewer, IEEE ICRA 2027 Conference Papers",
    description:
      "Reviewed main conference proceedings papers for the IEEE International Conference on Robotics and Automation 2027.",
  },
  {
    period: "May 2025",
    title: "Reviewer, IEEE ICDL 2025 Contributed Papers",
    description:
      "Reviewed full papers in cognitive robotics and learning for the IEEE International Conference on Development and Learning 2025.",
  },
];

export default function AchievementsEnPage() {
  return (
    <Achievements
      lang="en"
      publications={publications}
      researchHistory={researchHistory}
      workHistory={workHistory}
      education={education}
      fellowships={fellowships}
      academicActivities={academicActivities}
    />
  );
}
