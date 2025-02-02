import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type Butterfly = {
  id: string;
  commonName: string;
  color: string;
  latinName: string;
  imageOne: string;
};

export default async function Butterflies() {
  const butterfliesDir = path.join(process.cwd(), "content/butterflies");

  try {
    // Get all filenames in the butterflies directory
    const filenames = await fs.readdir(butterfliesDir);

    // Read each file and extract its metadata
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
          imageOne: data.imageOne,
        };
      })
    );

    return (
      <main className="h-pad bg-color pad-top">
         <h1 style={{ textAlign: "center", color: "#D3F9C9" }}>Florida Butterflies</h1>
        <ul    style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "50px",
          gap: "20px",
        }}>
          {butterflies.map((butterfly) => (

              <Link
              key={butterfly.id}
                className="flower-container"
                style={{
                  color: butterfly.color,
                  borderColor: butterfly.color,
                  backgroundImage: `url(${butterfly.imageOne})`,
                  borderRadius: "25px",
                  backgroundPosition: "center",
              backgroundSize: "cover",
                  height: "265px",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "10px",
                  textDecoration: "none",
                  textAlign: "center",
                }}
                href={`/butterflies/${butterfly.id}`}
              >
                <div>
                  <h3>{butterfly.commonName}</h3>
                  <p>
                    {butterfly.latinName}
                  </p>
                </div>
              </Link>

          ))}
        </ul>
      </main>
    );
  } catch (error) {
    console.error("Error loading butterflies:", error);
    return <p>Failed to load butterflies. Please try again later.</p>;
  }
}
