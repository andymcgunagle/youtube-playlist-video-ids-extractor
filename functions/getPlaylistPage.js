import { google } from 'googleapis';

export const getPlaylistPage = async (playlistId, token = null) => {
  const params = {
    part: 'snippet, contentDetails, id',
    playlistId,
    maxResults: 50,
    pageToken: null,
  };

  if (token !== null) params.pageToken = token;

  const youtube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY
  });

  const response = await youtube.playlistItems.list(params);

  return response;
};