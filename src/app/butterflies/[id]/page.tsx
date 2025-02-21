import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import ButterflyTemplate from "../../../components/ButterflyTemplate";

type ButterflyFrontmatter = {
  commonName: string;
  latinName: string;
  color: string;
  family: string;
  description: string;
  size: string;
  host: string;
  distribution: string;
  whereToFind: string;
  migration: string;
  flightSpeed: string;
  conservationStatus: string;
  culturalSignificance: string;
  predatorsAndThreats: string;
  interestingFactsOne: string;
  interestingFactsTwo: string;
  otherNames: string;
  imageOne: string;
};

// Generate static paths for all MDX files in `content/butterflies`
export async function generateStaticParams() {
  const files = await fs.readdir(path.join(process.cwd(), "content/butterflies"));
  return files.map((filename) => ({
    id: filename.replace(".mdx", ""),
  }));
}

export default async function ButterflyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    // Access the parameter dynamically
    const { id } = await params;

    // Resolve the file path dynamically
    const filePath = path.join(process.cwd(), "content/butterflies", `${id}.mdx`);
    const fileContents = await fs.readFile(filePath, "utf8");

    // Parse the MDX file (frontmatter + content)
    const { data, content } = matter(fileContents);

    // Serialize the MDX content
    const mdxSource = await serialize(content);

    // Cast frontmatter to the correct type
    const frontmatter = data as ButterflyFrontmatter;

    // Render the page
    return (
      <main>
        <ButterflyTemplate
          commonName={frontmatter.commonName}
          latinName={frontmatter.latinName}
          color={frontmatter.color}
          family={frontmatter.family}
          description={frontmatter.description}
          size={frontmatter.size}
          host={frontmatter.host}
          distribution={frontmatter.distribution}
          whereToFind={frontmatter.whereToFind}
          migration={frontmatter.migration}
          flightSpeed={frontmatter.flightSpeed}
          conservationStatus={frontmatter.conservationStatus}
          culturalSignificance={frontmatter.culturalSignificance}
          predatorsAndThreats={frontmatter.predatorsAndThreats}
          interestingFactsOne={frontmatter.interestingFactsOne}
          interestingFactsTwo={frontmatter.interestingFactsTwo}
          otherNames={frontmatter.otherNames}
          imageOne={frontmatter.imageOne}
          content={mdxSource} // Pass serialized MDX content
        />
      </main>
    );
  } catch (error) {
    console.error("Error loading butterfly data:", error);
    return <p>Butterfly not found.</p>;
  }
}
