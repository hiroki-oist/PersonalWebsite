// app/activities/[slug]/page.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import Sidebar from "../../../components/Sidebar";
import Link from "next/link";

/* ----- ① 静的生成のための slug 一覧 ----- */
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/activities");
  const slugs = fs
    .readdirSync(dir)
    .filter((f) => /^\d+_.*\.mdx?$/.test(f))
    .map((f) => {
      const { data } = matter(
        fs.readFileSync(path.join(dir, f), "utf8")
      );
      return { slug: data.id };
    });
  return slugs;
}

/* ----- ② ページ本体 ----- */
export default async function ActivityDetail({ params }) {
  const { slug } = await params;  
  const dir = path.join(process.cwd(), "content/activities");
  const file = fs
   .readdirSync(dir)
   .find((f) => f.includes(`_${slug}.mdx`));

  if (!file) return <p>記事が見つかりません。</p>;

  const raw = fs.readFileSync(path.join(dir, file), "utf8");
  const { data, content } = matter(raw);
  const { content: MDXContent } = await compileMDX({
   source: content,
   options: { parseFrontmatter: false },
  });

  return (
    <main className="flex min-h-screen bg-white md:ml-[25%]">
      <Sidebar />
      <div className="w-full p-8 prose prose-neutral max-w-none">
        <p>
          <Link
            href="/activities"          // 一覧ページに戻す
            className="mb-4 px-3 py-1 text-sm border rounded hover:bg-gray-100 inline-block"
          >
            ← 戻る
          </Link>
        </p>

        {data.thumbnail && (
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-full max-w-lg h-auto rounded mb-4"
          />
        )}

        <h1>{data.title}</h1>
        <p className="text-sm text-gray-500 mb-4">{data.date}</p>
        {MDXContent}
      </div>
    </main>
  );
}
