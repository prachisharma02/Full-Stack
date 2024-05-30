// let promise = new Promise((resolve, reject) => {
//   // promise is class jiska hmne yaha object baya hai and resolve and reject are function also can be a callback function cuz passed inside promise function
//   console.log("callback hell solution");
//   resolve();
//   reject();
// });
// resolve and reject internally js he handle krta hai vhi create krta hai

// const getpromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("get promise,done");
//     // resolve("success");
//     reject("error");
//   });
// };
// const promises = getpromise();
// promises.then((res) => {
//   console.log("success", res);
// });
// promises.catch((err) => {
//   console.log("failure", err);
// });
//promise
function getdata(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", id);
      resolve(200);
    }, 2000);
  });
}
//  promise chhaining jab hme ek k baad ek function chhiy hota jaise instagram me pehle hme check krvana hai ki
//  vo username exist krta hai ki nhi tabhi password verify ho chaining ek k baad ek to hm vha then use krte hain
//  multiple function me but ye kabhi complex hojata hai syntax me to
//  asynch wait aaya ye apne app kaam krta hia ek k baad ek asynch btata hai ki asynchronous operation h aur
//await aur sare asynch function ko pause krdeta hai jav = btk pehle wala ka promise resolve na ho

console.log("fetching data1");
getdata(1)
  .then((res) => {
    console.log("getting data 2");
    return getdata(2);
  })
  .then((res) => {
    console.log("getting data 3");
    return getdata(3);
  })
  .then((res) => {
    console.log("hello");
  });

// similar to above promise chaining by asynch await
// async function getalldata() {
//   await getdata(1);
//   await getdata(2);
//   await getdata(3);
// }
// getalldata();
//async await apne app ek promise return krti hai hmesha hme promise nhi bnnaa padta hai

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(100);
//     }, 2000);
//   });
// }
// async function getweatherdata() {
//   await api();
//   await api();
// }
// getweatherdata();
