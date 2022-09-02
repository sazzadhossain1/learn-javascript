// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;

// kono akta html er taga ke jodi amra dhorte chai tahole class, id er maddhome dhorte parbo.......amra querySelector er vitore class othoba id use korbo.....class use korar aage (.) use korbo and id use korar aage (#) use korbo.....pore textContent likhe (=) er pore ja likhbo sheta replace hoye jabe......kintu amra jodi kono input filled ke dhorte chai tahole aki avbe kaj korbo shodhu textContent er poriborte (.value) use korbo.....

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   const score = (document.querySelector(".score").textContent = guess);
//   //   console.log(guess, score, typeof guess);
//   if (!guess) {
//     console.log((document.querySelector(".message").textContent = "No Number"));
//   }
// });

const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = secretNumber;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess);

  //................................
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess == secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";

    document.querySelector("body").style.backgroundColor = "darkblue";
    document.querySelector(".number").style.width = "50rem";
    document.querySelector(".number").style.backgroundColor = "black";
    document.querySelector(".number").style.color = "white";

    //................................
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "TOoO high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }

  //......................................
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "TOoO Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
