//Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23); //(year,month(start from 0),date)
// console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0, 23, 5, 6, 45); //(year,month(start from 0),date,hour,minute,second)
// console.log(myCreatedDate1.toLocaleString());

// let myCreatedDate2 = new Date("2023-01-14");
let myCreatedDate2 = new Date("01-14-2023");
// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate2.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());

newDate.toLocaleString("default", {
  weekday: "long",
});
