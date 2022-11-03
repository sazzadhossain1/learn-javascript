// problem with this bouth function cause i call (display function and calculator function bouth)....2 ta function ke ak shathe call kora lagtese tai aivabe use kora jabe na....

// function display(some) {
//   console.log(some);
// }

// function calculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// const callCalculatorFunction = calculator(5, 5);
// display(callCalculatorFunction);
// // console.log(callCalculatorFunction);

//////////////////////////////////////////////////
/////////////////////////////////////////////////
////////////////////////////////////////////////

// This function also have a proble.....The problem is (display function dependent on calculator function)

// function display(some) {
//   console.log(some);
// }

// function calculator(num1, num2) {
//   let sum = num1 + num2;
//   display(sum);
// }

// calculator(5, 5);

///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// function display(some) {
//   console.log(some);
// }

// function calculator(num1, num2, callback) {
//   let sum = num1 + num2;
//   callback(sum);
// }

// calculator(5, 5, display);

/////////////////////////////////////////////////////////

const display = (some) => {
  console.log(some);
};

const calculator = (num1, num2, callback) => {
  const sum = num1 + num2;
  callback(sum);
};

calculator(10, 20, display);
