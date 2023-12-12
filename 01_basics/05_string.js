const name = "Lucky";
const repoCount = 10;

console.log(name + repoCount); //Lucky10

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Lucky");

console.log(gameName[0]); //L
console.log(name[0]); //L
console.log(gameName.__proto__);

console.log(gameName.length); //5

console.log(gameName.toUpperCase()); //LUCKY
console.log(gameName.charAt(3)); //k
console.log(gameName.indexOf("u")); //1

const gameName2 = new String("Lucky-Kumar");
const newString = gameName2.substring(0, 4);
console.log(newString); //Luck

const anotherString = gameName2.slice(-9, 4);
console.log(anotherString); //ck

const newString1 = "    Lucky     ";
console.log(newString1); //    Lucky
console.log(newString1.trim()); //Lucky

// const url = "https://lucky.com/lucky kumar";
const url = "https://lucky.com/lucky%20kumar";

console.log(url.replace("%20", "-")); //https://lucky.com/lucky-kumar
console.log(url.includes("lucky")); //true
console.log(url.includes("sundar")); //false

let gameName3 = new String("Lucky-Kumar-zxc");
console.log(gameName3.split("-")); //[ 'Lucky', 'Kumar', 'zxc' ]

//---------Go to console look at string type then go to
//  mdn docs and read all the string type, eg: trim, replace....
