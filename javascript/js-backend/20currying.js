// *****************CURRYING******************

function sum(a) {
  console.log(a++);
  return function (b) {
    console.log(a * b);
    return function (c) {
      console.log(a + c - b);
    };
  };
}
sum(4)(34)(45);
//it is a technique to evalute functions with multiple argument in a sequence of function with single
//argument as we can see we can evalute each func in a different way which cant be possible if we have done
// like sum(4,6,7)
