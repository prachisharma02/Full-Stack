import { useEffect, useState } from "react";
import Currency from "./currency";
import usecurrrency from "../customhooks/useCurrInfo";

function IndexCurr() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = usecurrrency(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  useEffect(() => {
    convert();
  }, [from, to, amount]);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="">
      <div className="flex p-6 font-mono">
        <div className="flex-none w-48 mb-10 relative z-10 mt-40   before:bg-cyan-600">
          <img
            src="https://i.pinimg.com/564x/48/94/bb/4894bb77d0c1d3947f5b981fc15b9b3c.jpg"
            class="absolute z-10 inset-0 w-full  object-contain rounded-lg"
            loading="lazy"
          />
        </div>
        <div class="flex-auto pl-6">
          <div class="relative flex flex-wrap items-baseline pb-6 mt-10 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
            <h1 class="relative text-justify w-full flex-none mb-2  text-2xl font-semibold text-white">
              Currency Converter
            </h1>
            <div class="relative uppercase text-teal-400 ml-3">
              Convert into any currency
            </div>
          </div>
          <div class="flex items-baseline my-6">
            <div
              className="w-full h-screen flex flex-wrap h-1/2     bg-cover bg-no-repeat"
              // style={{
              //   backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
              // }}
            >
              <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      convert();
                    }}
                  >
                    <div className="w-full mb-1">
                      <Currency
                        label="From"
                        amount={amount}
                        currencyOption={options}
                        onCurrencyChange={(currency) => setFrom(currency)}
                        selectCurrency={from}
                        onAmountChange={(amount) => setAmount(amount)}
                      />
                    </div>
                    <div className="relative w-full h-0.5">
                      <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                      >
                        swap
                      </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                      <Currency
                        label="To"
                        amount={convertedAmount}
                        currencyOption={options}
                        onCurrencyChange={(currency) => setTo(currency)}
                        selectCurrency={to}
                        // amountDisable
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                    >
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-xs leading-6 text-slate-500">
        Learning React : Made by Prachi Sharma
      </p>
    </div>
  );
}

export default IndexCurr;
