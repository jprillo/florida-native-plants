import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import ButterflyTemplate from "../../../components/ButterflyTemplate";
import RootLayout from "../../../app/layout";

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

// Generate paths for each butterfly MDX file
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("content/butterflies"));
  return files.map((filename) => ({
    id: filename.replace(".mdx", ""),
  }));
}

// Butterfly dynamic page component
export default async function ButterflyPage({
  params,
}: {
  params: { id: string };
}) {
  // Resolve the file path
  const filePath = path.join("content/butterflies", `${params.id}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Parse the MDX file (frontmatter + content)
  const { data, content } = matter(fileContents);

  // Serialize the MDX content
  const mdxSource: MDXRemoteSerializeResult = await serialize(content);

  // Cast frontmatter to the correct type
  const frontmatter = data as ButterflyFrontmatter;

  // Render the page
  return (
    <RootLayout>
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
    </RootLayout>
  );
}
