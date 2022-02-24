import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { GraphQLSchema } from 'graphql'
import { queryType } from './fields'

const app = express()
app.get('/', (req, res) => {
  return res.send('ジョジョの奇妙な冒険 名言API')
})

const schema = new GraphQLSchema({
  query: queryType,
})
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
)

const log = (req: any, res: any, next: any) => {
  const json = {
    date: new Date(),
    method: req.method,
    path: req.path,
    ip: req.ip,
    proxyIP: req.ips,
    userAgent: req.headers['user-agent'],
  }
  console.log(json)
  next()
}
app.use(log)

const port = process.env.PORT || 4000
app.listen(port, () =>
  console.log(`Express GraphQL Server Now Running On localhost:${port}/graphql`)
)
