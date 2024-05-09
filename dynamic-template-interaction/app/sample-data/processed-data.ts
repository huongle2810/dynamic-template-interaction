import { promises as fs } from "fs";

export interface RelatedCombinationItem {
  id: number;
  name: string;
  slug: string;
  colors: string[];
  likes: number;
  liked: boolean;
}

export interface Color {
  slug: string;
  hex: string;
  name: string;
}

export interface CombinationItem {
  liked: boolean;
  id: number;
  slug: string;
  color: Color;
  featuredImage: {
    alt: string;
    url: string;
  };
  name: string;
  likes: number;
  colors: Color[];
}

export interface Combination {
  combination: CombinationItem;
  relatedCombinations: RelatedCombinationItem[];
}

export async function getLocalData() {
  const file = await fs.readFile(
    process.cwd() + "/app/sample-data/combinations.json",
    "utf8"
  );
  const data: { combinations: Combination[] } = JSON.parse(file);
  return data.combinations;
}
