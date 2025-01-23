import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type Plant = {
  id: string;
  commonName: string;
};

export default async function Plants() {
  const plantsDir = path.join(process.cwd(), "content/plants");

  try {
    // Read filenames asynchronously
    const filenames = await fs.readdir(plantsDir);

    // Read file contents and extract data asynchronously
    const plants: Plant[] = await Promise.all(
      filenames.map(async (filename) => {
        const filePath = path.join(plantsDir, filename);
        const fileContents = await fs.readFile(filePath, "utf8");
        const { data } = matter(fileContents);

        return {
          id: filename.replace(".mdx", ""),
          commonName: data.commonName,
        };
      })
    );

    return (
      <main>
        <h1>Florida Native Plants</h1>
        <ul>
          {plants.map((plant) => (
            <li key={plant.id}>
              <Link href={`/plants/${plant.id}`}>{plant.commonName}</Link>
            </li>
          ))}
        </ul>
      </main>
    );
  } catch (error) {
    console.error("Error reading plant data:", error);
    return <p>Failed to load plants. Please try again later.</p>;
  }
}
