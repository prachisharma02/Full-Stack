// class is present in js but actually not used it is present syntactically so that user who know about oops
// doesnt face any issue
//It was intoduced in es6
// js is a prototype based language

//OOPS is just a style of writing a programming paradigm

// so js is functional language
function customer(user, age, email) {
  this.user = user;
  this.age = age;
  this.email = email;
  return this;
}
const first = customer("prachi", 23, "ps@gmail.com");
const second = customer("khushi", 20, "ks@gmail.com");

// console.log(first); // it will also print khushi
// console.log(second); // here also khushi
// so this happens with functions : functions overwrites the data
// so we moved to classess

//  BUT BUT BUT IF WE PUT NEW KEYWORD IN ABOVE LINES THEN

const first1 = new customer("prachi", 23, "ps@gmail.com"); // new: this is called constructor function and also if you
const second2 = new customer("khushi", 20, "ks@gmail.com"); // dont write return in the function and  write new then also it wull print

// console.log(first1); // it will  print DIFFERENT OBJECT
// console.log(second2);

// *************************************************** NEW KEYWORD*******************************************************************
// new keyword creates an empty object that is called instance
// it calls the constructor function
// and all the arguments are injected in this keyword
//and passes or injects  the empty object as this

console.log(second2.constructor); // this will give constructor of customer

class c1 {
  constructor(nm, mks) {
    this.name = nm;
    this.marks = mks;
  }
  printinfo() {
    // console.log(`hello ${this.name}`);
    // console.log(`your score ${this.marks}`);
  }
}
let user = new c1("prachi", 50);
user.printinfo();
const a = {
  age: 20,
  getage: function () {
    return this.age;
  },
};
// console.log(a.getage());
