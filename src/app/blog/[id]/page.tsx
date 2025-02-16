import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import BlogTemplate from "../../../components/BlogTemplate";
import { notFound } from "next/navigation";

type BlogFrontmatter = {
  title: string;
  author: string;
  description: string;
  color1: string;
  featuredImage: string;
  tags: string[];
  date: string;
};

type BlogPageProps = {
  params: { id: string } | Promise<{ id: string }>;
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

export default async function BlogPage({ params }: BlogPageProps) {
  try {
    // Await params to get the id dynamically
    const { id } = await params;

    // Resolve the file path dynamically
    const filePath = path.join(process.cwd(), "content/blog", `${id}.mdx`);

    // Read the file contents asynchronously
    const fileContents = await fs.readFile(filePath, "utf8");

    // Parse the MDX file (frontmatter + content)
    const { data, content } = matter(fileContents);

    // Serialize the MDX content
    const mdxSource = await serialize(content);

    // Cast frontmatter to the correct type
    const frontmatter = data as BlogFrontmatter;

    // Render the BlogTemplate component with the parsed data
    return <BlogTemplate frontmatter={frontmatter} mdxSource={mdxSource} />;
  } catch (error) {
    console.error("Error rendering blog page:", error);
    notFound();
  }
}
