import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
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
  params: { id: string };
};

// Generate static paths for all MDX files in `content/blog`
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(filePath);

  // Filter `.mdx` files and generate paths
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));
  console.log("Found MDX Files:", mdxFiles);

  return mdxFiles.map((filename) => ({
    id: filename.replace(".mdx", ""), // Remove the `.mdx` extension
  }));
}

// Render the blog page dynamically based on the `id` parameter
export default async function BlogPage({ params }: BlogPageProps) {
  try {
    const filePath = path.join("content/blog", `${params.id}.mdx`);

    // Check if the `.mdx` file exists
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      notFound(); // Properly handle missing files
    }

    // Read the content of the file
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Parse frontmatter and content using `gray-matter`
    const { data, content } = matter(fileContents);

    // Serialize the MDX content
    const mdxSource: MDXRemoteSerializeResult = await serialize(content, { scope: data });

    // Return JSX instead of an object
    return <BlogTemplate frontmatter={data as BlogFrontmatter} mdxSource={mdxSource} />;
  } catch (error) {
    console.error("Error rendering blog page:", error);
    notFound(); // Gracefully handle unexpected errors
  }
}
