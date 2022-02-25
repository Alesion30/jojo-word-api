import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  ThunkObjMap,
  GraphQLArgumentConfig,
} from 'graphql'
import { SearchCondition, getMaximList, getRandomMaxim } from './resolvers'
import { maximType } from './types'

/** 引数型 */
type Arg = SearchCondition

/** 引数 */
const args: { [key in keyof Arg]: GraphQLArgumentConfig } = {
  part: { type: GraphQLInt }, // 部数
  speaker: { type: GraphQLString }, // 話し手
  min: { type: GraphQLInt }, // 最小文字数
  max: { type: GraphQLInt }, // 最大文字数
}

/** Maxim 名言 クエリ */
export const maximQuery: ThunkObjMap<GraphQLFieldConfig<any, any>> = {
  // 名言リストを返す
  maximList: {
    type: new GraphQLList(maximType),
    args,
    description: 'Get list of maxims data.',
    resolve: (value, args: Partial<SearchCondition>) => getMaximList(args),
  },
  // 名言の中からランダムに返す
  randomMaxim: {
    type: maximType,
    args,
    description: 'Get random maxim data.',
    resolve: (value, args: Partial<SearchCondition>) => getRandomMaxim(args),
  },
}
