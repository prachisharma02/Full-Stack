const fetch = require("node-fetch");

// promises are mostly consumed not created so when we use then catch and fincally we are consuming it
// fetch("https://api.github.com/users/prachisharma02").then().catch().finally();
// earlier when promises were not there in core js
//still  async tasks were there like
// network flow db connection file operations
// so earlier there were libraries like Q and bluebird that provide promises to do async task
// this was before es6
// Then in es6 it was integrated so
// promises were not by default they were integrated

//Creating Promises by using variable

// const promiseone = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("promiseone created");
//     resolve();
//   }, 2000);
// });

// then is connected to resolve but we have to connect it explicitly
// by calling resolve function in promise
// promiseone.then(function () {
//   console.log("promises then resolved ");
// });
// promiseone.catch(function () {
//   console.log("promises catch resolved ");
// });

// without storing into a variable
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("promiseTwo created");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("promisesTWo  resolved ");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("data  created and sending");
//     resolve({ user: "prachi", email: "prachips2621@gmail.com" }); // in curlybraces we are passing object values
//   }, 1000);
// }).then(function (user) {
//   // here we are taking that object its like
//   // user={
//   //     user:"prachi",
//   //     email:"prachips2621@gmail.com"
//   // }
//   console.log(user);
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("PromiseFour Created");
//     let error = false;
//     if (!error) {
//       resolve({ user: "prachi", email: "prachips2621@gmail.com" });
//     } else {
//       reject("something went wrong");
//     }
//   }, 1000);
// })
//   .then(function (user) {
//     console.log(user);
//     return user.email;
//   })
//   .then(function (email) {
//     console.log(`value in THEN block : ${email}`);
//   })
//   .catch(function (msg) {
//     console.log(`catch block :${msg}`);
//   })
//   .finally(function () {
//     console.log("finally block : promise is either rejected or resolved");
//   });

// Async await : it waits for the function to gets completed then only moves furthir

// Async Await is mainly used when we dont want to move furthur until the request has not been completed
// like authentication until user data is not verified it will not move firthur or do any operation

// this is just another way of handling asynchronous task like network calls etc
// resolving promise using async await not then catch

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("PromiseFive Created");
//     let error = false;
//     if (!error) {
//       resolve({ user: "js", password: "javascript" });
//     } else {
//       reject(" ERROR : something went wrong");
//     }
//   }, 1000);
// });

// here there is no catch so we have to define try catch block
// async function getData() {
//   try {
//     const response = await promiseFive; // its an object not function promiseFive() --> wrong
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData();npm install node-fetch

// async function getusers() {
//   try {
//     // ReferenceError: fetch is not defined you have to install library npm install node-fetch

//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json(); // converting from string to json also takes time so thats why await
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getusers();

// fetch using promises
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    const data = response.json(); // converting from string to json also takes time so thats why await
    console.log(response); // this will give pending cuz conversion is taking time here

    return data;
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (e) {
    console.log(e);
  })
  .finally(function () {
    console.log(" resolved or rejected ");
  });
