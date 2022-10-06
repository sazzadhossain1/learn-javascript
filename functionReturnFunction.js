const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// const greeterHey = greet("Hey");
// greeterHey("Sazzad");
// greeterHey("Solim");

greet("Hello")("Mr. Sazzad");
