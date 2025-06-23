// La fonction map permet de modifier le contenu d'un tableau, sans modifier le tableau original.
// Elle renvoie un nouveau tableau, et ne modifie pas le tableau original.

const persons = [
  { firstName: "Malcolm", lastName: "Reynlods" },
  { firstName: "Kaylee", lastName: "Frye" },
  { firstName: "Jayne", lastName: "Cobb" },
];

const personFullName = persons.map(
  (user) => user.firstName + " " + user.lastName
);

console.log(persons);
console.log(personFullName);

const chiffres = [1, 2, 3, 4];

// transformer le tableau de chiffres en un tableau qui contient tous les carrés de ces chiffres
// résultat attendu = [1, 4, 9, 16]

const carres = chiffres.map((chiffre) => chiffre * chiffre);
console.log(carres);

// Méthode flatMap
let result = chiffres.map((x) => [x * x]);
let result2 = chiffres.flatMap((x) => [x * x]);

console.log("Avec .map() : ", result);
console.log("Avec .flatMap() : ", result2);
