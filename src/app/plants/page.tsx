import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

import RootLayout from "../../app/layout"

type Plant = {
  id: string;
  commonName: string;
};

export default function Plants() {
  const files = fs.readdirSync(path.join("content/plants"));

  const plants = files.map((filename) => {
    const fileContents = fs.readFileSync(path.join("content/plants", filename), "utf8");
    const { data } = matter(fileContents);
    return {
      id: filename.replace(".mdx", ""),
      commonName: data.commonName,
    };
  });

  return (
    <RootLayout>
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
    </RootLayout>
  );
}
