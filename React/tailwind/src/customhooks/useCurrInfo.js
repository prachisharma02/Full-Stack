import { useState } from "react";
import { useEffect } from "react";

function usecurrrency(currency) {
  const [data, setdata] = useState({}); // usestate k andar hmne empty rakha hai taaki agar hm koi loop lgay ispe to crash na kre ]
  //  so hmne yaha useeffect isily lagaya hai ki hme ek dusra function na bnanan pade ki pehle vo function call ho
  // fir fetch call ho
  // hm chahte hain ki jaise he ye component load ho fetch call hojay aur isi k liy to hm useefect use krte hain
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    ).then((res) => res.json().then((res) => setdata(res[currency])));
    console.log(data);
  }, [currency]); // dependency kyuki jab bhi hme call krvana hoga jab bhi currency change ho to ye method call ho
  return data;
}
export default usecurrrency;
