"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryType = void 0;
const graphql_1 = require("graphql");
const maxim_1 = require("./maxim");
exports.queryType = new graphql_1.GraphQLObjectType({
    name: 'Query',
    description: 'The root query type.',
    fields: Object.assign({}, maxim_1.maximField.query),
});
