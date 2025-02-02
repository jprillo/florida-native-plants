import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import BlogTemplate from "../../../components/BlogTemplate";

type BlogFrontmatter = {
  title: string;
  author: string;
  description: string;
  color1: string;
  featuredImage: string;

};

type BlogPageProps = {
  params: {
    id: string;
  };
};

// Generate static paths for all MDX files in `content/plants`
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

// Render the plant page dynamically based on the `id` parameter
export default async function BlogPage({ params }: BlogPageProps) {
  try {
    const filePath = await path.join("content/blog", `${ params.id}.mdx`);

    // Check if the `.mdx` file exists
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      return { notFound: true }; // Return a 404 page if the file is missing
    }

    // Read the content of the file
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Parse frontmatter and content using `gray-matter`
    const { data, content } = matter(fileContents);

    // Serialize the MDX content

// Pass the frontmatter as `scope` to serialize
const mdxSource: MDXRemoteSerializeResult = await serialize(content, { scope: data });
    // Pass the frontmatter and serialized content to the `PlantTemplate` component

    return (
      <BlogTemplate frontmatter={data as BlogFrontmatter} mdxSource={mdxSource} />
    );
  } catch (error) {
    console.error("Error rendering plant page:", error);
    return { notFound: true }; // Gracefully handle unexpected errors
  }
}
