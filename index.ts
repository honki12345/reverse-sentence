export function reverse(sentence: string) {
  const wordsArray = sentence.split(' ');
  const reversedArray = wordsArray.reverse();
  return reversedArray.join(' ');
}