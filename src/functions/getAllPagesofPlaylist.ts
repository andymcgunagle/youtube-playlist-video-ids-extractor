import { extractPlaylistId } from "./extractPlaylistId";
import { getPlaylistPage } from "./getPlaylistPage";
import { pushItemsToArray, Video } from "./pushItemsToArray";
import { sortAlphabetically } from "./sortAlphabetically";
import { writeToFile } from "./writeToFile";

export const getAllPagesOfPlaylist = async (
  { playlistIdOrUrl, youTubeApiKey }: GetAllPagesOfPlaylistProps
) => {
  const playlistId = extractPlaylistId(playlistIdOrUrl);

  let response = await getPlaylistPage(playlistId, youTubeApiKey, null);

  const allPagesData: Video[] = [];

  pushItemsToArray(response.data.items, allPagesData);

  do {
    response = await getPlaylistPage(playlistId, youTubeApiKey, response.data.nextPageToken);

    pushItemsToArray(response.data.items, allPagesData);

  } while (response.data.nextPageToken);

  allPagesData.sort(sortAlphabetically);
  await writeToFile(allPagesData);
};

interface GetAllPagesOfPlaylistProps {
  playlistIdOrUrl: string,
  youTubeApiKey: string,
};
