import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Page } from "@/components/simple/Layout";

const activitiesDir = path.join(process.cwd(), "content/activities");

function getActivityFiles() {
  return fs
    .readdirSync(activitiesDir)
    .filter((file) => /^\d+_.*\.mdx?$/.test(file));
}

function findActivityFileBySlug(slug) {
  const files = getActivityFiles();

  return files.find((file) => {
    const raw = fs.readFileSync(path.join(activitiesDir, file), "utf8");
    const { data } = matter(raw);
    return data.id === slug;
  });
}

function loadActivityBySlug(slug) {
  const file = findActivityFileBySlug(slug);

  if (!file) return null;

  const raw = fs.readFileSync(path.join(activitiesDir, file), "utf8");
  const { data, content } = matter(raw);

  return {
    data,
    content,
  };
}

export async function generateStaticParams() {
  return getActivityFiles().map((file) => {
    const raw = fs.readFileSync(path.join(activitiesDir, file), "utf8");
    const { data } = matter(raw);

    return {
      slug: data.id,
    };
  });
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const activity = loadActivityBySlug(slug);

  if (!activity) {
    return {
      title: "Activity Not Found | Hiroki Sawada",
    };
  }

  return {
    title: `${activity.data.title} | Hiroki Sawada`,
    description: activity.data.summary,
  };
}

export default async function ActivityDetail({ params }) {
  const { slug } = await params;
  const activity = loadActivityBySlug(slug);

  if (!activity) {
    notFound();
  }

  const { data, content } = activity;

  const { content: MDXContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: false,
    },
    components: {
      a: MdxLink,
      img: MdxImage,
    },
  });

  return (
    <Page>
      <Link href="/activities" className="text-[13px] text-[#999] hover:text-[#333]">
        ← Activities
      </Link>

      <header className="mb-8 mt-8 border-b border-[#e1e1e1] pb-6">
        <p className="text-[13px] text-[#999]">{formatDate(data.date)}</p>
        <h1 className="mt-2 text-[22px] font-normal leading-snug text-[#333]">
          {data.title}
        </h1>
        {data.summary && (
          <p className="mt-4 text-[14px] leading-relaxed text-[#777]">
            {data.summary}
          </p>
        )}
      </header>

      {data.thumbnail && (
        <img src={data.thumbnail} alt={data.title} className="mb-8 w-full" />
      )}

      <article className="prose-simple">{MDXContent}</article>

      <p className="mt-16 border-t border-[#e1e1e1] pt-6 text-[13px]">
        <Link href="/activities" className="font-semibold text-[#333] hover:text-[#999]">
          Activities 一覧へ →
        </Link>
      </p>
    </Page>
  );
}

function MdxLink({ href = "", children, ...props }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}

function MdxImage({ src, alt = "", ...props }) {
  return <img src={src} alt={alt} className="w-full" {...props} />;
}

function formatDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}
