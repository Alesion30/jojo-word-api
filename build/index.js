"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
const fields_1 = require("./fields");
const body_parser_1 = __importDefault(require("body-parser"));
/** Express App */
const app = (0, express_1.default)();
// Middleware
app.use(body_parser_1.default.text({ type: 'application/graphql' }));
app.use(body_parser_1.default.json());
// REST API's Endpoints
app.get('/', (req, res) => {
    return res.send('ジョジョの奇妙な冒険 名言API');
});
// GraphQL's Endpoints
const schema = new graphql_1.GraphQLSchema({
    query: fields_1.queryType,
});
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema,
    graphiql: true,
}));
// Run Server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Express GraphQL Server Now Running On localhost:${port}/graphql`));
