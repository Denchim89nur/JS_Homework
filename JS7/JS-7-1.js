//Имеется объект const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true }
//1. Создать массив из ключей объекта character и вывести в консоль те, где 4 буквы //name, isQa
//2. Создать массив из значений объекта character и вывести в консоль те, где тип данных строка //'Barney', 'male'
//3. Создать массив из ключей и значений объекта character, перебрать массив циклом for.
//На каждой итерации вывести пары ключ-значнение в виде key = ${key}, value = ${value}
//4. Проверить, есть ли в объекте ключ salary, результат вывести в консоль
//(Реализовать 2мя способами: через оператор in и Object.hasOwn())

function newTask() {
  console.log("========================New Task===========================");
}

const character = { name: "Barney", age: 36, gender: "male", isQa: true };

//1
const keys = Object.keys(character);
const fourLetterKeys = keys.filter((key) => key.length === 4);

console.log(fourLetterKeys);
newTask();

//2
const values = Object.values(character);
const stringValues = values.filter((value) => typeof value === "string");

console.log(stringValues);
newTask();

//3
const keyValuePairs = Object.entries(character);

for (let i = 0; i < keyValuePairs.length; i++) {
  const [key, value] = keyValuePairs[i];
  console.log(`key = ${key}, value = ${value}`);
}
newTask();

//4
console.log("Ключ 'salary' присутствует в объекте? ", "salary" in character);
console.log(
  "Объект имеет собственное свойство 'salary'? ",
  character.hasOwnProperty("salary")
);
