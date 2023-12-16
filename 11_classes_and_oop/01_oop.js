const user = {
  username: "lucky",
  loginCount: 8,
  signedIn: true,

  getUserDeatails: function () {
    // console.log("Got user details from database");
    // return "Got user details from database";

    console.log(`Username: ${this.username}`);
    console.log(this.getUserDeatails);
  },
};

// console.log(user.username);
// // console.log(user.getUserDeatails());
// console.log(this);

// ******Constructor***********

// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  //   return this;
}

const user1 = new User("lucky", 10, true);
const user2 = new User("Sahil", 12, true);
// console.log(user1.constructor);
// console.log(user2);
