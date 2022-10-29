// Class expression
// const personCl = class{}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calAge() {
    console.log(2037 - this.birthYear);
  }
}

const Yeasin = new PersonCl("Yeasin", 2017);
console.log(Yeasin);

Yeasin.calAge();

console.log(Yeasin.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
Yeasin.greet();
///////////////////////////////////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////

// learn with sumit vai
//-------------------//+

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   play = function (status) {
//     console.log(`${this.name} is playing ${status}`);
//   };
// }

// const person1 = new Person("Sakib", 35);
// const person2 = new Person("tamim", 36);

// // console.log(person1);
// // console.log(person2);

// person1.play("well");
// person2.play("bad");

// class Car {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }
//   runSpeed(overSpeed) {
//     console.log(`${this.brand} is going with ${this.speed}`);
//   }
// }

// const carCall = new Car("BMW", 120);
// const carCall2 = new Car("BMW", "over speed");
// console.log(carCall);

// carCall.runSpeed();
// carCall2.runSpeed();
