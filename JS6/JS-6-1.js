const arr = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

//1. forEach - выведите в консоль все числа, делящиеся без остатка на 3 // 30
arr.forEach((number) => {
  if (number % 3 === 0 && number % 30 === 0) {
    console.log(number);
  }
});

//2. map - создайте новый массив, в котором из каждого элемента изначального массива вычли длину изначального массива // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
const arrLength = arr.length;

const newArr = arr.map((number) => number - arrLength);

console.log(newArr);

//3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего // [8, 30, 85, 95, 94]
const filteredArr = arr.filter((number, index, array) => {
  {
    return number > array[index - 1];
  }
});

console.log(filteredArr);

//4. find - найдите элемент, равный своему индексу //2
const foundElementInArrayByIndex = arr.find((number, index, array) => {
  {
    return number == index;
  }
});

console.log(foundElementInArrayByIndex);

//5. sort - отсортируйте массив по возрастанию, не изменив изначальный // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
const sortedArr = [...arr].sort((a, b) => a - b);
console.log(sortedArr);

//6. reduce - получите сумму всех чисел массива //466

const sum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum);

//7. some - проверьте, есть ли в массиве элементы больше 90 //true

const hasNumberBiggerThan90 = arr.some((number) => number > 90);

console.log(hasNumberBiggerThan90);

//8. every - проверьте, что все элементы массива двухзначные //false
const allTwoDigitNumbers = arr.every((number) => number >= 10 && number <= 99);

console.log(allTwoDigitNumbers);
