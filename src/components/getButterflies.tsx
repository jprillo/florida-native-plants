import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export type Butterfly = {
  id: string;
  commonName: string;
  color: string;
  latinName: string;
};

export async function getButterflies(): Promise<Butterfly[]> {
  const butterfliesDir = path.join(process.cwd(), "content/butterflies");
  const filenames = await fs.readdir(butterfliesDir);

  const butterflies: Butterfly[] = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(butterfliesDir, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        id: filename.replace(".mdx", ""),
        commonName: data.commonName,
        color: data.color,
        latinName: data.latinName,
      };
    })
  );

  return butterflies;
}
