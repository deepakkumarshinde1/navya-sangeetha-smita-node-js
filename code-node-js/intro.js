console.log(fetch);

function fun() {}

fun();

let array = [1, 2, 3, 4, 5];
let [num1, num2] = array;
console.log(num1, num2);

array.forEach((value) => {
  console.log(value);
});

let newList = array.map((value) => {
  return value * value;
});

console.log(newList);

async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await response.json();
  console.log(data);
}
fetchData();
