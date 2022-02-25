import json from '../../data/word.json'
import { getRandom } from '../../functions/getRandom'

/** 検索条件 */
export type SearchCondition = {
  part: string
  name: string
  min: number
  max: number
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
        v.speaker.indexOf(args.name!) !== -1 ||
        v.speaker_en.indexOf(args.name!) !== -1
    )
  }
  // 文字数検索
  if (args.min) {
    words = words.filter((v) => v.message.length >= args.min!)
  }
  if (args.max) {
    words = words.filter((v) => v.message.length <= args.max!)
  }
  return words
}

/** 名言をランダムに返す */
export const getRandomWord = (args: Partial<SearchCondition>) => {
  const words = getWordList(args)
  const randNum = getRandom(0, words.length - 1)
  return words[randNum]
}
