"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllPagesofPlaylist_1 = require("./functions/getAllPagesofPlaylist");
const dotenv_1 = require("dotenv");
// Gets YOUTUBE_API_KEY from .env
(0, dotenv_1.config)();
try {
    (0, getAllPagesofPlaylist_1.getAllPagesofPlaylist)({
        playlistIdOrUrl: 'https://www.youtube.com/playlist?list=PLyfE3pnEkrBMiCPLNDhft9hmeXK1wtkGF',
        youTubeApiKey: process.env.YOUTUBE_API_KEY,
    });
}
catch (error) {
    console.error(error);
}
;
