import { getAllPagesofPlaylist } from "./functions/getAllPagesofPlaylist.js";

import { config } from 'dotenv';

// Gets YOUTUBE_API_KEY from .env
config();

try {
  getAllPagesofPlaylist('PL4QNnZJr8sRPmuz_d87ygGR6YAYEF-fmw');
} catch (error) {
  console.error(error);
};