const loadData = function () {
  const xhr = new XMLHttpRequest();

  // What to do when response arrives
  xhr.onload = function () {
    const container = document.getElementById("demo");
    demo.innerHTML = xhr.responseText;
  };

  // Preparerequest - methods: GET, POST, PARCH, DELETE, OPTIONS
  xhr.open("GET", "./sumitVaiAjax.text");

  // Send request
  xhr.send();
};
