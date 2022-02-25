import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { GraphQLSchema } from 'graphql'
import bodyParser from 'body-parser'
import { queryType } from './fields'

/** Express App */
const app = express()

// Middleware
app.use(bodyParser.text({ type: 'application/graphql' }))
app.use(bodyParser.json())

// REST API's Endpoints
app.get('/', (req, res) => res.send('ジョジョの奇妙な冒険 名言API'))

// GraphQL's Endpoints
const schema = new GraphQLSchema({
  query: queryType,
})
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

// Run Server
const port = process.env.PORT || 4000
app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`Express GraphQL Server Now Running On localhost:${port}/graphql`)
)
