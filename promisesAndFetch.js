// const getCountryData = function (county) {
//   fetch(`https://restcountries.com/v3.1/name/${county}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);

//     });
// };

// const getCountryData = function (county) {
//   fetch(`https://restcountries.com/v3.1/name/${county}`)
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       //   const neighbour = data.borders[0];
//       //   console.log(neighbour);
//     });
// };

// getCountryData("portugal");

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////

console.log("------------ Learn with sumit vai --------------");

const status = true;

console.log("task 1");

// promise defination
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (status) {
      resolve("taskk 2");
    } else {
      reject("failed");
    }
  }, 1000);
});

// call promise function
promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
console.log("task 3");

///////////////////////////////////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////

console.log("---------- Lear with Stack Learner ----------");

// make promise
//.............

// let pro = true;

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (pro) {
//       resolve("one");
//     } else {
//       reject("Error");
//     }
//   }, 1000);
// });

// p1.then((v) => {
//   console.log(v);
// });

//......................................

// const promi = false;
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (promi === true) {
//       resolve("Problem is solve");
//     } else {
//       reject("Something is wong with the problem");
//     }
//   }, 1000);
// });

// p1.then((v) => {
//   console.log(v);
// }).catch((v) => {
//   console.log(v);
// });

//......................................

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "One");
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Tow");
// });

// p1.then(function (v) {
//   console.log(v);
// });

// p2.then((v) => {
//   console.log(v);
// });

//...........................................

const exm = "Passed";

// promise defination

const promiseMethod = new Promise((resolve, reject) => {
  setTimeout(function () {
    if (exm === "Passed") {
      resolve("Take money and go the market and bying the your dream Phone");
    } else {
      reject(
        "You can't passed the exm that's why i don't give you any money for the PHONE....Go get back to your stady table"
      );
    }
  }, 1000);
});

// promise call
promiseMethod
  .then(function (v) {
    console.log(v);
  })
  .catch((v) => {
    console.log(v);
  });

//..........................................

const getJob = (expertProgrammer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (expertProgrammer === true) resolve("You can join our company ");
      else {
        reject("You can better try again leter");
      }
    }, 2000);
  });
};

getJob(false)
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log(e);
  });

console.log("-------------- Fetch ------------");

const BASE_URL = "http://jsonplaceholder.typicode.com";
fetch(`${BASE_URL}/users/1`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
