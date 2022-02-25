import json from '../../data/maxim.json'
import { getRandom } from '../../functions/getRandom'

/** 検索条件 */
export type SearchCondition = {
  part: number
  speaker: string
  min: number
  max: number
}

/** 名言を全て返す */
const getAllMaximList = () => json

/** 名言一覧を返す */
export const getMaximList = (args: Partial<SearchCondition>) => {
  let maxims = getAllMaximList()
  // 部検索
  if (args.part) {
    maxims = maxims.filter((v) => v.part == args.part)
  }
  // 名前検索
  if (args.speaker) {
    maxims = maxims.filter((v) => ~v.speaker.indexOf(args.speaker!))
  }
  // 文字数検索
  if (args.min) {
    maxims = maxims.filter((v) => v.message.length >= args.min!)
  }
  if (args.max) {
    maxims = maxims.filter((v) => v.message.length <= args.max!)
  }
  return maxims
}

/** 名言をランダムに返す */
export const getRandomMaxim = (args: Partial<SearchCondition>) => {
  const maxims = getMaximList(args)
  const randNum = getRandom(0, maxims.length - 1)
  return maxims[randNum]
}
