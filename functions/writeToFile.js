import fs from 'fs/promises';

export const writeToFile = async (data) => {
  await fs.writeFile(
    `${new Date().toISOString()}.json`,
    JSON.stringify(data)
  );
};