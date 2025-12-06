import React, { Children } from "react";
import Usercontext from "./Context";

const UserContextProvider=({children})=>{
    const[user,SetUser]=React.useState(null);
    
    return (
        <Usercontext.Provider value={{user,SetUser}}>
        {children}
        </Usercontext.Provider>
    )
}

export default UserContextProvider;