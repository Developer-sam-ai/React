import React, { useState } from 'react'

export default function RenderStateAfter() {
    const [num,setnum]=useState(0);
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
    </>
  )
}

