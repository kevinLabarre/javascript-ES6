const user = { firstName: "Malcolm", lastName: "Reynlods", age: 25 };

class Car {
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    console.log("Dans le getter");
    return this.#name;
  }

  set name(name) {
    console.log("Dans le setter");
    this.#name = name;
  }
}

const myCar = new Car("BMW", 1994);
console.log(myCar);

console.log(myCar.name);

myCar.name = "Audi";
console.log(myCar.name);

// NE PAS REPRODUIRE !
const myCar2 = myCar;

console.log("MyCar2", myCar2);
myCar.year = 2000;

console.log("MyCar2", myCar2);

// Pour une copie propre:
const carCopie = Object.assign({}, myCar);
console.log(carCopie);
myCar.year = 2020;
console.log(carCopie);
