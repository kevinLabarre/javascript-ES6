let array = ["Riri", "Fifi", "Loulou"];

let array2 = new Array(5);
let array3 = new Array(21, 56, 10);

console.log(array);
console.log(array2);
console.log(array3);

array.push("Toto");
console.log(array);

// Suppression l'élément d'index 2
array.splice(2, 1);
console.log(array);

// Pour parcourir un tableau
array.forEach((currentValue, index, arr) =>
  console.log(index + ": " + currentValue + " array: " + arr)
);

array.forEach((currentValue) => console.log(currentValue));

for (element of array) {
  console.log(element);
}
