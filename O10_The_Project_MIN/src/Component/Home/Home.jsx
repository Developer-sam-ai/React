import React, { useState } from 'react'

function Home() {
    const [count,setcount]=useState(0);
return (
    <>
    <div className="bg-slate-950 h-screen">
    <div className="h-60 flex justify-evenly">
        
        {/* I brought back the flex-col and justify-end to keep it bottom-aligned */}
        <div className="bg-slate-800 rounded-3xl shadow-sm p-6 w-full m-2 flex flex-col ">
            <h2 className="font-bold text-white mb-2">Water Drank</h2>
            
            <div className="flex items-center justify-start gap-4 mt-6">
                <p className="text-white text-6xl font-black">{count}</p>
                
                {/* Plus Button */}
                <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-3xl transition-colors shadow-md"
                    aria-label="Add a glass"
                    onClick={() =>{
                        if(count>10){
                            alert("itna pani mat piyo")
                        }
                        setcount(count >= 10 ? 0 : count + 1)}}
                >
                    +
                </button>
                
                {/* Minus Button - Changed to red for contrast and fixed logic */}
                <button 
                    className="bg-red-500 hover:bg-red-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-3xl transition-colors shadow-md"
                    aria-label="Remove a glass"
                    onClick={() => setcount(count > 0 ? count - 1 : 0)}
                >
                    -
                </button>
            </div>
            
        </div>
        <div className='bg-slate-800 rounded-3xl shadow-sm p-4  w-full m-2 '>
            <h2 className="font-bold text-white ">Total Task </h2>
        </div>
        <div className='bg-slate-800 rounded-3xl shadow-sm p-4  w-full m-2  focus:border-blue-500'>
            <h2 className="font-bold text-white ">Total expense</h2>
        </div>
        </div>
        <div >
            <div className='text-white m-4 '> Hows {new Date().toLocaleString('en-GB',{
                weekday:'long',
                day:'numeric',
                month:'long'
            })}</div>
            <textarea name="" id="" placeholder='Hows your day sam?'
            className="block w-[calc(100%-2rem)] mx-auto mt-4 h-44 bg-slate-900 text-white placeholder-slate-500 p-4 rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none transition-all"></textarea>
        </div>
    </div>
    </>
)
}

export default Home
