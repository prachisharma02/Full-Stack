// JAVASCRIPT STRINGS ARE USED FOR STORING AND MANIPULATING  TEXT
// STRING CAN BE INITIALIZED THROUGH STRING CONSTRUCTOR ALSO

//************STRING INITIALIZATION******************

// let NAME = new String("PRACHI"); // NOT MUCH USED
// console.log(NAME);
// let NAME1 = "PRACHI";
// console.log(NAME1);

//*******************LENGTH PROPERTY*****************************

// console.log(NAME1.length);

//**********************ESCAPE CHARACTER**********************
//TO USE DOUBLE QUOTES IN STRINGS WE USE ESCAPE CHARACTER

//let ESCAPE = "HELLO \"PRACHI\"";    //SAME
//let ESCAPE1 = 'HELLO "PRACHI"';     //OUTPUT

//console.log(ESCAPE1);

// *****************INDEX METHOD******************

let senetence = "hello how are you are";

// let index = senetence.indexOf("are", 11);
// let index1 = senetence.lastIndexOf("are");

// console.log(index);
// console.log(index1);

// *****************endsWith METHOD******************

// var a = senetence.endsWith("p");
// console.log(a);

// *****************SEARCH METHOD******************
//IT ONLY RETURNS THE POSITION

//let senetence = "hello how are you are";
// let search = senetence.search("are");
// console.log(search);

// *****************SLICE METHOD******************
//IT RETURNS THE EXTRACTED PART OF A STRING

// let slice = senetence.slice(1, 4); //DOES NOT TAKE END VALUE
// console.log(slice);
// let slice1 = senetence.slice(4, -2);
// console.log(slice1);

// let substring = senetence.substring(10); //DOES NOT TAKE END VALUE
// console.log(substring);
let substring1 = senetence.substring(10, -2); //DOES NOT TAKE END VALUE AND IF NEGETIVE VALUES ARE GIVEN IT WILL COUNT FROM 0TH POSITION
console.log(substring1);

// *****************REPLACE METHOD******************
// DOES NOT CHANGE ORIGINAL DATA

// let replace = senetence.replace("are", "is"); //ONLY REPLACE ONLY FIRST MATCH ARGUMENT NOT SECOND SO ONE ARE NOT SECOND ARE
// console.log(replace);

//EXTRCATING STRING CHARACTERS

// *****************CHARAT METHOD******************

//console.log(senetence.charAt(7));

// *****************CHARCODEAT METHOD******************

//THIS METHOD RETURNS A UTF-16 CODE
//AN INTEGER BETWEEN 0-65535
//UNICODE PROVIDE UNIQUE NUMBER  TO EVERY CHARACTER INDEPENDENT OF PLATFORM

//console.log(senetence.charCodeAt(7));

//to find the unicode character of last character
// let length = senetence.length;
// console.log(length);
// console.log(senetence.charCodeAt(20));

// *****************PROPERTY ACCESS METHOD******************
// IT JUST ACCRSS THE CHARACTER OF STRING LIKE ARRAY

// console.log(senetence[6]);

// *****************LOWER CASE METHOD******************

//console.log(senetence.toLowerCase());

// *****************UPPER CASE METHOD******************

//console.log(senetence.toUpperCase());

// *****************CONCATE METHOD******************

// let name = " prachi";
// console.log(senetence.concat(name));

// *****************TRIM METHOD******************
//REMOVES EXTRA SPACES

// let trim = "                    hi           ";
// console.log(trim.trim());

///////////////HOW TO CONVERT STRINGS INTO ARRAY//////////////

// *****************SPLIT METHOD******************

// let senetence = "hello how | are you are";

// console.log(senetence.split(",")); //SPLIT BY COMMA WHERE COMMA IS IT WILL TAKE IT AS NEW STRING
// console.log(senetence.split(" ")); //SPLIT BY SPACES WHERE SPACE IS IT WILL TAKE IT AS NEW STRING
// console.log(senetence.split("|")); //SPLIT BY OR OPERATOR WHERE OR OPERATOR IS IT WILL TAKE IT AS NEW STRING

///////////////DATE TIME OBJECT//////////////
// IT WILL RETURN DATE FROM 1 JAN 1970

// let date = new Date();
// console.log(date);
//1. console.log(new Date());
//2. console.log(new Date().toString());
// console.log(new Date().toLocaleString());

// 3.console.log(Date.now()); //IT WILL RETURN MILISECONDS from 1970
//4. 7 ARGUMENTS CONSTRUCTOR FOR DATE INITIALIZED BY CONSTRUCTOR
//MINIMUM THERE SHOULD BE ATLEAST TWO ARGUMENTS MOTHS IS COMPULSORY
// let d = new Date(2021, 7, 20, 10, 30, 30);
// console.log(d);

//////////////////////  GETTERS AND SETTERS /////////////////////

//******************GETTERS*********************

////******************TIME************//////

// console.log(date.getHours());
// console.log(date.getTime());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());

// ////******************DATE************//////

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getDate());

//****************SETTERS******************************

////******************TIME************//////

// console.log(date.setTime(12));
// console.log(date.setMilliseconds(5));
// console.log(date.setMinutes(20));
// console.log(date.setHours(20));
// console.log(date.toLocaleString());

// console.log(date.setFullYear(2021));
// console.log(date.setMonth(5));
// console.log(date.setDate(20));
// console.log(date.toLocaleString());

//**************** MATH OBJECT ***************************

// console.log(Math.PI);
// console.log(Math.round(25.333));
// console.log(Math.round(25.555));
// console.log(Math.round(25.666));

// console.log(Math.ceil(-54.3745));
// console.log(Math.floor(-54.6745));
// console.log(Math.trunc(54.6745));
// console.log(Math.trunc(-54.3745));
// console.log(Math.min(5, 3));
// console.log(Math.max(5, 3));
// console.log(Math.sqrt(25));
// console.log(Math.abs(-21));
// console.log(Math.abs(4 - 21)); //CONVERTS NEGITIVE TO POSITIVE
// console.log(Math.pow(5, 3));
// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log(Math.floor(Math.random()));
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.trunc(-99.09876)); //IT RETURNS ONLY INTEGRR PART NOT DECIMAL PART

//QUES;
// let friends = "prachi";
// let arr = friends.split("");
// console.log(arr);
// arr[3] = "p";
// console.log(arr);
// let j = arr.join("");
// console.log(j);
