"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractPlaylistId = void 0;
function extractPlaylistId(playlistIdOrUrl) {
    let playlistId;
    if (playlistIdOrUrl.includes("list=")) {
        playlistId = playlistIdOrUrl.split("list=")[1];
    }
    ;
    if (playlistId && playlistId.includes("&")) {
        playlistId = playlistId.split("list=")[0];
    }
    ;
    return playlistId ? playlistId : playlistIdOrUrl;
}
exports.extractPlaylistId = extractPlaylistId;
;
