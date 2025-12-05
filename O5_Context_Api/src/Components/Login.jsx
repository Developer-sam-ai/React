import React from 'react'
import { useState } from 'react'
import usercontext from '../Context/Context'

function Login() {
    const [username,Setusername]=useState('sam');
    const [password,Setpassword]=useState('3136');

    const handlesubmit=()=>{

    }

return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} 
        onChange={(e)=>{Setusername(e.target.value)}} placeholder='username'/>
        <input type="text" 
        value={password} 
        onChange={(e)=>{e.target.value}} placeholder='password'/>
        <button type="button" placeholder='submit'/>
        <button onClick={handlesubmit}>submt</button>
    </div>
)
}

export default Login