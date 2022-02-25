"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maximQuery = void 0;
const graphql_1 = require("graphql");
const resolvers_1 = require("./resolvers");
const types_1 = require("./types");
/** 引数 */
const args = {
    part: { type: graphql_1.GraphQLInt },
    speaker: { type: graphql_1.GraphQLString },
    min: { type: graphql_1.GraphQLInt },
    max: { type: graphql_1.GraphQLInt }, // 最大文字数
};
/** Maxim 名言 クエリ */
exports.maximQuery = {
    // 名言リストを返す
    maximList: {
        type: new graphql_1.GraphQLList(types_1.maximType),
        args,
        description: 'Get list of maxims data.',
        resolve: (value, args) => (0, resolvers_1.getMaximList)(args),
    },
    // 名言の中からランダムに返す
    randomMaxim: {
        type: types_1.maximType,
        args,
        description: 'Get random maxim data.',
        resolve: (value, args) => (0, resolvers_1.getRandomMaxim)(args),
    },
};
