function newTask() {
  console.log("========================New Task===========================");
}

//1. Context
//- Создайте объект qa с полями name, age, salary и методом getInfo(greetingsWord), который будет возвращать строку вида:
//${greetingsWord}, my name is ${name}, i'm ${age} and my salary is ${salary}.
//Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.

const qa = {
  name: "John Doe",
  age: 30,
  salary: 50000,

  getInfo(greetingsWord) {
    return `${greetingsWord}, my name is ${this.name}, I'm ${this.age} and my salary is ${this.salary}.`;
  },
};

console.log(qa.getInfo("Hello"));
newTask();

//2. Changing the context
//- Создайте объект anotherQa с полями name, age, salary, значения в которых будут отличны от объекта qa
//- Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода bind()
//- Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода call()
//- Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода apply()

const anotherQa = {
  name: "Jane Doe",
  age: 25,
  salary: 60000,
};

const boundInfo = qa.getInfo.bind(anotherQa, "Hi");
console.log(boundInfo());
console.log(qa.getInfo.call(anotherQa, "Hello"));
console.log(qa.getInfo.apply(anotherQa, ["Greetings"]));
newTask();

//3. Closures
//- Создайте функцию createCounter(),
//- Создайте в функции createCounter переменную count, которая будет равна 0
//- Верните из функции createCounter новую функцию
//- В теле новой функции реализуйте увеличение count на + 1 при каждом вызове функции
//- После увеличение каунтера выводите в консоль Function was called ${count} times
//- Создайте переменную functionCallCounter, в которой будет лежать результат createCounter()
//- Вызовите functionCallCounter() 5 раз, убедитесь что в консоли верно выводятся данные

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(`Function was called ${count} times`);
  };
}

const functionCallCounter = createCounter();

functionCallCounter();
functionCallCounter();
functionCallCounter();
functionCallCounter();
functionCallCounter();
