import React, { useEffect, useState } from "react";

function Github() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/prachisharma02")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      });
  }, []);
  return (
    <div>
      <h1>Github Followers {data.followers}</h1>
      <img src={data.avatar_url} alt="" />
    </div>
  );
}

export default Github;
