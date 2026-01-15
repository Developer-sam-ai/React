import React, { useState } from 'react'

export default function BucketList() {

    const tasks=[
        {id:"1",value:"DSA",seen:false},
        {id:'2',value:"React",seen:false},
        {id:'3',value:"SONU project next",seen:true}
    ]
    const [mark,setmark]=useState(tasks);

    function handleToggle(artworkID,nextseen){
        setmark(mark.map(artwork=>{
            if(artwork.id===artworkID){
                return {...artwork,seen:nextseen};
            }
            else{
                return artwork;
            }
        }))
    }
    return (
        <>
        <h2>Sam-List todo</h2>
        <ListItem
        artwork={mark}
        onToggle={handleToggle}
        />
        </>
    )

}

function ListItem ({artwork,onToggle}){
    return(
        <ul>
            {/* mapping the array elements */}
            {artwork.map(artwork=>(
                <li key={artwork.id}>
                <div>
                    <input type="checkbox" 
                    checked={artwork.seen}
                    onChange={e=>{
                        onToggle(
                            artwork.id,
                            e.target.checked
                    );
                    }} />
                    {artwork.value}
                </div>
                </li>
            ))}
        </ul>
    )
}



