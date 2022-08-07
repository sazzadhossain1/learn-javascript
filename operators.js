/** Operators......
 * -----------------------------
 * operators onek dhoroner hoye thake.....jemon.
 * 1) mathematical operators.
 * 2) comparison operators.
 * 3) logical operators.
 * 4) assignment operators and many more.
 */
// (*) atai hocche asterisk sign.

// Math operators
const nowYear = 2022;
const sazzadAge = nowYear - 1996;
const fahimAge = nowYear - 1989;
// console.log(sazzadAge, fahimAge);

// console.log(sazzadAge * 2, fahimAge / 2, 2 ** 3);
// ai khane (2 ** 3) er mane holo (2*2*2) 3 ta 2.

/////////////////////////////////////////////
const firstName = "Sazzad";
const lastName = "Hossain";
// console.log(firstName + " " + lastName);

/////////////////////////////////////////////
// Assignment operator
let x = 10 + 5;
x += 10; // (+=) eitar mane holo -----> x = x + 10;
x -= 4; // (-=) eitar mane holo -----> x = x - 4;
x *= 5; // (*=) eitar mane holo -----> x = x * 5;
x++; // aitar mane holo 1 kore plus korbe.....
x--;
x--; // aitar mane holo 1 kore minus korbe.......
// console.log(x);

//-----------------------------------------------------

// Comparison operators //

// console.log(sazzadAge > fahimAge); // >,<, >=,  <=
// console.log(sazzadAge >= 26);
const age = sazzadAge === 26;
// console.log(age);
const isfullAge = sazzadAge >= 26;
// console.log(isfullAge);

console.log(nowYear - 1996 > nowYear - 1989);
console.log(nowYear - 1989 > nowYear - 1996);

x = y = 10;
console.log(y);

x = y = 25 - 10 - 5;
console.log(x);

const avgAge = (sazzadAge + fahimAge) / 2;
console.log(sazzadAge, fahimAge, avgAge);
