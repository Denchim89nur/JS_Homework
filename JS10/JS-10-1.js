//1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
function delayTwoSeconds(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

//2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//его резолва в консоль
const resolvedPromise = new Promise((resolve) => {
  resolve(1);
});

resolvedPromise.then((result) => {
  console.log("Результат промиса:", result);
});

//3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//Обработайте промис методом .catch и выведите результат его резолва в консоль
const rejectedPromise = new Promise((_, reject) => {
  reject("Promise failed");
});

rejectedPromise.catch((error) => {
  console.log("Ошибка реджекта:", error);
});

//4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
function promiseNumber(number) {
  return new Promise((resolve) => {
    resolve(number);
  });
}

//5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//в консоль результаты работы каждого промиса через .then
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then(
  (results) => {
    results.forEach((result, index) => {
      console.log(`Результат промиса ${index + 1}: ${result}`);
    });
  }
);

//6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//в консоль статус и результат каждого промиса через .then
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then(
  (results) => {
    results.forEach((result, index) => {
      console.log(
        `Статус промиса ${index + 1}: ${result.status}, Результат: ${
          result.value || result.reason
        }`
      );
    });
  }
);

//7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
async function asyncPromiseAll() {
  try {
    const results = await Promise.all([
      promiseNumber(1),
      promiseNumber(2),
      promiseNumber(3),
    ]);
    results.forEach((result, index) => {
      console.log(`Результат промиса ${index + 1}: ${result}`);
    });
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

async function asyncPromiseAllSettled() {
  try {
    const results = await Promise.allSettled([
      promiseNumber(1),
      promiseNumber(2),
      promiseNumber(3),
    ]);
    results.forEach((result, index) => {
      console.log(
        `Статус промиса ${index + 1}: ${result.status}, Результат: ${
          result.value || result.reason
        }`
      );
    });
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

asyncPromiseAll();
asyncPromiseAllSettled();
