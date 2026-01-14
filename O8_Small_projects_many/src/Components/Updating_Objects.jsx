import React, { useState } from 'react'
useState

import './Updating_Objects'
function Updating_Objects() {

const [person,setperson]=useState({
  name:"Radha",
  artwork:{
    title:'Binkamachi',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1p340oBhFrA7EZygpSCXeL3Ve0pt5UYZ15Q&s",
    city:"pune"
  }
})

  function handleName(e){
    setperson({
      ...person,
      name:e.target.value
    })
  }

  function handleTitle(e){
    setperson({
      //  we have to open them seperately one for 
      ...person,
      artwork:{
        ...person.artwork,
        title:e.target.value
      }
    })
  }
  function handleCity(e){
      setperson({
        ...person,
        artwork:{
          ...person.artwork,
          city:e.target.value
        }
      })
  }
  function handleImage(e){
    setperson({
      ...person,
      artwork:{
        ...person.artwork,
        image:e.target.value
      }
    })
  }
  return (
    <>
      <div> Name:
      <input type= 'text'  value={person.name} onChange={handleName}/>
      </div>
      <div>Title: 
        <input type="text" value={person.artwork.title} onChange={handleTitle} />
      </div>
      <div>City:
        <input type="text"  value={person.artwork.city} onChange={handleCity}/>
      </div>
      <div> image:
        <input type="text"  value={person.artwork.image} onChange={handleImage}/>
      </div>
      <div>{"info"}</div>
      <div>
        <i>we have our cutie named {person.name} from {person.artwork.city} city</i>
        <i>being the best supportor always but she is ekdam{person.artwork.title}</i>
      </div>
      <img src={person.artwork.image} alt={person.artwork.title} />

    </>
  )
}

export default Updating_Objects