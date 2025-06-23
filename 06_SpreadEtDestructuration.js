// Spread operator

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

// const x = ...numbersOne // impossible, il me faut "un container"

console.log(...numbersOne);

// Copie "propre"
const copie = [...numbersOne];

const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

// On peut passer autant de paramètres que l'on souhaite à cette fonction
function sum(...numbers) {
  let total = 0;
  numbers.forEach((n) => (total += n));
  return total;
}

const user = { firstName: "Malcolm", lastName: "Reynlods", age: 25 };

const user2 = { ...user };
console.log(user2);

const user3 = { ...user, firstName: "John", city: "New York" };
console.log(user3);

// La destructuration
const names = ["Johny", "Mickael"];

const [name1, name2] = names;

// Equivalent à la ligne ci-dessus
// const name1 = names[0];
// const name2 = name[1];

console.log(name1);
console.log(name2);

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

const [a, b, c, ...rest] = myArray;
console.log(rest);

const calculate = (a, b) => {
  const add = a + b;
  const substract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, substract, multiply, divide];
};

const [add] = calculate(1, 2);
console.log(add);

const [, , , divide] = calculate(1, 2);

const calculate2 = (a, b) => {
  const add = () => a + b;
  const substract = () => a - b;
  const multiply = () => a * b;
  const divide = () => a / b;

  return { add, substract, multiply, divide };
};

const { divide: division, multiply } = calculate2(1, 2);
console.log("division: ", division(), "multiply: ", multiply());

const person = {
  name: "Malcolm",
  lastName: "Reynlods",
  age: 25,
  city: "New York",
};

const personInfo = ({ name, age }) => console.log(`${name} a ${age} ans`);
personInfo(person);
