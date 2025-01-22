import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type Butterfly = {
  id: string;
  commonName: string;
};

export default function Butterflies() {
  const files = fs.readdirSync(path.join("content/butterflies"));

  const butterflies = files.map((filename) => {
    const fileContents = fs.readFileSync(path.join("content/butterflies", filename), "utf8");
    const { data } = matter(fileContents);
    return {
      id: filename.replace(".mdx", ""),
      commonName: data.commonName,
    };
  });

  return (
    <main>
      <h1>Florida Butterflies</h1>
      <ul>
        {butterflies.map((butterfly) => (
          <li key={butterfly.id}>
            <Link href={`/butterflies/${butterfly.id}`}>{butterfly.commonName}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
