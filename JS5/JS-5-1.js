function newTask() {
  console.log("========================New Task===========================");
}

function mergeArrays(...arrays) {
  return [].concat(...arrays);
}

let arr1 = [4, 3];
let arr2 = [2, 1];
let arr3 = [5, 6];

console.log(mergeArrays(arr1, arr2, arr3));

newTask();
'for exapmle user name'

function transform(sentence) {
    const words = sentence.toLowerCase().split(' ')
    const result = []
    words.forEach((word, index) => {
        if (index === 0) {
            result.push(word)
            return
        }
        const newWord = word[0].toUpperCase() + word.slice(1)
        result.push(newWord)
    })
    
    return result.join('_')
}

console.log(transform('for exapmle user name'))

newTask();

function fib(n) {
  let prev = 0;
  let curr = 1;
  if (n === 0) return 0;
  let step = 1;
  while (step <= n) {
    curr = curr + prev;
    prev = curr - prev;
    step += 1;
  }
  return curr;
}

console.log(fib(6));
