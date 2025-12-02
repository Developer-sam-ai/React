import React from "react";

import { useId } from "react";
function Input(  {label,
    amount,
    onAmountchange,
    oncurrencychange,
    currencyOptions=[],
    selectCurrency='inr',
    amountdisable=false,
    className=""}){
    
        const amountinputID=useId();
        // just a extra hook  but not used to generate key

        // here we have a new hook like for random ID's 
    return(
        <>
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountinputID} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    id={amountinputID}
                    placeholder="Amount"
                    disabled={amountdisable}
                    value={amount}
                    onChange={(e)=>onAmountchange && onAmountchange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    // disabled={}  // no need but for optimisation we take currency enabled or disabled

                    onChange={(e)=>{oncurrencychange && oncurrencychange(e.target.value)}}
                >
                    {/* //~ if we want to use loop then always use key */}
                        {currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
        </>
    );
}
export default Input
// it is good for small projects but for big projects we get ajs file and import it there and then use it