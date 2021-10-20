import fs from 'fs/promises';
import { google } from 'googleapis';
import { config } from 'dotenv';
config();

const youtube = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API_KEY
});

const writeToFile = async (data) => {
  const date = new Date();
  await fs.writeFile(
    `${date.toISOString()}.json`,
    JSON.stringify(data)
  );
};

const sortAlphabetically = (a, b) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }
  return 0;
};

const getPlaylistPage = async (token = null) => {
  const params = {
    part: 'snippet, contentDetails, id',
    playlistId: 'PLlM1TpoNLEOd2GHpqnTiGHY_0ZQcgmG7i',
    maxResults: 50,
    pageToken: null,
  };

  if (token !== null) {
    params.pageToken = token;
  };

  const response = await youtube.playlistItems.list(params);

  return response;
};

const getAllPagesofPlaylist = async () => {
  const allPagesData = [];

  let response = await getPlaylistPage();
  let token = response?.data?.nextPageToken;
  let items = response?.data?.items;

  if (items) {
    for (let item of items) {
      const video = {
        name: item.snippet.title,
        id: item.contentDetails.videoId,
        link: item.contentDetails.videoId,
      };
      allPagesData.push(video);
    };
  };

  do {
    response = await getPlaylistPage(token);

    items = response?.data?.items;

    if (items) {
      for (let item of items) {
        const video = {
          name: `${item.snippet.title}`,
          id: `${item.contentDetails.videoId}`,
          link: `${item.contentDetails.videoId}`,
        };
        allPagesData.push(video);
      };
    };

    token = response?.data?.nextPageToken;
  } while (token);

  allPagesData.sort(sortAlphabetically);
  writeToFile(allPagesData);
};

try {
  getAllPagesofPlaylist();
} catch (error) {
  console.error(error);
};