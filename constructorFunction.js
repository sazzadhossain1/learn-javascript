// const person = function (firstName, birhday) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birhday = birhday;

//   // Never do this
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birhday);
//   //   };
// };

// const sazzad = new person("Sazzad", 1996);
// // console.log(sazzad);
// const yeasin = new person("Yeasin", 2017);

// // const minusBirthday = yeasin.birhday - sazzad.birhday;
// // console.log(minusBirthday);

// // const nameAdd = yeasin.firstName + " " + sazzad.firstName;
// // console.log(nameAdd);

// console.log(sazzad, yeasin);

// console.log(sazzad instanceof person);

/////////////////////////////////////////////////////////
//----------------------------------------------------//
//////////////////-----------------////////////////////
//--------------------------------------------------//

// Learn with sumit vai
//-------------------//

// const sazzad = {
//   firstName: "Sazzad",
//   middleName: "Hossain",
//   lastName: "Tomal",
//   age: 26,
//   fullName: function () {
//     return (
//       this.firstName +
//       " " +
//       this.middleName +
//       " " +
//       this.lastName +
//       ` Age ${this.age}`
//     );
//   },
// };
// console.log(sazzad.fullName());

// amra akhon uporer same kaj ti constructor function er maddhome korbo

const Person = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.fullName = function () {
    return (
      this.firstName + " " + this.lastName + ` And i am ${this.age} years old`
    );
  };
};

const sazzad = new Person("sazzad", "hossain", 26);
const yeasin = new Person("Yeasin", "hossain", 5);
console.log(sazzad.fullName());
console.log(yeasin.fullName());

sazzad.profetion = "Web developer";
console.log(sazzad.profetion);

Person.prototype.country = "Bangladesh";
console.dir(Person);
////////////////////////////////////////////////////////////////
//-----------------------------------------------------------//
//////////////////////////////////////////////////////////////

// constructor function by (Codeinnovior) ---> youtube channel

function Person1(firstName, lastName, dateOfBirth) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dateOfBirth = new Date(dateOfBirth);
  this.getFullYear = function () {
    return this.dateOfBirth.getFullYear();
  };

  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const shayla = new Person1("Shayla", "Akther", "1/5/1996");
// console.log(shayla);
console.log(shayla.dateOfBirth.getFullYear());
// console.log(shayla.fullName());
