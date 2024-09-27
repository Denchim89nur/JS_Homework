const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < values.length; i++) {
  if (values[i] % 2 === 0) {
    console.log(`Элемент ${values[i]} - четный - ${values[i] ** 2}`);
  } else {
    console.log(`Элемент ${values[i]} - нечетный- ${values[i] ** 3}`);
  }
}

const a = [1, 2, 3, 4, 5];
a.push(6);
a.unshift(0);
a.splice(2, 1);
a.pop();
console.log(a);

const b = [8, 3, 5, 9, 2];
const [first, second, ...rest] = b;
console.log(first);
console.log(second);
console.log(rest);

const c = [1, 2, 3, 4, 5];
const d = [6, 7, 8, 9, 10];
const mergetArray = [...c, ...d];
console.log(mergetArray);
