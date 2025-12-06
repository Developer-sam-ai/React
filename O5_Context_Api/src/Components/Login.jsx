import React, { useContext } from 'react'
import { useState } from 'react'
import Usercontext from '../Context/Context';
import UserContextProvider from '../Context/UserContextProvider';

function Login() {
    const [username,Setusername]=useState(' ');
    const [password,Setpassword]=useState(' ');

    const{SetUser}=useContext(Usercontext)
    
    const handlesubmit=(e)=>{
        e.preventDefault()
        SetUser({username,password})
    }

return (
    <div>
        <h2>Login</h2>
        <input 
            type="text" 
            value={username} 
            onChange={(e)=>{Setusername(e.target.value)}} 
            placeholder="username"
        />
        {"        "}
        <input 
            type="text" 
            value={password}
            onChange={(e)=>Setpassword(e.target.value)} 
            placeholder='password'
        />
        <button onClick={handlesubmit}>submt</button>
    </div>
)
}

export default Login