// Learn With sumit vai //
//.....................//

// const getButton = document.querySelector("#get-button");
// const sendButton = document.querySelector("#send-button");

// const sendRequest = function (method, url, data) {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.responseType = "json";
//     xhr.send(data);

//     xhr.onload = function () {
//       resolve(xhr.response);
//     };
//   });
//   return promise;
// };

// const getDat = function () {
//   sendRequest(
//     "GET",
//     "https://jsonplaceholder.typicode.com/todos/1",
//     JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     })
//   ).then((responseData) => {
//     console.log(responseData);
//   });
// };

// const sendData = function () {
//   sendRequest("POST", "https://jsonplaceholder.typicode.com/posts").then(
//     (responseData) => {
//       console.log(responseData);
//     }
//   );
// };

// getButton.addEventListener("click", getDat);
// sendButton.addEventListener("click", sendData);

////////////////////////////////////////////////////////////
//-------------------------------------------------------//
//////////////////////////////////////////////////////////

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", "https://restcountries.com/v3.1/name/name");
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `<article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
        </div>
        </article>`;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData("portugal");
getCountryData("USA");
