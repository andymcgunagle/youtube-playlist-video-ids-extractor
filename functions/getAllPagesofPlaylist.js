import { getPlaylistPage } from "./getPlaylistPage.js";
import { writeToFile } from "./writeToFile.js";
import { sortAlphabetically } from "./sortAlphabetically.js";
import { pushItemsToArray } from "./pushItemsToArray.js";

export const getAllPagesofPlaylist = async ({ playlistIdOrUrl, youTubeApiKey }) => {
  const allPagesData = [];

  if (playlistIdOrUrl.includes("list=")) playlistIdOrUrl = playlistIdOrUrl.split("list=")[1];

  let response = await getPlaylistPage(playlistIdOrUrl, youTubeApiKey);

  pushItemsToArray(response?.data?.items, allPagesData);

  do {
    response = await getPlaylistPage(playlistIdOrUrl, youTubeApiKey, response?.data?.nextPageToken);

    pushItemsToArray(response?.data?.items, allPagesData);

  } while (response?.data?.nextPageToken);

  allPagesData.sort(sortAlphabetically);
  await writeToFile(allPagesData);
};