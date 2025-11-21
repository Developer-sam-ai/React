import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("green");

  return (
    <>
    <div
      className="w-full h-screen duration-150"
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap'></div>
      <div className=''>
        <button>hello</button>
      </div>
    </div>

    
    </>
  );
}

export default App
