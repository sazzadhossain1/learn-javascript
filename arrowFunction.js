const calcAge1 = (birthday) => {
  const minus = 2022 - birthday;
  return minus;
};
const age1 = calcAge1(1996);
// console.log(age1);

const yearsUntilRetirement = (birthday, firstName) => {
  const age = 2022 - birthday;
  const retirement = 100 - age;
  return `${firstName} retires in ${retirement} years`;
};
const totalResult = yearsUntilRetirement(1996, "Sazzad Hossain");
// console.log(totalResult);
//////////////////////////////////////////

// function calling other function //
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePiecces = cutFruitPieces(apples);
  const orangePiecces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePiecces} piecee of apples and ${orangePiecces} piecee of oranges`;
  return juice;
}
console.log(fruitProcessor(3, 2));

//////////////////////////////////////////////////
// another example //
function fruitPieces(fruit) {
  return fruit * 5;
}
function fruit(apples, oranges) {
  const applePicess = fruitPieces(apples);
  const orangePicess = fruitPieces(oranges);
  const Juice = `apple juices with ${applePicess} and orange juices with ${orangePicess}`;
  return Juice;
}

const result = fruit(2, 5);
console.log(result);
///////////////////////////////////////////////////

// another example one //

function foodFunction(food) {
  return food;
}

function plateOfFood(rice, curry) {
  const makeRice = foodFunction(rice);
  const makeCurry = foodFunction(curry);
  return `make food to suppress hunger with ${makeRice} and ${makeCurry}`;
}
const readyFood = plateOfFood("Rice", "curry");
console.log(readyFood);
/////////////////////////////////////////////////

function cakeFunction(cake) {
  return cake;
}

function makeCake(chocolateCake, vanilaCake) {
  const makeChocolate = cakeFunction(chocolateCake);
  const makeVanilaCake = cakeFunction(vanilaCake);
  return `make ${makeChocolate} and make ${makeVanilaCake} only for you`;
}

const cakeParamiter = makeCake("Chocolate Cake", "Vanila Cake");
console.log(cakeParamiter);
/////////////////////////////////////

const calcAge = function (birthday) {
  return 2022 - birthday;
};

const yearsUntilRetirement1 = (birthday, firstName) => {
  const age = calcAge(birthday);
  const retirement = 100 - age;
  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return -1;
  }
  // return retirement;
};

console.log(yearsUntilRetirement1(1996, "Sazzad"));
console.log(yearsUntilRetirement1(1970, "Tomal"));
