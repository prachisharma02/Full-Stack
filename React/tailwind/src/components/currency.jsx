// here we are creating a input box that contains two label "from/to c and currency type" ,amount,
//currency type(usd, inr,..)
// this will be a resuable component foe creating two input box here 1--> from 2--> To

import React, { useId } from "react";

// these are user inputs to achieve resuability
function Currency({
  classname = "", // if user wants to add extra class
  label, // to provide reusable label like from /to
  amountDisable = "false",
  amount, // amount to enter from user that has to be converted or converted from
  onAmountChange, // this is mandatory whenever input of amount changes a state is changed so -->usestate
  selectCurrency = "usd", // by defeault usd unless it will also be given by usser only
  onCurrencyChange, // when cyrrency changes so to handle that -->usestate
  currencyDisabled = "false", // if user wants to give an amount or not
  currencyOption = [], // list of all available options of cuurency
}) {
  const amountId = useId();

  // it generates random ids mostly used to bind with tab button so whenever click on tabls this id attached on the lements will move to next element

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}>
      <div className="w-1/2">
        <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountId}
          className="outline-none text-black w-full bg-gray-200 py-1.5"
          placeholder="Amount"
          type="number"
          //   disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="flex flex-wrap justify-end text-right w-1/2">
        <p className="text-black/40 mb-2 w-full">Currency type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer text-black outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          //   disabled={currencyDisabled}
        >
          {/* so when we are looping in js means repeating any jsx then performace degrade cux 
                  dom is repeating the same element so here KEY is used  */}

          {/* NOTE
                  
                   a key is the only thing React uses to identify DOM elements. */}
          {currencyOption.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Currency;
