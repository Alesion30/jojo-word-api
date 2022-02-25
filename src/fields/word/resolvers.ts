import json from '../../data/word.json'
import { getRandom } from '../../functions/getRandom'
import { partialMatch } from '../../functions/match'

/** 検索条件 */
export type SearchCondition = {
  part: string
  name: string
  min: number
  max: number
  search: string
}

/** 名言を全て返す */
const getAllWordList = () => json

/** 名言一覧を返す */
export const getWordList = (args: Partial<SearchCondition>) => {
  let words = getAllWordList()
  // 部検索
  if (args.part) {
    words = words.filter((v) => v.part === args.part)
  }
  // 名前検索
  if (args.name) {
    words = words.filter(
      (v) =>
        partialMatch(v.speaker, args.name!) ||
        partialMatch(v.speaker_en, args.name!)
    )
  }
  // 文字数検索
  if (args.min) {
    words = words.filter((v) => v.message.length >= args.min!)
  }
  if (args.max) {
    words = words.filter((v) => v.message.length <= args.max!)
  }
  // 検索（名前・名言検索）
  if (args.search) {
    words = words.filter(
      (v) =>
        partialMatch(v.speaker, args.search!) ||
        partialMatch(v.speaker_en, args.search!) ||
        partialMatch(v.message, args.search!)
    )
  }
  return words
}

/** 名言をランダムに返す */
export const getRandomWord = (args: Partial<SearchCondition>) => {
  const words = getWordList(args)
  const randNum = getRandom(0, words.length - 1)
  return words[randNum]
}
