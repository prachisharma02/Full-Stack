//---------------------------NORMAL FUNCTION-------------------------------

// function add(e, d) {
//   a = 20;
//   b = 30;
//   c = e + d;
//   return c;
// }
// var add = add(24, 78);
// console.log(add);

//--------------------------------FUNCTION EXPRESSION---------------------------------
// const as = function (a, b) {
//   return a + b;
// };
// asp = as(3, 5);
// console.log(asp);

function factorial() {
  let fact = 1;
  let a = [1, 3, 4, 5];
  for (let k in a) {
    for (let i = 1; i <= a[k]; i++) fact = fact * i;
  }
  // console.log(fact);
}

factorial();

//----------------------------USE OF "THIS" IN FUNCTIONS---------------------------------

//WE CANT USE THIS IS FUNCTIONS THIS IS ONLY USED IN OBJECTS
//EX:

// function nice() {
//   console.log(this); // it will print all the things
// }
// nice();

// function nices() {
//   let user = "pra";
//   console.log(this.user); // it will print undefined
// }
// nices();

//but if we use with objects

// IT IS A OBJECT SO WE WILL GET PRA WHEN WE USE THIS.NAME
let user = {
  name: "pra",
  get: function () {
    console.log(this.name); // it will print undefined
  },
};
// console.log(user.get());

//----------------------------------ARROW FUNCTION----------------------------------------------

// const sum = (a, b) => {
//   r = a + b;
//   return r;
// };
// var add = sum(14, 20);
// console.log(add);

// IF WE USE ARROW FUNCTIONS "THIS" WILL also not WORK

//1st way of writing arrow function
// const nices = () => {
//   let user = "pra";
//   console.log(this.user); // it will print undefined
// };
// nices();

//2nd way
const sum = (n1, n2) => n1 + n2;
// console.log(sum(2, 3)); // 5

const sumss = (n1, n2) => {
  return n1 + n2; // explicit return
}; // and if curly braces then  require return
// console.log(sumss(2, 3)); // 5

//3rd way
// const sums = (n1, n2) => (n1 + n2); // adding round braces instead of curly called as implicit return
// console.log(sums(2, 3)); // 5

//now if we want to return object istead of primitive values then we require curly braces
//means:
const obj = (n1, n2) => ({ user: "prachi" });
// console.log(obj());

//---------------------------------IIFE(immediately invoked function)-------------------------------------------
(function a() {
  console.log("hi");
})();
// so here if we will not put semicolon then error cuz it will not be able to know the execution context
//so it is mandatory to put semicolon if we are using more than one iife back to back
(function ab() {
  console.log("hi");
})();

//------ARROW FUNCTION IN IIFE----------------

((name) => {
  console.log(name);
})("oghd");
