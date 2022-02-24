"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maximQuery = void 0;
const graphql_1 = require("graphql");
const resolvers_1 = require("./resolvers");
const types_1 = require("./types");
/** Maxim 名言 クエリ */
exports.maximQuery = {
    maximList: {
        type: new graphql_1.GraphQLList(types_1.maximType),
        description: 'Get list of maxims data.',
        resolve: resolvers_1.getMaximList,
    },
    randomMaxim: {
        type: types_1.maximType,
        description: 'Get random maxim data.',
        resolve: resolvers_1.getRandomMaxim,
    },
};
