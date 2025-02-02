import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export type Blog = {
  id: string;
  title: string;
  description: string;
  author: string;
  featuredimage: string;
};

export async function getBlog(): Promise<Blog[]> {
  const blogDir = path.join(process.cwd(), "content/blog"); // Assuming your blogs are stored in a "blogs" folder
  const filenames = await fs.readdir(blogDir);

  const blogs: Blog[] = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(blogDir, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        id: filename.replace(".mdx", ""),
        title: data.title,
        description: data.description,
        author: data.author,
        featuredimage: data.featuredimage,
      };
    })
  );

  return blogs;
}
