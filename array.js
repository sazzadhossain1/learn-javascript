// ---> aigula hocche (string) variable //
const friend1 = "Sazzad";
const friend2 = "Hossain";
const friend3 = "Tomal";

// akhon ai 3 ta friend ke jodi ak shathe rakhte chai tahole akta array er vitore rakhte hoe.jemon.
const friends = ["Sazzad", "Hossain", "Tomal"];
// console.log(friends);

// const year = new array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]); // ---> aiti likhar karone array er vitore last er dike jei element aache shetike dekhabe.last e aache ("Tomal");
friends[2] = "Tttt"; // ---> array er vitore jodi kono kichu ke replace  korte hoy tahole aivabe korte hoy.index [2] deyar karon hocche index [2] te "Tttt" replace hoye jabe...
// console.log(friends);

const firstName = "Muhammad";
const personeName = [
  firstName,
  "yeasin",
  "Hossain",
  2022 - 2017,
  "father",
  friends,
];
// console.log(personeName);
// console.log(personeName.length);

// Exercise //
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// upore 3 ta variable age1, age2, age3 ke akhon akta variable er vitore rakhbo.ai 3 ta vaiable function ke akta array variable er vitore rakhte hobe....
const age = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
// console.log(age);
const pushFriend = ["Abdur Rahman", "Saidee", "Shagor", "Shojib"];
console.log(pushFriend);

// Add Elements //
pushFriend.unshift("Sazzad");

const newFriend = pushFriend.push("Rakesh");
console.log(pushFriend);

console.log(newFriend);

// Remove Elements //
pushFriend.pop();
console.log(pushFriend);
pushFriend.shift();
console.log(pushFriend);

console.log(pushFriend.indexOf("Saidee")); // ===> array er vitore ai element er index number koto sheta dekhabe.....ai element er index number 1.
console.log(pushFriend.indexOf("lasa")); // ===> atao element er index number dekhabe....jodi array te ai (lasa) element na thake tahole result (-1) dekhabe...
console.log(pushFriend.includes("Shojib")); // ===> (include) er vitore (Shojib) deya aache... akhon (shojib) jodi array er vitore thake tahole result dekhabe (true)....akhon aitar result holo true..karon ("Shojib") pushFriend er vitore aache..
console.log(pushFriend.includes("Shohan")); // ---> (inclue) er vitore (shohan) aache...akhon (shohan) jodi pushFriend array er vitore na thake tahole result ashbe (false);

////////////////////
pushFriend.push(23);
console.log(pushFriend);
const pushNum = pushFriend.includes(23);
console.log(pushNum);

if (pushFriend.includes("Shohan") || pushFriend.indexOf("Saidee")) {
  console.log("I have a friend..Hi's my best friend");
} else {
  console.log("There is no friends");
}
