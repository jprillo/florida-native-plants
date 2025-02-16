import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export type Butterfly = {
  id: string;
  commonName: string;
  color: string;
  latinName: string;
  imageOne: string;
};
import { GetStaticProps, GetStaticPaths } from "next";


type ButterflyPageProps = {
  butterfly: Butterfly;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const butterflies = await getButterflies();

  return {
    paths: butterflies.map((butterfly) => ({
      params: { id: butterfly.id },
    })),
    fallback: false, // Set to `true` or `blocking` if you want to allow new pages dynamically
  };
};

export const getStaticProps: GetStaticProps<ButterflyPageProps> = async ({ params }) => {
  const butterflies = await getButterflies();
  const butterfly = butterflies.find((b) => b.id === params?.id);

  if (!butterfly) {
    return { notFound: true };
  }

  return {
    props: { butterfly },
  };
};

export async function getButterflies(): Promise<Butterfly[]> {
  const butterfliesDir = path.join(process.cwd(), "content/butterflies");
  const filenames = await fs.readdir(butterfliesDir);

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

  return butterflies;
}
