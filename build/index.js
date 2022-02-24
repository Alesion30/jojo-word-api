"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
const fields_1 = require("./fields");
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    return res.send('ジョジョの奇妙な冒険 名言API');
});
const schema = new graphql_1.GraphQLSchema({
    query: fields_1.queryType,
});
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema,
    graphiql: true,
}));
const log = (req, res, next) => {
    const json = {
        date: new Date(),
        method: req.method,
        path: req.path,
        ip: req.ip,
        proxyIP: req.ips,
        userAgent: req.headers['user-agent'],
    };
    console.log(json);
    next();
};
app.use(log);
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Express GraphQL Server Now Running On localhost:${port}/graphql`));
