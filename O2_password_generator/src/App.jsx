import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length,setlength]=useState(8);
  const [numberallowed,setnumberallowed]=useState(false);
  const [charcterallowed,Setcharcacterallowed]=useState(false);
  const [password,Setpassword]=useState("");
  const [copied,setCopied]=useState(false);

  //ref hook
  const passwordref=useRef(null);

  const copypassword_clipboard=useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
    setCopied(true);
    setTimeout(()=>{
      setCopied(false);
    },1000)
    // in serverside we dont have window option ^ will see in nextjs
  },[password]);

  const passwordgenrator=useCallback(()=>{
    let res=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberallowed) str+='0123456789';
    if(charcterallowed) str+='!@#$%^&*()';

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      res+=str.charAt(char);
    }
    Setpassword(res);
  },[length,numberallowed,charcterallowed, Setpassword])

  // passwordgenrator();
  useEffect(()=>{
    passwordgenrator()
  },[length,numberallowed,charcterallowed,passwordgenrator])

  //! too many rerenders react limit inifinite loop so we cant call password generator 
  //~ and we cant call them as well as here we have used callback but even if we have the direct thing we cant do that 
  
  //^ never compare the inputs of the password generator callback to the use effect both has 
  //^ different work to do in call back we optimise the method here we just optiise

  //^ and in use effect we are like any changes in these just rerun

  
  return (
    <>
        {/* <h1 className="flex items-center justify-center bg-red-400 p-3  w-fit ">password generator</h1> */}
        <h1 className="text-center bg-gray-700 p-4 text-xl font-bold">
  password generator
</h1>

    <div className='bg-gray-800  mt-3 flex flex-col items-center mx-auto w-fit  shadow-md h-32 px-8 my-1 rounded-md text-blue-300 '>
      <div className='mt-4 flex rounded-lg overflow-hidden mb-5 h-11 w-fit'>
        <input type='text' value={password} ref={passwordref} className='outline-none w-full py-1 px-4'
        placeholder='password'/>
        <button onClick={copypassword_clipboard}  className={'bg-blue-800 w-16 '}>{copied?"copied":"copy"}</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex flex-col items-center gap-x-1 '>
          <input type="range" 
          min={6}
          max={80}
          value={length}
          className='cursor-progress'
          onChange={(e)=>{setlength(e.target.value)}}/>
          <label>Length: {length}</label>
      </div>
      <div >
        <input type="checkbox" 
        defaultChecked={numberallowed}
        className='peer h-3 w-3 cursor-pointer appearance-none rounded-md border-2 border-gray-400 checked:bg-blue-800 checked:border-blue-800 transition-all'
        id='numberInput'
        onChange={()=>{
            setnumberallowed((prev)=>!prev);
        }}/>
        <label htmlFor="numberInput" className='text-center'> Number</label>
      </div>
        <div>
          <input type="checkbox"
          defaultChecked={charcterallowed}
          className='peer h-3 w-3 cursor-pointer appearance-none rounded-md border-2 border-gray-400 checked:bg-blue-600 checked:border-blue-600 transition-all'
          id='characterinput'
          onChange={()=>{
            Setcharcacterallowed((prev)=>!prev);
          }}/>
          <label htmlFor="charcterInput"> Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
