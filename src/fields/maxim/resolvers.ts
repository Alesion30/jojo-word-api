import json from '../../data/maxim.json'
import { getRandom } from '../../functions/getRandom'

/** 名言一覧を返す */
export const getMaximList = () => json

/** 名言をランダムに返す */
export const getRandomMaxim = () => {
  const maxims = getMaximList()
  const randNum = getRandom(0, maxims.length - 1)
  return maxims[randNum]
}
