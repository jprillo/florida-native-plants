import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export type Plant = {
  id: string;
  commonName: string;
  scientificName: string;
  description: string;
  color: string;
  hostTo: string;
  imageOne: string;
};

export async function getPlants(): Promise<Plant[]> {
  const plantsDir = path.join(process.cwd(), "content/plants");
  const filenames = await fs.readdir(plantsDir);

  return Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(plantsDir, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        id: filename.replace(/\.mdx?$/, ""),
        commonName: data.commonName,
        scientificName: data.scientificName,
        description: data.description,
        color: data.color,
        hostTo: data.hostTo,
        imageOne: data.imageOne,
      };
    })
  );
}
