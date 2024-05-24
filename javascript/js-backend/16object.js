//*********************JAVASCRIPT OBJECT****************************

let biodata = {
  name: {
    fname: "prachi",
    lname: "sharma",
  },
  age: 22,
  data() {
    //console.log("extrovert");
  },
};
//console.log(biodata.name);

//-----------SYMBOLS USING INSIDE OBJECT--------------------

const as = Symbol("hello");
let s = {
  [as]: "hello", // using symbols
  n: "p",
};
// console.log(s);
// console.log(s[as]);

//*********************Freeze KEYWORD****************************
Object.freeze(as);
s[as] = "hi";
// console.log([as]);
// it disallows changing the values

//*********************ASSIGN KEYWORD****************************
obj1 = { 1: 2, 3: 4 };
obj2 = { a: 3, b: 6 };
ob3 = Object.assign(obj1, obj2);
// console.log(ob3); //basically concatinating
//*********************THIS KEYWORD****************************

let obj = {
  fname: "khushi",

  thisss() {
    //console.log(this);
  },
};
obj.thisss();

//*********************OBJECT DESTRUCTURING****************************
let biodata1 = {
  fname: "prachi",
  lname: "sharma",
  age: 22,
};
// let { first, last, age } = biodata1;
// OR
var { fname: first, lname: last } = biodata1;
//console.log(biodata1.fname);
//console.log(last); // By object destructuring we can directly access the values by any variable
// we need not to access it by first arrayName.valuesName

//----------------------------IT IS USED IN REACT AS WELL------------------------------------------------------
//EXAMPLE:
const navbar = ({ company }) => {}; //anything insidelike this curly braces is destructuring
navbar((company = "pra"));

//*********************DYNAMIC PROPERTIES****************************

let name1 = "p";
let age1 = 22;
let bio1 = {
  name1: "hi", // yaha key name1 he h
  //  20 + 2: "is my age", //it will give you error
};
// console.log(bio1);
//DYNAMICALLY ACCESSING THE PROPERTIES by using []// symbols

let name2 = "p";
let age2 = 22;
let bio2 = {
  name2: "p",
  [name2]: "hi", // here vo directly name2 ki value ko key bna rha hai
  [20 + 2]: "is my age", // aur yaha hm calculation bhi perform krsakte hain just by putting square brackets in both
};
// console.log(bio2.name2); //p

// console.log(bio2[name2]); //hi

let name = "prachi";
let age = 22;
let details = {
  name3: "khushi",
  age,
};
//console.log(details);

//*********************SPREAD OPERATOR****************************
// TO NOT TO REPEAT ALREADY DECLARED  ELEMENTS

let color = ["pink", "red"];
let favcolor = [...color, "yellow"];
//console.log(favcolor);

/*********************REST OPERATOR****************************/
// USED FOR MULTIPLE PARAMETERS

function agei(...a) {
  ////console.log(a);
}
agei(56, 78, 90, "prachi");

/*********************ITERATING OVER OBJECTS****************************/

let nam = "prachi";
let agee = 22;
let detailss = {
  name3: "khushi",
  age: 89,
};
// for (let x of detailss) {
//   console.log(x); //not iterable
// }
for (let x in detailss) {
  // console.log(x); // it will only give keys
  console.log(x, detailss[x]); //now values also
}
