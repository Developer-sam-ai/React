import React, { useState } from 'react'

export default function RenderStateAfter() {
    const [num,setnum]=useState(0);
    const [Enable,SetEnable]=useState(true);
    const[lastname,setlastname]=useState('ghate');
  return (
    <>
    <h1>Rendering states after it </h1>
    {/* <div>here we learnt that react acts like a waiter dont commit the order direcly it waits for whole order to complete </div> */}
    <button
    onClick={()=>{
        setnum(num+3);
        setnum(num=>num+1);
    }}>add 4</button>
    <p style={{color:'red'}}>{num}</p>

    {/* Name convention used  */}
    <button
    onClick={()=>{
        SetEnable(e=>!e);
        console.log(Enable);
    }}>{Enable?'True':'False'}</button>
    <p>{lastname}</p>
    <button onClick={()=>{
        setlastname(ln=>ln.reverse());
    }}>click me</button>
    </>
)
}

