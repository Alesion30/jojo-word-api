import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'

/** Word 名言 型情報 */
export const wordType = new GraphQLObjectType({
  name: 'word',
  description: "Jojo's Word",
  fields: {
    // 話し手
    speaker: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'speaker',
    },
    // 話し手（英語）
    speaker_en: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'speaker en',
    },
    // 第何部
    part: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'part',
    },
    // メッセージ（原文）
    message: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'message',
    },
  },
})
