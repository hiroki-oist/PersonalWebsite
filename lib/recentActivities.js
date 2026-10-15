import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Latest activities (newest first) for the home page news list.
export function loadRecentActivities(lang = "ja", limit = 4) {
  const dir = path.join(process.cwd(), lang === "en" ? "content/activities_en" : "content/activities");

  return fs
    .readdirSync(dir)
    .filter((file) => /^\d+_.*\.mdx?$/.test(file))
    .sort((a, b) => parseInt(b, 10) - parseInt(a, 10))
    .slice(0, limit)
    .map((file) => {
      const { data } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
      return { id: data.id, title: data.title, date: data.date };
    });
}
