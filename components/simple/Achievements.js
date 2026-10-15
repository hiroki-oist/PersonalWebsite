import { Page, PageTitle, SectionHeading } from "./Layout";

const linkClass = "font-semibold text-[#333] transition-colors hover:text-[#999]";

function linkProps(href) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

const labels = {
  ja: {
    sub: "研究業績・経歴",
    cv: "CV (PDF)",
    cvHref: "/cv/cv_jp.pdf",
    link: "Link",
  },
  en: {
    sub: "Publications, research history, and profile",
    cv: "CV (PDF)",
    cvHref: "/cv/cv_en.pdf",
    link: "Link",
  },
};

const sections = [
  ["publications", "Publications"],
  ["research", "Research Experience"],
  ["work", "Engineering Experience"],
  ["education", "Education"],
  ["fellowships", "Scholarships & Fellowships"],
  ["academic", "Academic Activities"],
];

export default function Achievements({
  lang = "ja",
  publications,
  researchHistory,
  workHistory,
  education,
  fellowships,
  academicActivities,
}) {
  const t = labels[lang];

  return (
    <Page>
      <PageTitle sub={t.sub}>Research</PageTitle>

      <p className="text-[13px] text-[#999]">
        {sections.map(([id, title], i) => (
          <span key={id}>
            {i > 0 && <span className="mx-2">|</span>}
            <a href={`#${id}`} className="hover:text-[#333]">
              {title}
            </a>
          </span>
        ))}
        <span className="mx-2">|</span>
        <a href={t.cvHref} className={linkClass}>
          {t.cv}
        </a>
      </p>

      <SectionHeading id="publications">Publications</SectionHeading>
      <ol className="space-y-7">
        {publications.map((paper) => (
          <li key={paper.title}>
            <p className="text-[15px] font-semibold leading-snug text-[#333]">{paper.title}</p>
            <p className="mt-1 text-[13px] text-[#666]">{paper.authors}</p>
            <p className="mt-0.5 text-[13px] text-[#777]">
              {paper.venue}
              {paper.year && !paper.venue.includes(paper.year) && `, ${paper.year}`}
              <span className="mx-2 text-[#bbb]">|</span>
              <a href={paper.href} className={linkClass} {...linkProps(paper.href)}>
                {paper.href.endsWith(".pdf") ? "PDF" : t.link}
              </a>
            </p>
            <p className="mt-2 text-[14px] leading-[1.75]">{paper.description}</p>
            {paper.tags?.length > 0 && (
              <p className="mt-1 text-[12px] text-[#aaa]">{paper.tags.join(" · ")}</p>
            )}
          </li>
        ))}
      </ol>

      <SectionHeading id="research">Research Experience</SectionHeading>
      <Timeline items={researchHistory} />

      <SectionHeading id="work">Engineering Experience</SectionHeading>
      <Timeline
        items={workHistory.map((item) => ({ ...item, institution: item.organization }))}
      />

      <SectionHeading id="education">Education</SectionHeading>
      <div className="space-y-4">
        {education.map((item) => (
          <Row key={item.school} period={item.period}>
            <p className="font-semibold text-[#333]">{item.school}</p>
            <p className="text-[14px]">{item.degree}</p>
            <p className="text-[13px] text-[#999]">{item.location}</p>
          </Row>
        ))}
      </div>

      <SectionHeading id="fellowships">Scholarships & Fellowships</SectionHeading>
      <div className="space-y-5">
        {fellowships.map((item) => (
          <Row key={item.title} period={item.period}>
            <p className="font-semibold text-[#333]">{item.title}</p>
            <p className="text-[13px] text-[#999]">{item.organization}</p>
            <p className="mt-1 text-[14px] leading-[1.75]">{item.description}</p>
          </Row>
        ))}
      </div>

      <SectionHeading id="academic">Academic Activities</SectionHeading>
      <div className="space-y-5">
        {academicActivities.map((item) => (
          <Row key={item.title} period={item.period}>
            <p className="font-semibold text-[#333]">{item.title}</p>
            <p className="mt-1 text-[14px] leading-[1.75]">{item.description}</p>
          </Row>
        ))}
      </div>
    </Page>
  );
}

function Row({ period, children }) {
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-[150px_1fr] sm:gap-6">
      <p className="text-[13px] text-[#999] sm:pt-[2px]">{period}</p>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function Timeline({ items }) {
  return (
    <div className="space-y-7">
      {items.map((item) => (
        <Row key={`${item.period}-${item.title}`} period={item.period}>
          <p className="font-semibold leading-snug text-[#333]">{item.title}</p>
          <p className="mt-1 text-[13px] text-[#666]">{item.institution}</p>
          <p className="text-[13px] text-[#999]">
            {[item.advisors, item.location].filter(Boolean).join(" — ")}
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[14px] leading-[1.7] marker:text-[#bbb]">
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Row>
      ))}
    </div>
  );
}
