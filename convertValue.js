// type conversion //
////////////////////

const inputYear = "1996";

const convertVariable = Number(inputYear); // ---> kono string er vitore jodi kono number thake r oi string number ke jodi number e convert korte chai tahole (Number()) method use korte hoibo.Tahole string number ti (number) e convert hoye jabe...
// console.log(convertVariable);
////////////////////////////////////////////////////////////////

const additionNumber = convertVariable + 4; // ---> ai khane string number ke (number) e convert korar pore tar shathe 4 plus korlam.
// console.log(additionNumber);
////////////////////////////////////////////////////////////////

const number = 2022;
const convertString = String(number); // ---> amra chaile kono akta number ke (string) e o convert korte parbo.Kono number ke string e convert korte hole amader (String()) method use korte hoy...(String()) method use korle jokono number ke string e convert kora jay.
// console.log(convertString);
////////////////////////////////////////////////////////////////

const str = "sazzad";
const strConvert = Number(str); // ---> amra jodi kono string ke number e convert korte chai tahole sheta number e convert hobe na (result ashbe NaN)...tar mane bujha gelo je kono string ke number e convert kora jabe na...
// console.log(strConvert);
//////////////////////////////////////////////////////////////////

// type coercion //
//////////////////
console.log("I am " + 23 + " years old"); // ---> ai khane ja hoyeche sheta holo...console er vitore ami 2 ta staring and 1 ta number niyechi abong ai shob guloke + koreche.Ati korar pore amar result ashche (I am 23 years old)...akhon aivabe result ashar karon holo number 23 ke javascript automatic (string) e convert kore feleche....

console.log("23" - "10" - 3); // --->ai khane string 2 ta number ke javascript auto number e convert kore diyeche (-) korar karone.jodi (+) kortam tahole (string) kore dito...ai khane result ashche 10...result 10 ashar karon holo javascript 2 ta string number ke number e convert kore diyeche....tai result 10 hoise.... prothome 23 theke 10 (-) hoise and then 13 theke 3 (-) hoise.

console.log("23" + "10" + 3); // ---> aikhane result ashche (23103) tar karon holo console er virote jei 1 ta number aache shetake javascript (string e convert kore diyeche).tar karon holo amra aikhane (+) kortesi....

let n = "1" + 1; // ---> ami jokhon ai khane + koreche tokhon javasctipt ati ke (string) e convert korediyeche tai 1 and 1 pasha pashi boshe 11 hoye gese...
n = n - 1; // ---> ami jokhon ai khane (-) korlam tokhon javascript (string 11) ke number e convert kore diyeche...tai result ashce 10...
console.log(n);
