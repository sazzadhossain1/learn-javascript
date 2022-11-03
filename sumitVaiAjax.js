// const loadData = function () {
//   const xhr = new XMLHttpRequest();

//   // What to do when response arrives
//   xhr.onload = function () {
//     const container = document.getElementById("demo");
//     demo.innerHTML = xhr.responseText;
//   };

//   // Preparerequest - methods: GET, POST, PARCH, DELETE, OPTIONS
//   xhr.open("GET", "./sumitVaiAjax.text");

//   // Send request
//   xhr.send();
// };

///////////////////////////////////////////////

// const loadData = function () {
//   const xhr = new XMLHttpRequest();

//   xhr.onload = function () {
//     const container = document.getElementById("demo");
//     demo.innerHTML = xhr.responseText;
//   };
//   xhr.open("GET", "./sumitVaiAjax.text");
//   xhr.send();
// };

/////////////////////////////////////////////////////

// arrow function
//...............

// const loadData = () => {
//   const xhr = new XMLHttpRequest();
//   xhr.onload = function () {
//     const container = document.querySelector("#demo");
//     demo.innerHTML = xhr.responseText;
//   };
//   xhr.open("GET", "./sumitVaiAjax.text");
//   xhr.send();
// };
////////////////////////////////////////////////////////////

// const loadData = function () {
//   const xhr = new XMLHttpRequest();

//   xhr.onload = function () {
//     const container = document.querySelector("#demo");
//     demo.innerHTML = xhr.responseText;
//   };

//   xhr.open("GET", "./sumitVaiAjax.text");
//   xhr.send();
// };

//////////////////////////////////////////////////////

// const loadData = () => {
//   const xhr = new XMLHttpRequest();

//   xhr.onload = () => {
//     const container = document.querySelector("#demo");
//     demo.innerHTML = xhr.responseText;
//   };
//   xhr.open("GET", "./sumitVaiAjax.text");
//   xhr.send();
// };

//////////////////////////////////////////////////////

// const loadData = function () {
//   const xhr = new XMLHttpRequest();

//   xhr.onload = () => {
//     const container = document.querySelector("#demo");
//     demo.innerHTML = xhr.responseText;
//   };

//   xhr.open("GET", "./sumitVaiAjax.text");
//   xhr.send();
// };

//////////////////////////////////////////

// const getButton = document
//   .querySelector("#btn")
//   .addEventListener("click", function () {
//     const xhr = new XMLHttpRequest();
//     xhr.onload = () => {
//       const container = document.querySelector("#demo");
//       demo.innerHTML = xhr.responseText;
//     };
//     xhr.open("GET", "./sumitVaiAjax.text");
//     xhr.send();
//   });

///////////////////////////////////////////////////

// const getButton = document.getElementById("btn");

// getButton.addEventListener("click", () => {
//   const xhr = new XMLHttpRequest();

//   xhr.onload = () => {
//     const container = document.querySelector("#demo");
//     demo.innerHTML = xhr.responseText;
//   };

//   xhr.open("GET", "./sumitVaiAjax.text");
//   xhr.send();
// });

//////////////////////////////////////////////////////

// function loadData() {
//   const xhr = new XMLHttpRequest();

//   xhr.onload = () => {
//     const container = document.getElementById("demo");
//     demo.innerHTML = xhr.responseText;
//   };
//   xhr.open("GET", "./sumitVaiAjax.text");
//   xhr.send();
// }

////////////////////////////////////////////////////////

// const loadData = () => {
//   const xhr = new XMLHttpRequest();

//   xhr.onload = () => {
//     const container = document.querySelector("#demo");
//     demo.innerHTML = xhr.responseText;
//   };

//   xhr.open("GET", "./sumitVaiAjax.text");
//   xhr.send();
// };
///////////////////////////////////////////////////////////

const loadData = function () {
  // create a new request
  const xhr = new XMLHttpRequest();

  // what  to do when response arrives
  xhr.onload = function () {
    const container = document.querySelector("#demo");
    demo.innerHTML = xhr.responseText;
  };

  // prepare request - methods: GET, Post, put, patch, delete,options
  xhr.open("GET", "./sumitVaiAjax.text");

  // send request
  xhr.send();
};
