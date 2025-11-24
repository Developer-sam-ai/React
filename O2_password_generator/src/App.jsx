import { useState,useCallback } from 'react'
import './App.css'

function App() {
  const [length,setlength]=useState(8);
  const [numberallowed,setnumberallowed]=useState(false);
  const [charcterallowed,Setcharcacterallowed]=useState(false);
  const [password,Setpassword]=useState("")

  const passwordgenrator=useCallback(()=>{
    let res=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberallowed) str+='0123456789';
    if(charcterallowed) str+='!@#$%^&*()';

    for(let i=1;i<=length;i++){
      let cha=Math.floor(Math.random()*str.length+1)
      res=str.charAt(cha);
    }
    Setpassword(res);
  },[length,numberallowed,charcterallowed, Setpassword])

  
  return (
    <>
        {/* <h1 className="flex items-center justify-center bg-red-400 p-3  w-fit ">password generator</h1> */}
        <h1 className="text-center bg-gray-700 p-4 text-xl font-bold">
  password generator
</h1>

    <div className='bg-gray-800 w-full flex justify-center mx-auto shadow-md h-32 px-1 my-1 rounded-3xl text-red-400 w-fit'>
      <div className=' rounded-lg overflow-hidden mb-4'>
        <input type='text' value={password} className='outline-none w-full py-1 px-4'
        placeholder='password'/>
      </div>
    </div>
    </>
  )
}

export default App
