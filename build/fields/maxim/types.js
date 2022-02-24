"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maximType = void 0;
const graphql_1 = require("graphql");
/** Maxim 名言 型情報 */
exports.maximType = new graphql_1.GraphQLObjectType({
    name: 'maxim',
    description: "Jojo's Maxim",
    fields: {
        // 話し手
        speaker: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: 'speaker',
        },
        // 第何部
        part: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
            description: 'part',
        },
        // メッセージ（原文）
        message: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: 'message',
        },
    },
});
