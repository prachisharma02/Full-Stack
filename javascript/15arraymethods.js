// *****************INDEX METHOD******************
let months = ["june", "march", "dec"];
var friends = ["prachi", "priyanka", "avinash", "prachi", "prachi"];
// let index = friends.indexOf("prachi");
// let index1 = friends.indexOf("prachi", 2);
// let index2 = friends.indexOf("prach");

// let index3 = friends.lastIndexOf("prachi");
// let index4 = friends.lastIndexOf("prachi", 2);
// let index5 = friends.lastIndexOf("prac");

// console.log(index);
// console.log(index1);
// console.log(index2);
// console.log(index3);
// console.log(index4);
// console.log(index5);

// *****************LENGTH METHOD******************

//console.log(friends.length);

// ***********INCLUDE METHOD****************

// let include = friends.includes("prachi");
// console.log(include);
// let include1 = friends.includes("prachi", 4);
// console.log(include1);
// let include2 = friends.includes("prachi", 5);
// console.log(include2);

// *****************CHARAT METHOD******************

var prices = [100, 1500, 450, 50, 300];

// // ***********FIND METHOD****************

let price = (curprice) => {
  if (curprice > 100) return curprice;
};
const fineele = prices.find(price);
// console.log(fineele);
// const findeeleindex = prices.findIndex(price);
// console.log(findeeleindex);

//  ***************SORT METHOD************

// let sorting = months.sort();
// console.log(sorting);

// let monthsNu = [25, 67, 1, 6];
// let sortingn = monthsNu.sort();
// console.log(sortingn);

// **************PUSH METHOD*****************

// let add = months.push("jan");

// console.log(months);
// console.log(add);

// **************POP METHOD****************

// let del = months.pop();
// console.log(months);

// ***************UNSHIFT METHOD********************

// let unshift = months.unshift("april", "may");
// console.log(months);
// console.log(unshift);

// *********************SHIFT METHOD***************

// let shift = months.shift();
// console.log(months);
// console.log(shift);

// *******************SPLICE METHOD***************

// let splice = months.splice(1, 2, "hello");
// console.log(months);
// console.log(splice);

// let findmonth = months.indexOf("march");
// if (findmonth != -1) {
//   let monthssplice = months.splice(findmonth, 2);
//   console.log(months);
// } else console.log("no data");

// *******************flat METHOD***************
const any = [1, 2, [3, 4, 5], [3, 2], 45];
const uflat = any.flat(Infinity);
// console.log(uflat);
// console.log(any);

// *******************from METHOD***************

// console.log(Array.from("Prachi")); // converts string into array
// *******************isArray METHOD***************
// console.log(Array.isArray("Prachi")); // check it is array or not

//  ***************FILTER METHOD*************

// let filterf = (curprice) => {
//   if (curprice > 100) return curprice;
// };
// ----------------------NOW HERE IF WE DONT WANT TO USE RETURN THEN WE CAN ALSO WRITE----------------
let filterf = (curprice) => curprice > 100 && curprice < 1000;

const filterr = prices.filter(filterf);
// console.log(filterr);

// *******************MAP METHOD***************

// MAP METHOD JUST TRAVERSE THE ARRAY LIKE FOR EACH AND RETURNS NEW ARRAY

// let map = months.map((element, index, array) => {
//   return `${element} ${index} ${array}`;
// });
// console.log(map);
// // WITH MAP METHOD WE CAN USE MULTIPLE METHODS LIKE FILTER REDUCE BUT WITH FOR EACH WE CAnT
// let map1 = months.forEach((element, index, array) => {
//   return `${element} ${index} ${array}`;
// });
// console.log(map1);

//FIND SQUARE ROOT OF GIVEN ARRAY

var square = [25, 64, 81, 4, 16];
// var sqr = square.map((element) => {
//   return Math.sqrt(element);
// });
// console.log(sqr);

// ***********************REDUCE METHID**************

//REDUCE METHOD IS USED FOR CALCULATIONS OR REDUCING AN ARRAY INTO SINGLE VALUE
//acc is a initial value assigned in which we store the values that are reduced also
//acc=first value here in square its 25 so
//acc initial val = 25
//ele=64
// var sum = square.reduce((acc, ele) => {
//   console.log(`acc value is ${acc} and currvalue is ${ele}`);
//   return (acc += ele);
// });
// console.log(sum);

//but if we want to assign 0 as the accumulator value and curr value should start from first then

var sum = square.reduce((acc, ele) => {
  // console.log(`acc value is ${acc} and currvalue is ${ele}`);
  return (acc += ele);
}, 0); // assign 0 to acc

////******************************************************** CREATING A SUM OF SHOPPING CART USING REDUCE METHOD*******************************************************************
let cart = [
  {
    product: "milk",
    price: 200,
  },
  {
    product: "cofee",
    price: 500,
  },
  {
    product: "sugar",
    price: 300,
  },
  {
    product: "syrup",
    price: 1100,
  },
  {
    product: "mug",
    price: 2200,
  },
];

let total = cart.reduce((acc, item) => (acc += item.price), 0);
console.log(total);

//******************ALL THREE TOGETHER ***************

//var square = [25, 64, 81, 4, 16];
// var sqr = square
//   .map((element) => element * 2)
//   .filter((element) => element > 10)
//   .reduce((accumulator, element) => (accumulator += element));
// console.log(sqr);

// var sum = square.reduce((acc, ele) => {
//   return (acc += ele);
// }, 7); // adding 7 too
// console.log(sum);

// let array = [
//   ["prachi ", "khushi"],
//   ["garima", "joshi"],
//   ["priyanka", "roy"],
//   ["tanisha", "sharma"],
// ];
// let flatarr = array.reduce((acc, ele) => {
//   return acc.concat(ele);
// });
// 5;
// console.log(flatarr);
// let rand = Math.random(100);
// console.log(Math.floor(rand * 100));
//let num = parseInt();
//console.log(Math.floor(Math.random() * 10));
//console.log(Number.isNaN(123));
