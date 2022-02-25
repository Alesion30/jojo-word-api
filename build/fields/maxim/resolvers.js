"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomMaxim = exports.getMaximList = void 0;
const maxim_json_1 = __importDefault(require("../../data/maxim.json"));
const getRandom_1 = require("../../functions/getRandom");
/** 名言を全て返す */
const getAllMaximList = () => maxim_json_1.default;
/** 名言一覧を返す */
const getMaximList = (args) => {
    let maxims = getAllMaximList();
    // 部検索
    if (args.part) {
        maxims = maxims.filter((v) => v.part == args.part);
    }
    // 名前検索
    if (args.speaker) {
        maxims = maxims.filter((v) => ~v.speaker.indexOf(args.speaker));
    }
    // 文字数検索
    if (args.min) {
        maxims = maxims.filter((v) => v.message.length >= args.min);
    }
    if (args.max) {
        maxims = maxims.filter((v) => v.message.length <= args.max);
    }
    return maxims;
};
exports.getMaximList = getMaximList;
/** 名言をランダムに返す */
const getRandomMaxim = (args) => {
    const maxims = (0, exports.getMaximList)(args);
    const randNum = (0, getRandom_1.getRandom)(0, maxims.length - 1);
    return maxims[randNum];
};
exports.getRandomMaxim = getRandomMaxim;
