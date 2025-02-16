import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import BlogList from "./BlogList"; // Client-side component
// Optionally import any CSS or layout components you need

// Define the shape of a blog post for the listing page
type BlogPost = {
  id: string;
  title: string;
  author: string;
  description: string;
  featuredImage: string;
  date: string;
  color1: string;
};

async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(process.cwd(), "content/blog");
  const filenames = await fs.readdir(blogDir);

  return Promise.all(
    filenames
      .filter((filename) => filename.endsWith(".mdx"))
      .map(async (filename) => {
        const filePath = path.join(blogDir, filename);
        const fileContents = await fs.readFile(filePath, "utf8");
        const { data } = matter(fileContents);

        return {
          id: filename.replace(/\.mdx?$/, ""),
          title: data.title,
          author: data.author,
          description: data.description,
          featuredImage: data.featuredImage,
          date: data.date,
          color1: data.color1,
        };
      })
  );
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="h-pad bg-color pad-top">
      <h1 style={{ textAlign: "center", color: "#D3F9C9" }}>Blog</h1>
      {/* Pass the blog posts to the client-side component */}
      <BlogList posts={posts} />
    </main>
  );
}
