let myName = "Lucky       ";

// function truelength() {}

// console.log(myName.length);
// console.log(myName.trim().length);

// console.log(myName.truelength);

// ------------------------------
let myHeros = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.lucky = function () {
  console.log(`lucky is present in all object`);
};

Array.prototype.heyLucky = function () {
  console.log(`Lucky says Hello`);
};

// heroPower.lucky();
// myHeros.lucky();
// heroPower.heyLucky();
// myHeros.heyLucky();

//inheritance

const User = {
  name: "lucky",
  email: "lucky@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssingment: "JS assingment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

// -------------------------------------------

let anotherUsername = "Lucky Kumar         ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length of ${this} is ${this.trim().length}`);
};

anotherUsername.trueLength();
"werty        ".trueLength(); //5
