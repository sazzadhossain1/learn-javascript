const fruits = new Map();

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 300);

console.log(fruits);

const siz = fruits.size;
console.log(siz);
fruits.delete("apples");
console.log(fruits);

fruits.has("bananas");
console.log(fruits);
