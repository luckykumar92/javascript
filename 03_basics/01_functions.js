function sayMyname() {
  console.log("L");
  console.log("u");
  console.log("c");
  console.log("k");
  console.log("y");
}

// sayMyname();

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);

// }

function addTwoNumbers(num1, num2) {
  //   let result = num1 + num2;
  //   return result;
  return num1 + num2;
}

const result = addTwoNumbers(7, 6);
// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  // if (username === undefined) {
  if (!username) {
    console.log("Please enter username");
    return; //if we return here then function will exit
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Lucky"));
// console.log(loginUserMessage());

// ----------------/--------------------

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500)); //[500]

const user = {
  username: "lucky",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
