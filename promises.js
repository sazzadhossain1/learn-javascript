const status = false;

console.log("task 1");

// promise defination
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (status) {
      resolve("taskk 2");
    } else {
      reject("failed");
    }
  }, 2000);
});

promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
console.log("task 3");
