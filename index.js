import { getAllPagesofPlaylist } from "./functions/getAllPagesofPlaylist.js";

import { config } from 'dotenv';

// Gets YOUTUBE_API_KEY from .env
config();

// 

try {
  getAllPagesofPlaylist({
    playlistIdOrUrl: 'PL4QNnZJr8sRPmuz_d87ygGR6YAYEF-fmw',
    youTubeApiKey: process.env.YOUTUBE_API_KEY,
  });
} catch (error) {
  console.error(error);
};