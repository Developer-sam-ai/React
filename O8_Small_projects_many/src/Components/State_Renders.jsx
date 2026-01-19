import React, { useState } from 'react'
// import { useState } from 'react'

export default function State_Renders() {
    const[isSent,setisSent] =useState(false);
    const[messege,setmessege]=useState('samudi');

    if(isSent){
        return <h1>hello sam</h1>
    }
    function sendmsg(messege){
    }

    return (
    <form action="" onSubmit={(e)=>{
        e.preventDefault();
        setisSent(true);
        sendmsg(messege);

        
    }}>
        <textarea value={messege}
        onChange={e=>setmessege(e.target.value)}/>
        <button type='submit'>send</button>
    </form>
    )
}

