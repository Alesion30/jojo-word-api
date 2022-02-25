import {
  GraphQLFieldConfig,
  GraphQLList,
  GraphQLString,
  ThunkObjMap,
  GraphQLArgumentConfig,
} from 'graphql'
import { SearchCondition, getCharacterList, getRandomCharacter } from './resolvers'
import { characterType } from './types'

/** 引数型 */
type Arg = SearchCondition

/** 引数 */
const args: { [key in keyof Arg]: GraphQLArgumentConfig } = {
  name: { type: GraphQLString }, // 名前
}

/** Character キャラクター クエリ */
export const characterQuery: ThunkObjMap<GraphQLFieldConfig<any, any>> = {
  // キャラリストを返す
  characterList: {
    type: new GraphQLList(characterType),
    args,
    description: 'Get list of characters data.',
    resolve: (value, args: Partial<SearchCondition>) => getCharacterList(args),
  },
  // キャラの中からランダムに返す
  randomCharacter: {
    type: characterType,
    args,
    description: 'Get random character data.',
    resolve: (value, args: Partial<SearchCondition>) => getRandomCharacter(args),
  },
}
