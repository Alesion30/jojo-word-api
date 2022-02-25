/** 部分一致 */
export const partialMatch = (text: string, pattern: string) =>
  text.toUpperCase().indexOf(pattern.toUpperCase()) !== -1
