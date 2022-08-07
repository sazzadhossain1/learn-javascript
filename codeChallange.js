//code challenge # 1 //
//------------------//
// let markMass = 78;
// let markHeight = 1.69;

// let johnMass = 92;
// let johnHeight = 1.95;

// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / (johnHeight * johnHeight);

// let markHeightBMI = markBMI > johnBMI;
// console.log(markBMI);
// console.log(johnBMI);
// console.log(markHeightBMI);

// let markMass1 = 95;
// let markHeight1 = 1.88;

// let johnMass1 = 85;
// let johnHeight1 = 1.76;

// let markBMI1 = markMass1 / markHeight1 ** 2;
// let johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

// let markHeightBMI1 = markBMI1 > johnBMI1;
// console.log(markBMI1, johnBMI1, markHeightBMI1);
///////////////////////////////////////////////////////

// Code challange # 2 //
//...................//

let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / (johnHeight * johnHeight);

let markHeightBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHeightBMI);

let higherBMI = markBMI > johnBMI || johnBMI < markBMI;
console.log(higherBMI);

// if (markBMI > johnBMI) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("john's BMI is higher than Mark's!");
// }
if (markBMI > johnBMI) {
  console.log(`Mark's BMI is ${markBMI} higher than John's!${johnBMI}`);
} else {
  console.log(`john's BMI is ${johnBMI} higher than Mark's!${markBMI}`);
}
