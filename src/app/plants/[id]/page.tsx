import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import PlantTemplate from "../../../components/PlantTemplate";
import { notFound } from "next/navigation";

type PlantFrontmatter = {
  commonName: string;
  otherNames: string;
  scientificName: string;
  family: string;
  size: string;
  hostTo: string;
  zones: string;
  toxic: string;
  lifespan: string;
  description: string;
  waterNeeds: string;
  sunNeeds: string;
  fertilizerNeeds: string;
  soilNeeds: string;
  propagation: string;
  bestPlace: string;
  pestsAndPrevention: string;
  similarFloridaNativePlants: string;
  companionFloridaNativePlants: string;
  color: string;
  interestingFacts: string;
  reasonsToAvoid: string;
  imageOne: string;
  imageTwo: string;
  imageThree: string;
};

// Update the type to always have a thenable `params`
type PlantPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const plantsDir = path.join(process.cwd(), "content/plants");
  const files = await fs.readdir(plantsDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      id: file.replace(".mdx", ""),
    }));
}

export default async function PlantPage({ params }: PlantPageProps) {
  try {
    // Await params to satisfy Next 15's internal type constraints.
    const { id } = await params;

    // Build the file path dynamically.
    const filePath = path.join(process.cwd(), "content/plants", `${id}.mdx`);

    // Check if the file exists. If not, trigger a 404.
    try {
      await fs.access(filePath);
    } catch (error) {
      console.error(`File not found: ${filePath}`, error);
      notFound();
    }

    // Read the file contents asynchronously.
    const fileContents = await fs.readFile(filePath, "utf8");

    // Parse the MDX file (frontmatter + content).
    const { data, content } = matter(fileContents);

    // Serialize the MDX content, passing frontmatter as scope if needed.
    const mdxSource = await serialize(content, { scope: data });

    // Cast frontmatter to the correct type.
    const frontmatter = data as PlantFrontmatter;

    // Render the PlantTemplate component with the parsed data.
    return <PlantTemplate frontmatter={frontmatter} mdxSource={mdxSource} />;
  } catch (error) {
    console.error("Error rendering plant page:", error);
    notFound();
  }
}
