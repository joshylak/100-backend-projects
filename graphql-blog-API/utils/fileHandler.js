import { promises as fs } from "fs";
const filePath = new URL("../data/posts.json", import.meta.url);

export const readPosts = async () => {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
};

export const writePosts = async (posts) => {
  await fs.writeFile(filePath, JSON.stringify(posts, null, 2));
};
