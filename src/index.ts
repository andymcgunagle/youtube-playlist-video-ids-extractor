// import { config } from 'dotenv';
import { getAllPlaylistItems } from './functions/getAllPlaylistItems';

// // Gets YOUTUBE_API_KEY from .env
// config();

// try {
//   getAllPlaylistItems({
//     playlistIdOrUrl: 'https://www.youtube.com/playlist?list=PLT2HLAfKI8vPcabybOklq-YhODnabh5Lr',
//     youTubeApiKey: process.env.YOUTUBE_API_KEY,
//   });
// } catch (error) {
//   console.error(error);
// };

export default getAllPlaylistItems;
