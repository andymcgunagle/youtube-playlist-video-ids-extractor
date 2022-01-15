import { getAllPagesofPlaylist } from "./functions/getAllPagesofPlaylist";

import { config } from 'dotenv';

// Gets YOUTUBE_API_KEY from .env
config();

try {
  getAllPagesofPlaylist({
    playlistIdOrUrl: 'https://www.youtube.com/playlist?list=PLyfE3pnEkrBMiCPLNDhft9hmeXK1wtkGF',
    youTubeApiKey: process.env.YOUTUBE_API_KEY,
  });
} catch (error) {
  console.error(error);
};