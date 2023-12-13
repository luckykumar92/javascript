// let a = 10;
// const b = 20;
// var c = 30;

// {} is a scope function ,if else,

// var c = 300;
// let a = 300;

// if (true) {
//   let a = 10;
//   const b = 20;
//   //   var c = 30;
//   console.log("Inner: ", a);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// --------------------/--------------------

function one() {
  const username = "lucky";

  function two() {
    const websites = "youtube";
    console.log(username);
  }
  //   console.log(websites);//error
  two();
}

// one();

if (true) {
  const username = "lucky";
  if (username === "lucky") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(websites);
}
// console.log(username);

// ++++++++++++++++  Intereating +++++++++++++++++++
console.log(addone(5));
function addone(num) {
  return num + 1;
}

//
// addTwo(5); //error
const addTwo = function (num) {
  return num + 2;
};

addTwo(5);
