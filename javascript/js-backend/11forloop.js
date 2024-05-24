//-----------------------FOR OF---------------------------
//IF WE ARE USING FOR OF THEN ELEMENTS WILL PRINT
var friends = ["prachi", "priyanka", "avinash"];
for (const key of friends) {
  // console.log(key);
}

//-----------------------FOR IN---------------------------
//IF WE ARE USING FOR OF THEN INDEX WILL PRINT
for (const key in friends) {
  // console.log(key);
}
//-----------------------FOR EACH---------------------------

// friends.forEach(function (element, ind, ar) {
//   console.log(element + "  " + ind + "  " + ar);
// });

//-------------arrow function in for each----------------
// friends.forEach( (index, element)=> {
//   console.log(element + "  " + index + "  ");
// });

// for each me pehla argument element dega Doosra argument index dega or Teesra argument array dega ub
// Chahe Tum Kuchh bhi Naam Rakhlo Lekin Pehla argument jo bhi pass kroge wo haamesha element of Array he
// Dega, array ki values second argument index Dega or 3rd argument poora arrray dega

//**********************MAPS AND LOOPING ON THEM ******************************* */
var myMap = new Map();
myMap.set("name", "prachi");
myMap.set("age", 21);
myMap.set("city", "delhi");
myMap.set("country", "india");
// console.log(myMap);

//---------------USING lOOP----------------------

// It will not work
for (const key in myMap) {
  console.log(key);
}
// It will  work
for (const key of myMap) {
  console.log(key);
}
//output:
//["name", "prachi"]
// [("age", 21)]
// [("city", "delhi")]
// [("country", "india")];

for (const key of myMap.key()) {
  console.log(key); // print only keeps and if we replace  myMap.key() with myMap.values() then values  will print
}
