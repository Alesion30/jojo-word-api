import json from '../../data/character.json'
import { getRandom } from '../../functions/getRandom'
import { partialMatch } from '../../functions/match'

/** 検索条件 */
export type SearchCondition = {
  name: string
}

/** 名言を全て返す */
const getAllCharacterList = () => json

/** 名言一覧を返す */
export const getCharacterList = (args: Partial<SearchCondition>) => {
  let characters = getAllCharacterList()
  // 名前検索
  if (args.name) {
    characters = characters.filter(
      (v) =>
        partialMatch(v.name, args.name!) || partialMatch(v.name_en, args.name!)
    )
  }
  return characters
}

/** 名言をランダムに返す */
export const getRandomCharacter = (args: Partial<SearchCondition>) => {
  const characters = getCharacterList(args)
  const randNum = getRandom(0, characters.length - 1)
  return characters[randNum]
}
