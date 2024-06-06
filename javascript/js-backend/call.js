function calling(params) {
  console.log("being called");
}
function why(params) {
  calling();
}
why();
// above code will work

// but when this comes into picture then execution context comes into play

// so now here what is happening that
// we have thought we will give user and pass and username through some other function
// but username is not beign set but why?

//Answer: The reason why username is not being set is due to the way this context works in JavaScript.
//        In the details function, we are calling setuser ( a separate function.)
//        When setuser is called, its this context is not bound to the details object.Instead, it defaults to the
//        global object(usually the window object in a browser or the global object in a Node.js environment).

//        So, when setuser sets this.username = username, it's actually setting a property on the global object,
//        not on the details object.

// so to connect setuser with details we use this and call
function setuser(username) {
  this.username = username;
}
function details(user, pass, username) {
  this.user = user;
  this.pass = pass;
  // setuser(username);
  setuser.call(this, username); // hamara current execution context(this of details) kisi aur ko(setuser k this ko) pass krrna
}

console.log(new details("ps", 123, "prachi"));
