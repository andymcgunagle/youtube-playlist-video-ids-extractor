import { getPlaylistPage } from "./getPlaylistPage.js";
import { writeToFile } from "./writeToFile.js";
import { sortAlphabetically } from "./sortAlphabetically.js";
import { pushItemsToArray } from "./pushItemsToArray.js";

export const getAllPagesofPlaylist = async (playlistId) => {
  const allPagesData = [];

  let response = await getPlaylistPage(playlistId);

  pushItemsToArray(response?.data?.items, allPagesData);

  do {
    response = await getPlaylistPage(playlistId, response?.data?.nextPageToken);

    pushItemsToArray(response?.data?.items, allPagesData);

  } while (response?.data?.nextPageToken);

  allPagesData.sort(sortAlphabetically);
  await writeToFile(allPagesData);
};