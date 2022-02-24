"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomMaxim = exports.getMaximList = void 0;
const maxim_json_1 = __importDefault(require("../../data/maxim.json"));
const getRandom_1 = require("../../functions/getRandom");
/** 名言一覧を返す */
const getMaximList = () => maxim_json_1.default;
exports.getMaximList = getMaximList;
/** 名言をランダムに返す */
const getRandomMaxim = () => {
    const maxims = (0, exports.getMaximList)();
    const randNum = (0, getRandom_1.getRandom)(0, maxims.length - 1);
    return maxims[randNum];
};
exports.getRandomMaxim = getRandomMaxim;
