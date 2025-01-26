import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import PlantTemplate from "../../../components/PlantTemplate";

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

type PlantPageProps = {
  params: {
    id: string;
  };
};

// Generate static paths for all MDX files in `content/plants`
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "content/plants");
  const files = fs.readdirSync(filePath);

  // Filter `.mdx` files and generate paths
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));
  console.log("Found MDX Files:", mdxFiles);

  return mdxFiles.map((filename) => ({
    id: filename.replace(".mdx", ""), // Remove the `.mdx` extension
  }));
}

// Render the plant page dynamically based on the `id` parameter
export default async function PlantPage({ params }: PlantPageProps) {
  try {
    const filePath = await path.join("content/plants", `${ params.id}.mdx`);

    // Check if the `.mdx` file exists
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      return { notFound: true }; // Return a 404 page if the file is missing
    }

    // Read the content of the file
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Parse frontmatter and content using `gray-matter`
    const { data, content } = matter(fileContents);

    // Serialize the MDX content

// Pass the frontmatter as `scope` to serialize
const mdxSource: MDXRemoteSerializeResult = await serialize(content, { scope: data });
    // Pass the frontmatter and serialized content to the `PlantTemplate` component

    return (
      <PlantTemplate frontmatter={data as PlantFrontmatter} mdxSource={mdxSource} />
    );
  } catch (error) {
    console.error("Error rendering plant page:", error);
    return { notFound: true }; // Gracefully handle unexpected errors
  }
}
