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
exports.getAllPlaylistItems = void 0;
const extractPlaylistId_1 = require("./extractPlaylistId");
const getPlaylistPage_1 = require("./getPlaylistPage");
const pushItemsToArray_1 = require("./pushItemsToArray");
const sortAlphabetically_1 = require("./sortAlphabetically");
const writeToFile_1 = require("./writeToFile");
function getAllPlaylistItems({ playlistIdOrUrl, youTubeApiKey, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const playlistId = (0, extractPlaylistId_1.extractPlaylistId)(playlistIdOrUrl);
        let response = yield (0, getPlaylistPage_1.getPlaylistPage)(playlistId, youTubeApiKey, null);
        const allItems = [];
        (0, pushItemsToArray_1.pushItemsToArray)(response.data.items, allItems);
        do {
            response = yield (0, getPlaylistPage_1.getPlaylistPage)(playlistId, youTubeApiKey, response.data.nextPageToken);
            (0, pushItemsToArray_1.pushItemsToArray)(response.data.items, allItems);
        } while (response.data.nextPageToken);
        yield (0, writeToFile_1.writeToFile)(allItems.sort(sortAlphabetically_1.sortAlphabetically));
    });
}
exports.getAllPlaylistItems = getAllPlaylistItems;
;
;
