//^ its a good practice to keep all hooks in js not in jsx 

//~a simple function returning an array is as well a hook and we can use builtin hooks in our custom hook


import { useEffect, useState } from "react";

export function useCurrencyinfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(res => res.json())
            .then(res => setData(res[currency]))
            .catch(err => console.log(err));
    }, [currency]);

    return data;
}





