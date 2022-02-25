import { readdirSync, writeFileSync } from 'fs'

/** メッセージJSON 型 */
type MessageJson = {
  message: string
}[]

/** パラメータJSON 型 */
type ParamsJson = {
  speaker: string
  speaker_en: string
}

/** WordデータJSON 型 */
type WordJson = {
  message: string
  part: string
  speaker: string
  speaker_en: string
}[]

/** ルート ディレクトリ */
const rootDir = './src/data'

// フォルダ一覧を取得
const dirents = readdirSync(rootDir, { withFileTypes: true })
const folders = dirents.filter((v) => v.isDirectory()).map((v) => v.name)

/** 出力データ */
const output: WordJson = []

folders.forEach((folder) => {
  const files = readdirSync(`${rootDir}/${folder}`)
  console.log(files)

  const params: ParamsJson = require(`./${folder}/_params.json`)
  console.log(params)

  files
    .filter((v) => v !== '_params.json')
    .forEach((file) => {
      /** json生データ */
      const json: MessageJson = require(`./${folder}/${file}`)

      /** 第x部 */
      const part = file.replace('.json', '')

      /** 変換後のデータ */
      const words: WordJson = json.map((v) => {
        return { message: v.message, part, ...params }
      })

      // 出力データに追加
      words.forEach((word) => {
        output.push(word)
      })
    })
})

writeFileSync(`${rootDir}/word.json`, JSON.stringify(output))