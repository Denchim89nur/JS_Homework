//У вас есть массив чисел.
//Напиши функцию countOccurrences, которая принимает массив чисел и возвращает объект с подсчётом каждого числа.
// Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }

const numbers = [1, 2, 2, 3, 4, 4, 4, 5];

function countOccurrences(arr) {
  const occurrences = {};
  for (const number of arr) {
    if (occurrences[number]) {
      occurrences[number]++;
    } else {
      occurrences[number] = 1;
    }
  }
  return occurrences;
}

console.log(countOccurrences(numbers));
