import React from 'react'

function Home() {
return (
    <>

    <div className=' bg-slate-950 h-screen' >
        <div className='h-60 flex justify-evenly'>
        <div className=' bg-slate-800 rounded-3xl shadow-sm p-4   w-full m-2'>
            <h2 className='font-bold text-white '>Water Drank</h2>
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
