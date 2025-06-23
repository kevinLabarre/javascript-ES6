const myArray = [1, 2, 3, 4];

const sumArray = myArray.reduce((total, currentValue) => total + currentValue);

// Ici, on commence avec un total qui aura une valeur initial égale à 10
const sumArray2 = myArray.reduce(
  (total, currentValue) => total + currentValue,
  10
);

console.log(sumArray);

// Somme des carrés
const sumArrayCarres = myArray.reduce(
  (total, currentValue) => total + currentValue * currentValue
);

console.log(sumArrayCarres);
