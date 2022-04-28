// import fs from 'fs/promises';
import { promises as fs } from "fs";
import { Video } from "./pushItemsToArray";

export const writeToFile = async (data: Video[]) => {
  await fs.writeFile(
    `${new Date().toISOString()}.json`,
    JSON.stringify(data)
  );
};