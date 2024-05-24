import React, { useState } from "react";

function Comp1(userSpecification) {
  const [user, currentuser] = useState(userSpecification);
  return (
    <div>
      <h1>Hello to {user.userProp} in comp1</h1>
    </div>
  );
}
function Comp2(userInformation) {
  return (
    <div>
      <h1>Hello in comp2 {userInformation.userattribute}</h1>
      <comp1 userProp={userInformation.userattribute} />
    </div>
  );
}
function Comp3(userInfo) {
  return (
    <div>
      <h1>Hello in comp3 {userInfo.userattb}</h1>
      <comp1 userattribute={userInfo.userattb} />
    </div>
  );
}
export default Comp3;
