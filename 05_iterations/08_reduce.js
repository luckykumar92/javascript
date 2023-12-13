const myNums = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = myNums.reduce(function (accumulator, currentValue) {
//   console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
//   return accumulator + currentValue;
// }, initialValue);

const initialValue = 0;
const sumWithInitial = myNums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

// console.log(sumWithInitial); //10

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const cartValue = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(cartValue); //22996
