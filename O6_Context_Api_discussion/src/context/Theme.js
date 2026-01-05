import { createContext,useContext} from "react";

export const themecontext=createContext({
    thememode:"light",
    darktheme:()=>{},
    lighttheme:()=>{},
})

// this is used as we need not reqire here to import 2 import statements 

export const Themeprovider=themecontext.Provider

export default function usetheme(){
    return useContext(themecontext)
}