import { getPlaylistPage } from "./getPlaylistPage";
import { writeToFile } from "./writeToFile";
import { sortAlphabetically } from "./sortAlphabetically";
import { pushItemsToArray, Video } from "./pushItemsToArray";

interface GetAllPagesofPlaylistProps {
  playlistIdOrUrl: string,
  youTubeApiKey: string,
};

export const getAllPagesofPlaylist = async ({ playlistIdOrUrl, youTubeApiKey }: GetAllPagesofPlaylistProps) => {
  const allPagesData: Video[] = [];
  let playlistId

  playlistIdOrUrl.includes("list=") ?
    playlistId = playlistIdOrUrl.split("list=")[1]
    : playlistId = playlistIdOrUrl;

  let response = await getPlaylistPage(playlistId, youTubeApiKey, null);

  pushItemsToArray(response.data.items, allPagesData);

  do {
    response = await getPlaylistPage(playlistId, youTubeApiKey, response.data.nextPageToken);

    pushItemsToArray(response.data.items, allPagesData);

  } while (response.data.nextPageToken);

  allPagesData.sort(sortAlphabetically);
  await writeToFile(allPagesData);
};