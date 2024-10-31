//Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//После получения респонса проверьте что статус === 200. Если статус не 200 - пробросить ошибку
//Преобразуйте респонс из JSON в объект
//Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//Функция должна возвращать полученный объект из респонса
//Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

async function createTodo(todoBody) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoBody),
    });

    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.status}`);
    }

    const data = await response.json();

    if (
      data.userId !== todoBody.userId ||
      data.title !== todoBody.title ||
      data.completed !== todoBody.completed
    ) {
      throw new Error("Полученные данные не совпадают с отправленными");
    }

    console.log("Работа функции завершена.");
    return data;
  } catch (error) {
    console.error("Ошибка:", error);
    throw error;
  }
}

const newTodo = {
  userId: 12345,
  id: 11,
  title: "hello word!",
  completed: false,
};

createTodo(newTodo)
  .then((createdTodo) => {
    console.log("Созданная тудушка:", createdTodo);
  })
  .catch((error) => {
    console.error("Произошла ошибка:", error);
  });
