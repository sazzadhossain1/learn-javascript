const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// const greeterHey = greet("Hey");
// greeterHey("Sazzad");
// greeterHey("Solim");

greet("Hello")("Mr. Sazzad");

const greet1 = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

greet1("Hello")("Mr. Yeasin");

const name1 = ["Sazzad", "Hossain", "Tomal"];

const fun = function (num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "Sazzad") {
      console.log(num[i]);
    }
    return function (text) {
      const comment = num[i] + " " + text;
      console.log(comment);
    };
  }
};

fun(name1)("How are you ?");
