import { Page, PageTitle } from "./Layout";

const labels = {
  ja: {
    sub: "個人で企画・開発しているアプリやプロダクトです。",
  },
  en: {
    sub: "Apps and products I plan and build on my own.",
  },
};

export default function Projects({ lang = "ja", projects }) {
  const t = labels[lang];

  return (
    <Page>
      <PageTitle sub={t.sub}>Projects</PageTitle>

      <div className="mt-10 space-y-10">
        {projects.map((item) => (
          <article
            key={item.title}
            className="grid grid-cols-1 gap-1 sm:grid-cols-[150px_1fr] sm:gap-6"
          >
            <p className="text-[13px] text-[#999] sm:pt-[3px]">{item.period}</p>
            <div className="min-w-0">
              <div className="flex items-center gap-4">
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={72}
                    height={72}
                    className="h-[72px] w-[72px] shrink-0 rounded-[22%] border border-[#e1e1e1]"
                  />
                )}
                <div className="min-w-0">
                  <h2 className="text-[17px] font-semibold leading-snug text-[#333]">{item.title}</h2>
                  {item.platform && <p className="mt-0.5 text-[13px] text-[#777]">{item.platform}</p>}
                </div>
              </div>
              <p className="mt-2 text-[14px] leading-[1.8]">{item.description}</p>
              {item.tags?.length > 0 && (
                <p className="mt-2 text-[12px] text-[#aaa]">{item.tags.join(" · ")}</p>
              )}
              {item.links?.length > 0 && (
                <p className="mt-2 text-[13px]">
                  {item.links.map((link, i) => (
                    <span key={link.href}>
                      {i > 0 && <span className="mx-2 text-[#bbb]">|</span>}
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#333] transition-colors hover:text-[#999]"
                      >
                        {link.label}
                      </a>
                    </span>
                  ))}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </Page>
  );
}
