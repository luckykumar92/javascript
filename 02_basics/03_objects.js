// singleton constructor se banta hai
// object literal se singleton nhi banega
// Object.create

// ***********object literal***********

const mySym = Symbol("Key1");

const JsUser = {
  name: "Lucky", //"name" system understand as string
  "full name": "Lucky Kumar",
  location: "Jalandhar",
  email: "lucky@email.com",
  year: 2023,
  isLoggeedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
  [mySym]: "mykey1",
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// // console.log(JsUser.full name);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); //mykey1

JsUser.email = "lucky@gmail.com";
// Object.freeze(JsUser); //Used for make unchangeble object
JsUser.email = "lucky@youtube.com";

// console.log(JsUser);
// {
//   name: 'Lucky',
//   'full name': 'Lucky Kumar',
//   location: 'Jalandhar',
//   email: 'lucky@gmail.com',
//   year: 2023,
//   isLoggeedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(Key1)]: 'mykey1'
// }

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greeting2 = function () {
  console.log(`Hello JS user, ${this.name}`);
};

JsUser.greeting();
JsUser.greeting2();
