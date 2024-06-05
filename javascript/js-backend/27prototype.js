//prototypal behaviour of js: js will not stop finding the value of any variable or object
//if it not directly available then it will move to outer layer to find the value
//until it gets the null value

//first thing we know that everything in js is object but but how??

//js mechanism is if there is arrays ,string or functions then they are arrays string and functions also they are
//object as well

// so for example

function sum(num) {
  this.num = num + 1;
  return num;
}

sum.nums = 3;
console.log(sum(3)); //4
console.log(sum.nums); //3 object behaviour
console.log(sum.prototype); //{}

// so if you want to check the prototypal behaviour of js

// click on console write array = { 1, 2}
// and log it then you will see all the array methods plus in the end a prototype object which will provide you
// all the object properties as well
// then in object there will be setter and getters object in that also objects
// so this is how js works called as prototypal behaviour and also called as prototpe inheritence as
// it will take all the properties of its grandparents
//same as with functions or strings

// more prototyple behaviour
// you can inject your own methods just like array methods (splice ,length)

sum.prototype.increase = function () {
  return this.num++;
};

const inc = new sum(3); // if we will not put new here then error as there should be reference to the existing function that we have made chnges to that existing function
console.log(inc.increase());
console.log(inc.num);

// some IMPORTANT concepts of NEW keyword

// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
// This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to
// the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this,
// the newly created object, to be the intended return value. The new object is returned: After the constructor function
// has been called, if it doesn't return a non-primitive value(object, array, function, etc.), the newly created object
// is returned

// more example

function createuser(username, password) {
  this.username = username;
  this.password = password;
}
createuser.prototype.addemail = function (email) {
  this.email = email;
  return email;
};
createuser.prototype.printme = function () {
  console.log(
    `username is ${this.username} amd password is ${this.password} and email is ${this.email}`
  );
};

const p = new createuser("prachi", 123);
p.addemail("prachi@example.com");
p.printme();

// so by using prototype we  can inject vsrious other methods

// we can also do like giving methods to object so it will be available to everything linked to object
// like;

Object.prototype.sayname = function () {
  console.log("say prachi");
};

// take anything
createuser.sayname(); // so it is available to all as functions--->objects as object is parent of all

// prototyple inheritence

const office = {
  start: true,
};
const employye = {
  working: true,
};
// object.setPrototypeOf(office, employye);

// now lets create a own method to find true length
String.prototype.truelength = function () {
  console.log(`${this}`);
  console.log(`${this.trim().length}`);
};

"prachi              ".truelength(); // it will give 6
