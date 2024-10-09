//1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters.
//Объект должен иметь поля name (string) и age (number)
//2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
//3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
//4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
//5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)

function newTask() {
  console.log("========================New Task===========================");
}

const characters = [
  { name: "Barney", age: 36 },
  { name: "Fred", age: 40 },
  { name: "Jack", age: 50 },
];

//1
function addCharacter(character) {
  characters.push(character);
}

const newCharacter = { name: "Wilma", age: 45 };
addCharacter(newCharacter);
console.log(characters);
newTask();

//2
function getCharacter(name) {
  const foundCharacter = characters.find(
    (character) => character.name === name
  );
  if (foundCharacter) {
    return foundCharacter;
  }
}

const fred = getCharacter("Barney");
console.log(fred);
newTask();

//3
function getCharactersByAge(minAge) {
  const filteredCharacters = characters.filter(
    (character) => character.age >= minAge
  );

  return filteredCharacters;
}

const olderCharacters = getCharactersByAge(40);
console.log(olderCharacters);
newTask();

//4
function getCharacter(name) {
  return characters.find((character) => character.name === name);
}

function updateCharacter(name, newCharacter) {
  const characterToUpdate = getCharacter(name);

  if (characterToUpdate) {
    if (newCharacter.name) {
      characterToUpdate.name = newCharacter.name;
    }
    if (newCharacter.age) {
      characterToUpdate.age = newCharacter.age;
    }
  }
}

const updatedFred = { name: "Jack", age: 95 };
updateCharacter("Jack", updatedFred);
console.log(characters);
newTask();

//5
function removeCharacter(name) {
  const index = characters.findIndex((character) => character.name === name);

  if (index !== -1) {
    characters.splice(index, 1);
  }
}

removeCharacter("Jack");
console.log(characters);
