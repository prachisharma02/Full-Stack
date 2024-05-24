// NEW FEATURES WAS INTRODUCED
/*********************Object.values****************************/
// INSTEAD OF USING LOOPS WE CAN DIRECTLY ACCESS IT BY USING "Object.values " KEYWORD

// let arr = [45, "a", "b"];
// console.log(Object.values(arr));

/*********************HOISTING****************************/

// console.log(myname); // it will not give you error just undefined
// var myname;
// but if let is used instead of var error it was introduced in ES6

// console.log(namee); // error
// namee = "ps";

/*********************LEXICAL SCOPING****************************/
//inner fuction can get access to var in outer func but vice versa is not true

// function lexical() {
//   let a = 90;
//   function inside() {
//     let b = 99;
//     console.log(a); // but can acess outside func var
//     console.log(b);
//   }
//   inside();
//   console.log(a);
//   console.log(b); // cant access inside varibale
// }
// lexical();
/*********************CLOSURE****************************/
// SAME AS LEXICAL SCOPING BUT WITH A SLIGHT DIFFERENCE

function lexical() {
  let a = 90;
  function inside() {
    let b = 99;
    console.log(a); // but can acess outside func var
    console.log(b);
  }
  // return inside;  // we will not get anything cuz we have returned inner function as well as outer function
  return inside(); // we will get the values because in return we are calling
}
lexical(); // so in closures when outer function is returned how still inner function is able to get
//outer func variable this is called closure which depends on lexical scoping inner function
//creates a closure in which it stores outer function var
