"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { config } from 'dotenv';
const getAllPlaylistItems_1 = require("./functions/getAllPlaylistItems");
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
exports.default = getAllPlaylistItems_1.getAllPlaylistItems;
