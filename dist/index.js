"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const getAllPagesOfPlaylist_1 = require("./functions/getAllPagesOfPlaylist");
// Gets YOUTUBE_API_KEY from .env
(0, dotenv_1.config)();
try {
    (0, getAllPagesOfPlaylist_1.getAllPagesOfPlaylist)({
        playlistIdOrUrl: 'https://www.youtube.com/playlist?list=PL9dVARCCepE_MbKMQ1ZjGmJ3g-0WNfJzz',
        youTubeApiKey: process.env.YOUTUBE_API_KEY,
    });
}
catch (error) {
    console.error(error);
}
;
