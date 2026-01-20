import React, { useState } from 'react'

function Change_State_realtime() {

    const [change,setchange]=useState(false);
    return (
    <>
        <button onClick={()=>{
            setchange(prev=>!prev);
        }}>click to change</button>
        <h1 style={{color:change?'green':'red',
            userSelect: 'none', 
            cursor: 'default'
        }}>{change?'walk':'stop'}</h1>
    </>
    )
}

export default Change_State_realtime