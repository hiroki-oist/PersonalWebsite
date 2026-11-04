import grayMatter from "gray-matter";
import yaml from "js-yaml";

// gray-matter's default engine calls yaml.safeLoad, which js-yaml 4 removed.
const engines = { yaml: (str) => yaml.load(str) };

export default function matter(input) {
  return grayMatter(input, { engines });
}
