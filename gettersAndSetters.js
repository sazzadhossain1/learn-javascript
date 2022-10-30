class Computer {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
  }

  aboutComputer() {
    console.log(
      `this computer name is ${this.name} and the model is ${this.model}`
    );
  }

  get computerName() {
    return this.name;
  }

  get computerModel() {
    return this.model;
  }

  set computerName(name) {
    this.name = name;
  }

  set computerModel(model) {
    this.model = model;
  }
}

const dell = new Computer("Dell", "007");
console.log(dell);
dell.aboutComputer();

dell.computerName = "HP";
console.log(dell.computerName);
console.log(dell.computerModel);
console.log(dell);

dell.computerModel = "1o1";
console.log(dell);

////////////////////////////////////////////////////
//-----------------------------------------------//
//////////////////////////////////////////////////

console.log("-----------Sumit Vai----------");

// Learn with sumit vai
//-------------------//

const person = {
  firstName: "Sazzad",
  lastName: "Hossain",
  motherLanguage: "Bangla",
  get lang() {
    return this.motherLanguage;
  },
  set lang(lng) {
    this.motherLanguage = lng;
  },
};

person.lang = "English";

console.log(person.lang);
console.log(person);

/// class constructor
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.lastName}'s full name is ${
      this.firstName + " " + this.lastName
    } and she is ${this.age} years old`;
  }
  set callPerson(age) {
    this.age = age;
  }
}

const callPerson = new Person("Khadija tul", "Jannat", 2.5);
callPerson.age = 5;
console.log(callPerson);

console.log(callPerson.fullName);

console.log(callPerson);

//
