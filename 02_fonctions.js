const myArray = [15, 10, 9, 16, 15];

function moyenne(array) {
  let x = 0;

  for (let i = 0; i < array.length; i++) {
    // x = x + myArray[i];
    x += array[i];
  }

  return x / array.length;
}

console.log(moyenne(myArray));

// Fonctions fléchées
const moyenne2 = (array) => {
  let x = 0;

  for (let i = 0; i < array.length; i++) {
    // x = x + myArray[i];
    x += array[i];
  }

  return x / array.length;
};

console.log(moyenne2(myArray));

// const fullName = (firstname, lastname) => {
//   return firstname + " " + lastname;
// };

const fullName = (firstname, lastname) => firstname + " " + lastname;

console.log(fullName("Jonh", "Doe"));
