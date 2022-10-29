// learn with sumit vai
//-------------------//

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  play = function (status) {
    console.log(`${this.name} is playing ${status}`);
  };
}

const person1 = new Person("Sakib", 35);
const person2 = new Person("tamim", 36);

// console.log(person1);
// console.log(person2);

person1.play("well");
person2.play("bad");
