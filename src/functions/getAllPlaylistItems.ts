import { extractPlaylistId } from "./extractPlaylistId";
import { getPlaylistPage } from "./getPlaylistPage";
import { pushItemsToArray, Video } from "./pushItemsToArray";
import { sortAlphabetically } from "./sortAlphabetically";
import { writeToFile } from "./writeToFile";

export async function getAllPlaylistItems({
  playlistIdOrUrl,
  youTubeApiKey,
}: GetAllPlaylistItemsProps) {
  const playlistId = extractPlaylistId(playlistIdOrUrl);

  let response = await getPlaylistPage(playlistId, youTubeApiKey, null);

  const allItems: Video[] = [];

  pushItemsToArray(response.data.items, allItems);

  do {
    response = await getPlaylistPage(playlistId, youTubeApiKey, response.data.nextPageToken);

    pushItemsToArray(response.data.items, allItems);

  } while (response.data.nextPageToken);

  await writeToFile(allItems.sort(sortAlphabetically));
};

interface GetAllPlaylistItemsProps {
  playlistIdOrUrl: string,
  youTubeApiKey: string,
};
