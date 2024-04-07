export function convertWordsToNumbers(words: string[]): number[] {
  const numbers: number[] = []
  for (const word of words) {
    const num = parseInt(word)
    if (!isNaN(num)) {
      numbers.push(num)
    }
  }
  return numbers
}
