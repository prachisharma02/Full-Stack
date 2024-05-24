var leapyr = 2024;
if (leapyr % 4 == 0 && leapyr % 100 != 0) {
  // console.log(leapyr + " is leap year");
} else if (leapyr % 400 == 0 && leapyr % 100 != 0) {
  // console.log(leapyr + " is leap year");
} else {
  // console.log(leapyr + " is not a  leap year");
}

//--------------------------coalescing operator--------------
let val1 = 10 ?? 20;
console.log(val1); //10
let val2 = null ?? 10;
console.log(val2); //10
let val3 = undefined ?? 20;
console.log(val3); //20
