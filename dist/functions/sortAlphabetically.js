"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortAlphabetically = void 0;
var sortAlphabetically = function (a, b) {
    if (a.name && b.name) {
        if (a.name.toLowerCase() < b.name.toLowerCase())
            return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase())
            return 1;
        return 0;
    }
    else {
        return 0;
    }
};
exports.sortAlphabetically = sortAlphabetically;
//# sourceMappingURL=sortAlphabetically.js.map