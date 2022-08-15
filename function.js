function logger() {
  // console.log("my name is sazzad");
}
logger(); //---> ata ke bola hoy (calling / runing / invoking function).....kono function likhle oi function ke abar call korte hoy ta na hole function kaj kore na...

function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
// function hocche akta matchin er moton. ami ai function ti ke bar bar use korte parbo //

const appleJuice = fruitProcessor(3, 0);
// console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 6);
// console.log(orangeJuice);
//////////////////////////////////////////////////////

// Function Declaration VS Expressions //
function calcAge1(birthday) {
  return 2022 - birthday;
}

const age1 = calcAge1(1996);
console.log(age1);

const calcAge2 = function (birthday) {
  return 2022 - birthday;
};

const age2 = calcAge2(1990);
console.log(age2);
