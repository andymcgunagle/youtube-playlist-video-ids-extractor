import fs from 'fs/promises';
import { Video } from "./pushItemsToArray";

export const writeToFile = async (data: Video[]) => {
  await fs.writeFile(
    `${new Date().toISOString()}.js`,
    JSON.stringify(data)
  );
};