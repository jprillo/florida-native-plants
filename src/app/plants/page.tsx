import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import PlantsList from "./PlantsList"; // Client-side component

type Plant = {
  id: string;
  commonName: string;
  scientificName: string;
  description: string;
  color: string;
  hostTo: string;
  imageOne: string;
};

// Fetch plant data
async function getPlants(): Promise<Plant[]> {
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

export default async function PlantsPage() {
  const plants = await getPlants();

  return (
    <main className="h-pad bg-color pad-top">
      <h1 style={{ textAlign: "center", color: "#D3F9C9" }}>Native Florida Plants</h1>
      {/* Pass data to the client-side component */}
      <PlantsList plants={plants} />
    </main>
  );
}
