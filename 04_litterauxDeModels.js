const firstName = "John";
const lastName = "Doe";

const message = `Bonjour ${firstName} ${lastName}`;
console.log(message);

const array = [1, 2, 3, 4, 5];

const sumArray = `La somme des éléments au carré de mon tableau est: ${array.reduce(
  (total, currentValue) => total + currentValue
)}`;

console.log(sumArray);
