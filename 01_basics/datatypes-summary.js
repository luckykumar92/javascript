//*********** Primtive
// 7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100;
const scoreValue = 100.9;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId); //false

const bigNumber = 345678900987654365789n;

//*********** Reference (Non primitive)

// Array, Objects, Functions;

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "Lucky",
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof bigNumber); //bigint
console.log(typeof heros); //object
console.log(typeof myObj); //object
console.log(typeof myFunction); //function


// -------------------------------------------------------

// Stack(Primitive), Heap(Non - Primitive);

let myName = "Lucky";
let fullName = myName;
fullName = "Lucky Kumar";

console.log(myName); //Lucky
console.log(fullName); //Lucky Kumar

let user1 = {
  email: "user@gmail.com",
  upi: "user@ybl",
};

let user2 = user1;

user2.email = "email@gmail.com";

console.log(user1.email); //email@gmail.com
console.log(user2.email); //email@gmail.com
