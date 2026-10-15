import SiteHeader from "./SiteHeader";

export function Page({ children }) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[860px] px-4 pb-24 pt-12 md:pt-16">{children}</main>
      <footer className="border-t border-[#e1e1e1] py-8 text-center text-[12px] text-[#999]">
        © {new Date().getFullYear()} Hiroki Sawada
      </footer>
    </>
  );
}

export function SectionHeading({ id, children }) {
  return (
    <h2
      id={id}
      className="mb-6 mt-16 scroll-mt-20 border-b border-[#e1e1e1] pb-2 text-[13px] font-normal tracking-[0.06em] text-[#666]"
    >
      {children}
    </h2>
  );
}

export function PageTitle({ children, sub }) {
  return (
    <div className="mb-10">
      <h1 className="text-[25px] font-normal tracking-[0.03em] text-[#333]">{children}</h1>
      {sub && <p className="mt-2 text-[14px] text-[#777]">{sub}</p>}
    </div>
  );
}

// Pipe-separated link row: "PDF | Video | ..."
export function LinkRow({ items }) {
  const visible = items.filter(Boolean);
  if (visible.length === 0) return null;

  return (
    <span className="text-[13px] text-[#999]">
      {visible.map((item, i) => (
        <span key={i}>
          {i > 0 && <span className="mx-2">|</span>}
          {item}
        </span>
      ))}
    </span>
  );
}
