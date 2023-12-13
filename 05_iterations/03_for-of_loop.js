// *******for of*******

// ["", "", ""];
// [{}, {}, {}];

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "Hello World";

for (const i of greetings) {
  //   console.log(`Each char is ${i}`);
}

// *******Maps*******
const map = new Map();
map.set("IN", "India");
map.set("US", "USA");

// console.log(map);

for (const key of map) {
  //   console.log(key);
  //["IN", "India"]
  // [("US", "USA")];
}

for (const [key, value] of map) {
  // console.log(key);
  // IN;
  // US;
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//   console.log(key);
// }

