import './Hooks.css';
import { useState } from 'react';
// making and adding things 
//? here we learn that while we add counter variable to multiple places its hard by classic javascript but very easy by react 

function Hooks() {
  // hooks returns array 


  const[counter,setCounter]=useState(9)
  // from usestate we get two things in from of array 
  // let counter=5;
  function clunk(){
      console.log("value",counter+1);
      let next=counter+1;
      //! just pass the things to setcounter like hashmap
      if(next>15|| next<0){
        return;
      }
      else{
        setCounter(next);
      }
  }
  return(<>
  <div className='upper'>
  <h1>we are hello</h1>
  <h2>counter value:{counter}</h2>
  </div>
  <div className='lower'>
{/*  just to test */}
  <button  onClick={clunk}>Add: {counter}</button>
  <button onClick={()=>{let back=counter-1;
    if(back<0)return;
    setCounter(back);
  }}>subtract{counter}</button>
  </div>
  </>);
}
export default Hooks;

//~ while in the click event we add function do not call it

// hooks are for UI updation and react provides us a lot of things 
//! UI updation is controlled by REACT not us so hooks is important