// *****************Asynchronous- CALLBACK******************

// function write(a, b) {
//   console.log(a, b, a + b);
// }
// function print(a, b, prints) {
//   prints(a, b);
// }
// print("prachi", "sharma", write); // passed without any paranthesis unless it will get executed there only
function a() {
  console.log("function1");
}
// setTimeout(() => {
//   console.log("this is timeout");
// }, 3000); // ye 3s k liy function hmara webapi k andar chala gya
// a();

// setTimeout(() => {
//   a();
// }, 4000);
// console.log("abc");
//  WEBAPI : webapi k andar api calls aur timer based event hoti hai to jo execution code 3s k ya 4 s k
//wait krvata hai vo code webapi me chala jata hai aur vha agar timeout hai to timer start krdeta
//jb bhi koi func call hota hai to sare func ka apna ek execution context hota hai aur agar koi func
//webapi ka part hai fir vo webapi me chala jata hai fir jb sare func ka execution context khtm hojata
//hai to jo webapi vala hai vo message queue me chala jata hai aur jab timer khtm hota hai to apne
// execution context me jata hai

// *****************CALLBACK HELL******************
// WHEN MULTIPLE CALLBACKS ARE CALEED INSIDE ONE ANOTHER THEN IT IS CALLED CALLBACK HELL SOMETIME IT BECOMES
//PROBLEMATIC IN VARIOUS SITUATIONS LIKE

setTimeout(() => {
  setTimeout(() => {
    console.log("function2");
    setTimeout(() => {
      console.log("function3");
      setTimeout(() => {
        console.log("function4");
        setTimeout(() => {
          console.log("function5");
          setTimeout(() => {
            a(); // so this function took 24 sec
            console.log("function6");
          }, 4000);
        }, 4000);
      }, 4000);
    }, 4000);
  }, 4000);
}, 4000);
setTimeout();
