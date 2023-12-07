const accountId = 144553;
let accountEmail = "email@gmail.com";
var accountPassword = "12345";
accountCity = "Patna";
let accountState;

// accountId = 2;  //not allowed

accountEmail = "abc@gmail.com";
accountPassword = "234567890";
accountCity = "Jalandhar";

console.log(accountId);

/*
Prefer not to use vasr 
because of issue in block scope and functional scope
*/

console.log([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState, //undefined
]);
