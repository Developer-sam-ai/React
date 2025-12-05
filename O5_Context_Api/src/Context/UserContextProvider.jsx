import React, { Children } from "react";
import usercontext from "./Context";

const UserContextProvider=({Children})=>{
    const[user,setUser]=React.useState(null);
    
    return (
        <usercontext.Provider value={{user,setUser}}>
        {Children}
        </usercontext.Provider>
    )
}

export default UserContextProvider;