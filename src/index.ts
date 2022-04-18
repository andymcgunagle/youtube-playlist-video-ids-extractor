import { config } from 'dotenv';
import { getAllPagesOfPlaylist } from './functions/getAllPagesOfPlaylist';

// Gets YOUTUBE_API_KEY from .env
config();

try {
  getAllPagesOfPlaylist({
    playlistIdOrUrl: 'https://www.youtube.com/playlist?list=PL9dVARCCepE_MbKMQ1ZjGmJ3g-0WNfJzz',
    youTubeApiKey: process.env.YOUTUBE_API_KEY,
  });
} catch (error) {
  console.error(error);
};
