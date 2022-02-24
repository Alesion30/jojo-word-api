import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { GraphQLSchema } from 'graphql'
import { queryType } from './fields'

const schema = new GraphQLSchema({
  query: queryType,
})

const app = express()
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
)
app.listen(4000, () =>
  console.log('Express GraphQL Server Now Running On localhost:4000/graphql')
)
