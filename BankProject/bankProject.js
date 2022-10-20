"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: "Sazzad SHossain",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
// console.log(accounts);
/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

//------------------------------------------------

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov} EUR</div>
        </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

///////////////////////////////////////
////////////////////////////
/////////////////

// const user = "Steven Thomas Williams";
// const userName = user
//   .toLowerCase()
//   .split(" ")
//   .map(function (name) {
//     return name[0];
//   })
//   .join("");
// console.log(userName);

// const createUserName = function (user) {
//   const userName = user
//     .toLowerCase()
//     .split(" ")
//     .map((name) => name[0])
//     .join("");
//   console.log(userName);
// };

// createUserName("Steven Thomas Williams");

const createUserName1 = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUserName1(accounts);

// console.log(accounts);

const updateUI = function (acc) {
  displayMovements(acc.movements);
  // display blance
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};

// Event handler // -------> User login with pin
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&//
let currentAccount;
let currentPin;
btnLogin.addEventListener("click", function (e) {
  //prevent from from submitting //
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message //
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    // display movements

    // Update Ui
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.blance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    // Doing the transrer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update Ui
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add Movement
    currentAccount.movements.push(amount);

    // Update UI //
    updateUI(currentAccount);
  }

  inputLoanAmount.value = "";
});
// Delete Button //
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.userName === currentAccount.userName
    );
    console.log(index);
    // .indexOf(23)

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 100;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const calcDisplayBalance = function (acc) {
  acc.blance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.blance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EUR`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} ETUR`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} EUR`;
};

//////////////////////////////////

const user = "Sazzad Hossain Tomal";
const createUserName = function (userNum) {
  const userName = userNum
    .toLowerCase()
    .split(" ")
    .map((name) => name[0])
    .join("");
  return userName;
};

console.log(createUserName(user));

//-------------------------------------------//
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposit = movements.filter(function (mov) {
//   return mov > 0;
// });

// const depositFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositFor.push(mov);
//   }
// }
// console.log(deposit);
// console.log(depositFor);

// const withdrawal = movements.filter(function (mov) {
//   return mov < 0;
// });

// console.log(withdrawal);

// const withdrawalFor = [];
// for (const mov of movements) {
//   if (mov < 0) {
//     withdrawalFor.push(mov);
//   }
// }
// console.log(withdrawalFor);

//--------------------------------//

// const pushDepo = [];
// const depo = movements.filter(function (de) {
//   return pushDepo.push(de > 0);
// });

// console.log(pushDepo);

//----------------------------------//

const pus = [];
const wi = [];
for (const mov of movements) {
  if (mov > 0) {
    pus.push(mov);
  } else if (mov < 0) {
    wi.push(mov);
  }
}
console.log(wi);
console.log(pus);
