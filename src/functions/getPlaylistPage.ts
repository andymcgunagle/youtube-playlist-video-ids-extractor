import { google, youtube_v3 } from 'googleapis';

export const getPlaylistPage = async (
  playlistId: string,
  youTubeApiKey: string,
  nextPageToken: string | undefined | null
) => {
  const params: youtube_v3.Params$Resource$Playlistitems$List = {
    part: ['snippet', 'contentDetails', 'id'],
    playlistId,
    maxResults: 50,
    pageToken: undefined,
  };

  if (nextPageToken !== null) params.pageToken = nextPageToken;

  const youtube = google.youtube({
    version: 'v3',
    auth: youTubeApiKey
  });

  const response = await youtube.playlistItems.list(params);

  return response;
};