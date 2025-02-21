import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import BlogTemplate from "../../../components/BlogTemplate";

type BlogFrontmatter = {
  title: string;
  author: string;
  description: string;
  color1: string;
  featuredImage: string;
  tags: string[];
  date: string;
};

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "content/blog");
  const files = await fs.readdir(blogDir);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      id: file.replace(".mdx", ""),
    }));
}
export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    // Await the params promise before destructuring
    const { id } = await params;
    const filePath = path.join(process.cwd(), "content/blog", `${id}.mdx`);
    const fileContents = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const mdxSource = await serialize(content);
    const frontmatter = data as BlogFrontmatter;

    return (
      <main>
        <BlogTemplate frontmatter={{ ...frontmatter, content: mdxSource }} />
      </main>
    );
  } catch (error) {
    console.error("Error loading blog data:", error);
    return <p>Blog not found.</p>;
  }
}