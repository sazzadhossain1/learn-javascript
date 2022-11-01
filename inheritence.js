const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);

// inheritance Between class ES6
//..............................

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calAge() {
    console.log(2037 - this.birthYear);
  }

  static hey() {
    console.log("Hey there");
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and study ${this.course}`);
  }
  calAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } Years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

// const shayla = new StudentCl("Shayla akther", 2012);
const shayla = new StudentCl("Shayla akther", 2012, "Computer science");
shayla.introduce();
shayla.calAge();

////////////////////////////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const studentProto = Object.create(PersonProto);
studentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

studentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and Istudy ${this.course}`);
};

const jay = Object.create(PersonProto);
jay.init("Jay", 2010, "Computer Science");
// jay.introduce();
// jay.calAge();

console.log("----------- Another Class Example ---------");

class Account {
  // 1) Public fields (instances)
  // locale = navigator.language;

  // 2) Private fields
  _movements = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
}

const acc1 = new Account("Sazzad", "EUR", 1111);
acc1._movements.push(250);
acc1._movements.push(-140);

acc1.deposit(250);
acc1.deposit(-140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);

console.log(acc1.owner);
console.log(acc1.currency);
console.log(acc1.pin);

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(4000);
console.log(acc1.getMovements());
