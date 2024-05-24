//JSON.STRINGIFY TURNS A JAVASCRIPT OBJECT INTO JSON TEXT AND STORES THAT JSON TEXT IN A STRING

var obj1 = { key_1: "some text", key_2: true, key_3: 5 };

var obj2 = JSON.stringify(obj1);

console.log(obj2);

console.log(typeof obj2);

// JSON.PARSE TURNS A STRING OF JSON TEXT INTO A JAVASCRIPT OBJECT
var obj3 = JSON.parse(obj2);

console.log(obj3);
console.log(typeof obj3);
// "object"
