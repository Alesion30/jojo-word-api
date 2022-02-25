import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  ThunkObjMap,
  GraphQLArgumentConfig,
} from 'graphql'
import { SearchCondition, getWordList, getRandomWord } from './resolvers'
import { wordType } from './types'

/** 引数型 */
type Arg = SearchCondition

/** 引数 */
const args: { [key in keyof Arg]: GraphQLArgumentConfig } = {
  part: { type: GraphQLString }, // 部数
  name: { type: GraphQLString }, // 名前
  min: { type: GraphQLInt }, // 最小文字数
  max: { type: GraphQLInt }, // 最大文字数
  search: { type: GraphQLString }, // 検索ワード
}

/** Word 名言 クエリ */
export const wordQuery: ThunkObjMap<GraphQLFieldConfig<any, any>> = {
  // 名言リストを返す
  wordList: {
    type: new GraphQLList(wordType),
    args,
    description: 'Get list of words data.',
    resolve: (value, args: Partial<SearchCondition>) => getWordList(args),
  },
  // 名言の中からランダムに返す
  randomWord: {
    type: wordType,
    args,
    description: 'Get random word data.',
    resolve: (value, args: Partial<SearchCondition>) => getRandomWord(args),
  },
}
