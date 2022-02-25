/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { readdirSync, writeFileSync } from 'fs'

/** メッセージJSON 型 */
type MessageJson = {
  message: string
}[]

/** パラメータJSON 型 */
type ParamsJson = {
  speaker: string
  speaker_en: string
  stand: string | null
}

/** Wordデータ 型 */
type Word = {
  message: string
  part: string
  speaker: string
  speaker_en: string
  stand: string | null
}

/** WordデータJSON 型 */
type WordJson = Word[]

/** Characterデータ 型 */
type Character = {
  name: string // 名前
  name_en: string // 名前（英語）
  stand: string | null // スタンド名
  wordCount: number // 登録ワード数
  words: WordJson // 登録ワード
}

/** CharacterデータJSON 型 */
type CharacterJson = Character[]

/** ルート ディレクトリ */
const rootDir = './src/data'

// フォルダ一覧を取得
const dirents = readdirSync(rootDir, { withFileTypes: true })
const folders = dirents
  .filter((v) => v.isDirectory())
  .map((v) => v.name)
  .filter((v) => v.indexOf('_') !== 0)

/** 出力データ */
const wordOutputJson: WordJson = []
const characterOutputJson: CharacterJson = []

folders.forEach((folder) => {
  const files = readdirSync(`${rootDir}/${folder}`)
  const params: ParamsJson = require(`./${folder}/_params.json`)
  files
    .filter((v) => v.indexOf('_') !== 0)
    .forEach((file) => {
      /** json生データ */
      const json: MessageJson = require(`./${folder}/${file}`)

      /** 第x部 */
      const part = file.replace('.json', '')

      /** 変換後のデータ */
      const words: WordJson = json.map((v) => ({
        message: v.message,
        part,
        ...params,
      }))

      /** キャラクターデータ */
      const character: Character = {
        name: params.speaker,
        name_en: params.speaker_en,
        stand: params.stand,
        wordCount: words.length,
        words,
      }

      // 出力データに追加
      words.forEach((word) => {
        wordOutputJson.push(word)
      })
      characterOutputJson.push(character)
    })
})

writeFileSync(`${rootDir}/word.json`, JSON.stringify(wordOutputJson))
writeFileSync(`${rootDir}/character.json`, JSON.stringify(characterOutputJson))
