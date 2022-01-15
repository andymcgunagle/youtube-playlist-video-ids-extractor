"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushItemsToArray = void 0;
;
const pushItemsToArray = (items, allPagesData) => {
    var _a, _b, _c;
    if (items) {
        for (let item of items) {
            const video = {
                name: (_a = item.snippet) === null || _a === void 0 ? void 0 : _a.title,
                id: (_b = item.contentDetails) === null || _b === void 0 ? void 0 : _b.videoId,
                link: `https://www.youtube.com/watch?v=${(_c = item.contentDetails) === null || _c === void 0 ? void 0 : _c.videoId}`,
            };
            allPagesData.push(video);
        }
        ;
    }
    ;
};
exports.pushItemsToArray = pushItemsToArray;
