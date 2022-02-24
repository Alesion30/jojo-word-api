import { GraphQLObjectType } from 'graphql'
import { maximField } from './maxim'

export const queryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root query type.',
  fields: {
    ...maximField.query,
  },
})
