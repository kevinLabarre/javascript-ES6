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
