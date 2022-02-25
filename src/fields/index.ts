import { GraphQLObjectType } from 'graphql'
import { wordField } from './word'

export const queryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root query type.',
  fields: {
    ...wordField.query,
  },
})
