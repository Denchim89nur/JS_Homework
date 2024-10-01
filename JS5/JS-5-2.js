function newTask() {
  console.log("========================New Task===========================");
}

function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

// Пример использования:
const word1 = "racecar";
const word2 = "hello";

console.log(isPalindrome(word1)); // Вывод: true
console.log(isPalindrome(word2)); // Вывод: false

newTask();

function findLongestWords(sentence) {
  const words = sentence.split(" ");
  let longestLength = 0;
  let longestWords = [];

  for (const word of words) {
    if (word.length > longestLength) {
      longestLength = word.length;
      longestWords = [word]; // Обновляем список самых длинных слов
    } else if (word.length === longestLength) {
      longestWords.push(word); // Добавляем в список, если длина совпадает
    }
  }

  return longestWords;
}

// Пример использования:
const sentence1 = "I am su";
const sentence2 = "I am super engineer";

console.log(findLongestWords(sentence1));
console.log(findLongestWords(sentence2));
