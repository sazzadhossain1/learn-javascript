const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(jonas instanceof Person);

Person.hey = function () {
  console.log("Hey there");
  console.log(this);
};

Person.hey();

class Jannat {
  constructor(firstName, lastName, hight, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hight = hight;
    this.age = age;
  }

  static jannatDetails(firstName, lastName, hight, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hight = hight;
    this.age = age;
    return `This is ${this.firstName}. ${this.firstName}'s full name is ${
      this.firstName + " " + this.lastName
    } and she is ${this.age} years old and she is ${this.hight} Fit`;
  }
}

const callJannat = new Jannat("Khadija tul", "Jannat", "2 -", "2.5");
console.log(callJannat);
console.log(Jannat.jannatDetails("Khadija tul", "Jannat", "2 -", "2.5"));

//////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////

// Learn with Sumit vai
//...................//

// class Car {
//   constructor(name, model, speed, price) {
//     this.name = name;
//     this.model = model;
//     this.speed = speed;
//     this.price = price;
//   }

//   static carDetails(name1, model, speed, price) {
//     this.name1 = name1;
//     this.model = model;
//     this.speed = speed;
//     this.price = price;
//     return `This is ${this.name1} ${this.model} and this car's price is ${this.price} and ${this.name1} is going with ${this.speed} Speed`;
//   }
// }

// const callCarFunction = new Car("Mazda", "RX8", "250", "150000000");
// console.log(callCarFunction);

// console.log(Car.carDetails("Mazda", "RX8", "250", "150000000"));
