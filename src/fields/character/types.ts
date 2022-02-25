import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLList } from 'graphql'
import { wordType } from '../word/types'

/** Character 名言 型情報 */
export const characterType = new GraphQLObjectType({
  name: 'character',
  description: "Jojo's Character",
  fields: {
    // 名前
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'name',
    },
    // 名前（英語）
    name_en: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'name en',
    },
    // スタンド名
    stand: {
      type: GraphQLString,
      description: 'stand',
    },
    // 登録ワード数
    wordCount: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'wordCount',
    },
    // 登録ワード
    words: {
      type: new GraphQLNonNull(new GraphQLList(wordType)),
      description: 'words',
    },
  },
})
