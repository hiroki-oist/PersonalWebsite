import { Page, PageTitle } from "@/components/simple/Layout";

const contactLinks = [
  {
    label: "Sony CSL",
    note: "Official researcher profile at Sony CSL",
    value: "Official profile",
    href: "https://www.sonycsl.co.jp/people/hiroki-sawada/",
    external: true,
  },
  {
    label: "Google Scholar",
    note: "Research publications and citation profile",
    value: "Publication profile",
    href: "https://scholar.google.co.jp/citations?user=1-0jnO4AAAAJ&hl=ja",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Professional profile",
    href: "https://www.linkedin.com/in/hiroki-sawada-1252461b6/",
    external: true,
  },
  {
    label: "GitHub",
    note: "Code and development projects",
    value: "hiroki-oist",
    href: "https://github.com/hiroki-oist",
    external: true,
  },
  {
    label: "X",
    note: "Research updates",
    value: "@hiroki_research",
    href: "https://x.com/hiroki_research",
    external: true,
  },
  {
    label: "Private Gmail",
    value: "hiroki.sawada.research@gmail.com",
    href: "mailto:hiroki.sawada.research@gmail.com",
    external: false,
  },
  {
    label: "Official Email",
    value: "hiroki.sawada@csl.sony.co.jp",
    href: "mailto:hiroki.sawada@csl.sony.co.jp",
    external: false,
  },
];

export default function ContactEn() {
  return (
    <Page>
      <PageTitle sub="Contact & Profiles">Contact</PageTitle>

      <p className="mb-10 leading-[1.9]">
        For research inquiries, collaborations, talks, or related contact,
        please use the email addresses or profiles listed below.
      </p>

      <dl className="border-t border-[#e1e1e1]">
        {contactLinks.map((item) => (
          <div
            key={item.label}
            className="grid grid-cols-1 gap-1 border-b border-[#e1e1e1] py-3 sm:grid-cols-[140px_1fr] sm:gap-4"
          >
            <dt className="text-[13px] text-[#777] sm:pt-[2px]">{item.label}</dt>
            <dd className="min-w-0">
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="break-words font-semibold text-[#333] hover:text-[#999]"
              >
                {item.value}
              </a>
              {item.note && <p className="mt-1 text-[13px] text-[#999]">{item.note}</p>}
            </dd>
          </div>
        ))}
      </dl>
    </Page>
  );
}
