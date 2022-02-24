import { GraphQLList } from 'graphql'
import { getMaximList, getRandomMaxim } from './resolvers'
import { maximType } from './types'

/** Maxim 名言 クエリ */
export const maximQuery = {
  maximList: {
    type: new GraphQLList(maximType),
    description: 'Get list of maxims data.',
    resolve: getMaximList,
  },
  randomMaxim: {
    type: maximType,
    description: 'Get random maxim data.',
    resolve: getRandomMaxim,
  },
}
