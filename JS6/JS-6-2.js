//Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: количество гласных букв.
//Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
const words = [
  "umbrella",
  "apple",
  "ocean",
  "independent",
  "education",
  "elephant",
  "island",
  "universe",
  "environment",
  "queue",
];

function sortByVowelCount(words) {
  return words.sort((a, b) => {
    const vowelCountA = countVowels(a);
    const vowelCountB = countVowels(b);
    return vowelCountA - vowelCountB; // Сортировка по возрастанию
  });
}

function countVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const letter of word) {
    if (vowels.includes(letter.toLowerCase())) {
      count++;
    }
  }
  return count;
}

const sortedWords = sortByVowelCount(words);
console.log(sortedWords);
