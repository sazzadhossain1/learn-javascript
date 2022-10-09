const runOnce = function () {
  console.log("This will never run again");
};

runOnce();

(function () {
  console.log("This will never run again");
  const isPrivate = 23;
  console.log(isPrivate);
})();

// console.log(isPrivate); // ---> aikhan theke aigulo access kora jabe na //

const fun = () => {
  console.log("My name is tomal");
};

fun();

(() => {
  console.log("My name is Yeasin");
})();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate); // ---> aita aikhantheke access kora jabe na......ai varaable ke access korte hole block er vitor theke access korte hobe.....
// console.log(notPrivate); //-----> aitake access kora jabe karon (var)-(variable) ti global vabe kaj kortese.......tai ati ke block er bahire theke access kora jabe....
