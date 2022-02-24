import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { GraphQLSchema } from 'graphql'
import { queryType } from './fields'

const schema = new GraphQLSchema({
  query: queryType,
})

const app = express()
app.get('/', (req, res) => {
  return res.send('ジョジョの奇妙な冒険 名言API')
})
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
)

const port = process.env.PORT || 4000
app.listen(port, () =>
  console.log(`Express GraphQL Server Now Running On localhost:${port}/graphql`)
)
