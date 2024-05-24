let score = 33;
let num = "33";
let nums = "23abc";
// console.log(typeof score); //numbr
// console.log(typeof num); // number
// console.log(typeof nums); //string

// issues in javascript
let scores = Number(nums); //23abc =nan cant converted into number
// console.log(scores); //nan
// console.log(typeof scores); //number

//string to number
let num2 = Number(num);
// console.log(num2); //33
// console.log(typeof num2); //number

//-------type of null is object-----------
let value = null;
// console.log(typeof value);

let a = "bfdn";
let bool = Boolean(a);
// console.log(bool);

let x = 3;
let y = x++;
let z = x++;
// console.log(x, y); // 5,3
// console.log(z); //4

//-----------comparison----------------
// console.log("2" > 1); //true
// console.log("02" > 1); //true
console.log(2 > "2"); // Output: true

// If one value is null and the other is 0, no coercion occurs, and the comparison is false.
// null is a special value that represents the intentional absence of any object value.0 is a number
// console.log(null > 0); //f
// console.log(null == 0); //f
// console.log(null >= 0); //t   // comparison converts null to number treating it as 0

// console.log(null == 0); // Output: false
// console.log(null === 0); // Output: false
// console.log(null == undefined); // Output: true

// all three false
// console.log(0 == undefined);
// console.log(0 >= undefined);
// console.log(0 > undefined);
