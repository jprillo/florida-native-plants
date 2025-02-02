import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import BlogList from "./BlogClient"; // Client-side component

type Blog = {
  id: string;
  title: string
  description: string;
  author: string;
  featuredimage: string;
  color1: string;

};

// Fetch plant data
async function getBlog(): Promise<Blog[]> {
  const blogDir = path.join(process.cwd(), "content/blog");
  const filenames = await fs.readdir(blogDir);

  return Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(blogDir, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        id: filename.replace(/\.mdx?$/, ""),
        author: data.author,
        title: data.title,
        description: data.description,
        featuredimage: data.featuredimage,
        color1: data.color1,

      };
    })
  );
}

export default async function BlogPage() {
  const blog = await getBlog();

  return (
    <main className="h-pad bg-color pad-top">
      <h1 style={{ textAlign: "center", color: "#D3F9C9" }}>Blog</h1>
      {/* Pass data to the client-side component */}
      <BlogList blog={blog} />
    </main>
  );
}
