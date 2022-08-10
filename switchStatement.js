const rollNumber = 1;
// let text;

// if (rollNumber === 1) {
//   text = "congratulation! You are first";
// } else if (rollNumber === 2) {
//   text = "congratulation! You are second";
// } else if (rollNumber === 3) {
//   text = "Congratulation! You are third";
// } else {
//   text = "what is your roll?";
// }
// console.log(text);
///////////////////////////////////////////////////

// ---> akhon amra ai kaj tike aro easy kore (switch statement) diye korte pari...

// switch (rollNumber) {
//   case 1: // atar mane hocche ata (rollNumber = 1;)
//     text = "Congratulation! You are first";
//     break;
//   case 2:
//     text = "Congratulation! You are second";
//     break;
//   case 3:
//     text = "Congratulation! You are third";
//     break;
//   default:
//     text = "What is your roll?";
// }

// console.log(text);
//////////////////////////////////////////////////

// switch er aro akta exm //

const color = "red";

switch (color) {
  case "red":
  case "green":
  case "blue":
    console.log("RGB Color is defaind");
    break;
  case "cyan":
  case "yellow":
  case "magenta":
    console.log("CMYK color is defaind");
    break;
  default:
    console.log("ColOoor is not defaind");
}
///////////////////////////////////////////////////////

const digit = 1;

switch (digit) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Invalid digit");
}

///////////////////////////////////////////////////

const vowelVariable = "a";

switch (vowelVariable) {
  case "a":
    console.log("Vowel");
    console.log("A is vowel and I love this vowel");
    break;
  case "e":
    console.log("Vowel");
    break;
  case "i":
    console.log("Vowel");
    break;
  case "o":
    console.log("Vowel");
    break;
  case "u":
    console.log("Vowel");
    break;
  default:
    console.log("consonent");
}
////////////////////////////////////////////

// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("plan course staructure");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("it is wednesday and thursday");
//     break;
//   case "friday":
//     console.log("this is friday");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("this is saturday and sunday");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

const day = "wednesday";
if (day === "monday") {
  console.log("this is monday");
} else if (day === "wednesday" || "thursday") {
  console.log("thsi is wednesday and thursday");
} else if (day === "friday") {
  console.log("this is friday");
} else if (day === "saturday" || "sunday") {
  console.log("this is saturday and sunday");
} else {
  console.log("NOT A VALID DAY");
}
