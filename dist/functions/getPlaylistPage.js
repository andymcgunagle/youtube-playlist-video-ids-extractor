"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlaylistPage = void 0;
const googleapis_1 = require("googleapis");
function getPlaylistPage(playlistId, youTubeApiKey, nextPageToken) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = {
            part: ['snippet', 'contentDetails', 'id'],
            playlistId,
            maxResults: 50,
            pageToken: undefined,
        };
        if (nextPageToken !== null)
            params.pageToken = nextPageToken;
        const youtube = googleapis_1.google.youtube({
            version: 'v3',
            auth: youTubeApiKey
        });
        const response = yield youtube.playlistItems.list(params);
        return response;
    });
}
exports.getPlaylistPage = getPlaylistPage;
;
