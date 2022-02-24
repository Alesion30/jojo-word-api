"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandom = void 0;
/** 乱数を返す */
const getRandom = (min, max) => {
    const random = Math.floor(Math.random() * (max + 1 - min)) + min;
    return random;
};
exports.getRandom = getRandom;
