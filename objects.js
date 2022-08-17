const person = {
  firstName: "Sazzad",
  lastName: "Hossain",
  age: 2022 - 1996,
  job: "Student",
  friends: ["Solim", "Saidee", "Shagor", "Shojib"],
};
console.log(person);

// object's . totation vs bracate notatation //

console.log(person.firstName); // ---> object er kono key er value ke jodi access korte hoy tahole (object er name and (.) diye key er name dite hobe). aivabe jekono object er key er value ke access kora jabe...

// akhon amra (friends) key ke access korbo //
console.log(person.friends[0]); // ---> object er vitore jodi kono array thake r amra jodi shei array er kono element ke access korte chai tahole (object er name then (.) and key er name abong array er jei value ke chacchi oi valu er index number diye dite hoge). aivabe object er array er value ke access kora jabe.

console.log(person["firstName"]); // ---> object er key er value ke amra chaile [] er maddhome access korte parbo....shudhu [] er vitore key ke string er vitore likhte hobe....

const nameKey = "Name";

console.log(person["first" + nameKey]);
console.log(person["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Sazzad? Choose between firstName,lastName,age,job and friends"
// );
// console.log(person[interestedIn]);

// if (person[interestedIn]) {
//   console.log(person[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName,lastName,age,job,and friends"
//   );
// }

// kono akta object er vitore jodi kono akta key and value add korte hoy tahole amra 2 vabe add korte parbo....jemon....

// First one //
person.location = "bangladesh"; // ---> jei object e element and key add korbo oi object er name and (.) and key er name and (=) sign abong string er vitore value....aivabe likhle object er vitore key and element add hoye jabe......

// Second //
person["twitter"] = "@sazzadHossain"; // ---> jei object e key and value add korbe oi object er name likhbo and ["key name"] aivabe likhbo then = sign dibo then string er vitore value likhbo......aivabe likhle object er vitore element add hoye jabe.....
console.log(person);

// Challange //
// challange ti hocche ---> (Sazzad has 4 friends and his best friend is called solim) <=== ai likha ti console e dinamicali dekhate hobe......uporer persone object use kore......
console.log(
  `${person.firstName} has ${person.friends.length} friends and his best friend is called ${person.friends[0]}`
);
