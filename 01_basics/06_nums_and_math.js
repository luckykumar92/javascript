const score = 400;
// console.log(score); //400

const balance = new Number(100);
// console.log(balance); //[Number: 100]

// console.log(balance.toString().length); //first it will convert to string then find the length
// console.log(balance.toFixed(4)); //100.0000

const otherNumber = 23.8775;
// console.log(otherNumber.toPrecision(3)); //23.9 roundoff till 3 digits

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); //1,000,000
// console.log(hundreds.toLocaleString("en-IN")); //10,00,000(Indian format)

//********************* Maths **************************
// console.log(Math);
// console.log(Math.abs(-4)); //4
// console.log(Math.abs(4)); //4
// console.log(Math.round(4.3)); //4
// console.log(Math.round(4.7)); //5
// console.log(Math.ceil(4.1)); //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(4, 5, 6, 3, 65, 8)); //3
// console.log(Math.max(4, 5, 6, 3, 65, 8)); //65

console.log(Math.random()); //lie between 0 to 1
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
