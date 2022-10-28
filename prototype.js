// Learn with sumit vai
//......................
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
Person.prototype.city = "Dhaka";
console.dir(Person);

console.log(sazzad.country);
console.log(sazzad.city);

//---------------------------------------//

const jannat = new String("jannat");

String.prototype.funWithPrototype = function () {
  return "I am doing fun with protype";
};
const x = "Bangladesh";
console.log(x.funWithPrototype().toUpperCase());
// ami aikhane (String) method er vitore nijossho function method create korechi....kintu ai kaj ti kokhono kora jabe na....

const Rohim = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

const rohimObject = new Rohim("Abdur", "Rohim", "30");
console.log(rohimObject);

Rohim.prototype.country = "Bangladesh";
console.dir(new Rohim("Abdur", "Korim", 36));
Rohim.prototype.city = "Dhaka";
console.log(new Rohim("Abdur", "Korim", 36));
