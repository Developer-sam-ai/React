import { useState } from 'react'

export default function Colorchanger() {
  const [color, setColor] = useState("#212121");

  return (
    <>
    <div
      className="w-full h-screen duration-150"
      style={{ backgroundColor: color }}
    >
      {/* we used left 1/2 to adjust the bar in center and used transform translate*/}
      <div className='fixed flex items-center bottom-6 left-1/2 transform -translate-x-1/2'>
      <div className='flex flex-wrap justify-center gap-4 shadow-xl bg-slate-300 px-2 py-2 rounded-3xl '>
        <button className='px-2 py-2 bg-red-400 rounded-2xl hover:shadow-xl hover:backdrop-brightness-50 hover:bg-red-600 translation-all'  onClick={()=>setColor('red')} >Red</button>
        <button className='px-2 py-2 bg-yellow-300 rounded-2xl hover:bg-yellow-500 hover:shadow-xl hover:backdrop-brightness-50 translation-all'onClick={()=>{setColor("yellow")}}>Yellow</button>
        <button className='px-2 py-2 bg-blue-400 rounded-2xl hover:shadow-xl hover:backdrop-brightness-50 hover:bg-blue-600 translation-all' onClick={()=>{setColor("blue")}}>Blue</button>
        <button className='px-2 py-2 bg-purple-400 rounded-2xl hover:shadow-xl hover:backdrop-brightness-50 hover:bg-purple-600 translation-all' onClick={()=>{setColor("purple")}} >Purple</button>
        <button className='px-2 py-2 bg-green-400 rounded-2xl hover:shadow-xl hover:backdrop-brightness-50 hover:bg-green-600 translation-all' onClick={()=>{setColor("green")}}>Green</button>
        <button className='px-2 py-2 bg-orange-400 rounded-2xl hover:shadow-xl hover:backdrop-brightness-50 hover:bg-orange-600 translation-all' onClick={()=>{setColor("orange")}}>Orange</button>
      </div>
      </div>
    </div>

    
    </>
  );
}


