//^ its a good practice to keep all hooks in js not in jsx 

//~a simple function returning an array is as well a hook and we can use builtin hooks in our custom hook

import { useEffect, useState } from "react";
function useCurrency(currency){
    const [data,setdata]=useState({})
    useEffect(()=>{
        //! here we gonna do API call
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[currency]))
    },[currency])
    console.log(data);

    return data;
}

export default useCurrency;