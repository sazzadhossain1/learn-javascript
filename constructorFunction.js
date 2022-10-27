const person = function (firstName, birhday) {
  this.firstName = firstName;
  this.birhday = birhday;
};

const sazzad = new person("Sazzad", 1996);
console.log(sazzad);
const yeasin = new person("Yeasin", 2017);

const minusBirthday = yeasin.birhday - sazzad.birhday;
console.log(minusBirthday);

const nameAdd = yeasin.firstName + " " + sazzad.firstName;
console.log(nameAdd);
