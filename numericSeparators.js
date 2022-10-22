// const diameter = 287_460_000_000;
// console.log(diameter);

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 15_00;

// const PI = 3.1415;
// console.log(PI);

// console.log(Number("230_000"));
// console.log(parseInt("230_000"));

// //-------------------------------------------------

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(3232323232434354656576564534342323434n);
// console.log(BigInt(11113232323232434354656576564534342323434));

// // Operations
// console.log(1000n + 1000n);
// console.log(3232323232434354656576564534342323434n * 10000000n);

// const huge = 345542524323242423234353657456756;
// const num = 23;
// console.log(BigInt(huge) * BigInt(num));

// // Exceptions
// console.log(20n > 15);
// console.log(20n === 20);
// console.log(typeof BigInt(20));
// console.log(20n == "20");

// console.log(huge + " is REALLY big !!!");

// // Divisions
// console.log(11n / 3n);
// console.log(10 / 3);

//////////////////////////////////////////
///////////////////////////////
////////////////////

// Bigint from (Code Step By Step) ---> Youtube channel

const x = 100000000434343434343434343434343434343434343434;
const y = 10000000000;
// console.log(x * y);
// console.log(BigInt(x));
// console.log(BigInt(x * y));
if (x < y) {
  console.log(BigInt(x));
} else {
  console.log(BigInt(y));
}
