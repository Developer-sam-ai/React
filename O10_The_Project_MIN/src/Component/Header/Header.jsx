import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Header() {

    const [IssidebarOpen,SetIssidebarOpen]=useState(false);

    function sidebaropen(){
        SetIssidebarOpen(!IssidebarOpen);
    }
return (
    <>
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-xl">
        <nav className='flex  justify-between items-center h-16 '>
            <div className="flex items-center gap-4 ml-2">
            <button 
            onClick={sidebaropen}
            className="p-2 rounded-md hover:bg-slate-800 focus:outline-none"
            >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>
                <Link to="/Home" className='flex items-center'>
                    <div >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCjBf0e6brJSQOR_Jk3VTnCc5g452pCuBrQ&s"
                        className='h-10 rounded-lg w-10 mr-2'
                        alt="Logo" />
            </div>
            <span className='font-bold text-xl hover:text-blue-100'>General Desk</span>
                </Link>
            </div>
                <div className='mr-6'>
                <div className="flex gap-8 font-bold ">
                <Link to="/tasks" className="hover:text-blue-400 p-2 rounded-md hover:bg-slate-800 focus:outline-none">Tasks</Link>
                <Link to="/Songs" className="hover:text-blue-400 p-2 rounded-md hover:bg-slate-800 focus:outline-none">Songs</Link>
                <Link to="/Expense" className="hover:text-blue-400 p-2 rounded-md hover:bg-slate-800 focus:outline-none">Expense</Link>
                </div>
        </div>
        </nav>
    </header>
    // sliding left bar
    <div 
        className={`fixed inset-y-0 left-0 w-64 bg-slate-900 text-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] ${
        IssidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
        <div className="p-4 flex justify-between items-center border-b border-slate-700">
            <div className="font-bold text-lg">Menu</div>
            <button 
                    onClick={sidebaropen} 
                    className="text-slate-400 hover:text-white transition-colors bg-red-500"
                >
                    <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M6 18L18 6M6 6l12 12" 
                    /> 
                    </svg>
                </button>

        </div>
    
    <nav className="flex flex-col p-4 space-y-4 font-bold">
            <Link to="/tasks" onClick={sidebaropen} className="hover:text-blue-400 p-2 rounded-md hover:bg-slate-800">Task</Link>
            <Link to="/Songs" onClick={sidebaropen} className="hover:text-blue-400 p-2 rounded-md hover:bg-slate-800">Songs</Link>
            <Link to="/Expense" onClick={sidebaropen} className="hover:text-blue-400 p-2 rounded-md hover:bg-slate-800">Expense Tracker </Link>
        </nav>
    </div>
    </>
)
}

export default Header