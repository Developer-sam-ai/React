// import React, { useState } from 'react'
// import {motion, AnimatePresence} from 'framer-motion';

// function Task() {

//     const[task,setTask]=useState([]);

//     const [tasktext,settasktext]=useState("");
//     const [status,setstatus]=useState('not started');

//     // we can like make things add a new task and add it respectively by filter 
//     function addNewTask(){
//         if(tasktext.trim()=="") return;
//         const newTask ={id:Date.now(),text:tasktext,status:status};
//         setTask([...task,newTask]);
//         settasktext("");
//     }

//     function deleteTask(TaskIdtofind){
//     const newtask=task.filter(function(task){
//         return task.id!=TaskIdtofind;
//     });
//     setTask(newtask);
//     }

//     function updateTask(TaskIdtofind,newlytypedtext){
//         const newlyaddedtask=task.map(function(task){
//             if(task.id===TaskIdtofind){
//                 return{...task,text:newlytypedtext};
//             }
//             else{
//                 return task;
//             }
//         })
//         setTask(newlyaddedtask);
//     }

//     return (
//     <>
//     <div >
//     <div className="flex items-center justify-center gap-3 p-6 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-2xl">

//     <div className="relative group flex-1 max-w-md">
//     <input 
//     type="text" 
//     placeholder="Todays plan Radha?" 
//     className="w-full bg-slate-950/40 text-slate-100 border border-slate-700 rounded-xl pl-4 pr-4 py-3 text-lg ring-offset-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-500 shadow-inner"
//     onChange={(e=>settasktext(e.target.value))}
//     />
//     </div>

//     <div className="relative">
//     <select className="appearance-none bg-slate-950/40 text-slate-300 border border-slate-700 rounded-xl px-4 py-3 pr-10 text-lg outline-none cursor-pointer hover:border-slate-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
//     value={status}
//     onChange={(e)=>setstatus(e.target.value)}>
//     <option value="not started">⚪ Not started</option>
//     <option value="in progress">🟡 In progress</option>
//     <option value="done">🟢 Done</option>
//     </select>

//     <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
//     ▼
//     </div>
// </div>

// <button className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-700 hover:to-violet-500 text-white font-bold py-3 px-8 rounded-xl transition-all transform active:scale-95 shadow-[0_0_15px_rgba(79,70,229,0.4)] flex items-center gap-2 cursor-pointer"
// onClick={addNewTask}>
//     <span>Add Task</span>
//     <span className="text-xl">+</span>
// </button>
// </div>


//     <div className='flex justify-evenly'>
//         <Column title="Not Started" tasks={task.filter(t=>t.status==='not started')} color="border-slate-500" ondelete={deleteTask} Onupdate={updateTask}/>
//         <Column title="In Progress" tasks={task.filter(t => t.status === "in progress")} color="border-yellow-500" ondelete={deleteTask} Onupdate={updateTask}/>
//         <Column title="Done" tasks={task.filter(t => t.status === "done")} color="border-green-500" ondelete={deleteTask} Onupdate={updateTask}/>
//     </div>
//     </div>
//     </>
//     )
// }

// // deleting a item 
// //~ Hey react create a brandnew list and keep the itmes who match and remove other 

// //animated taskcard
// function TaskCard({task,onDelete,Onupdate}){
//     const[isediting,setIsEditing]=useState(false);
//     const[edittext,setedittext]=useState(task.text);

//     function handleSave(){
//         if(edittext.trim() !==""){
//             Onupdate(task.id,edittext);
//         }
//         else{
//             setedittext(task.text);;
//         }
//         setIsEditing(false);
//     }

//     function handlekeydown(e){
//         if(e.key ==='Enter') handleSave();
//         if(e.key=== 'Escape'){
//             setedittext(task.text);
//             setIsEditing(false);
//         }
//     }

//     return(
//         <motion.div
//         layout 
//         initial={{ opacity: 0, y: -20, scale: 0.95 }} 
//         animate={{ opacity: 1, y: 0, scale: 1 }}      
//         exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }} 
//         transition={{ duration: 0.2, type: "spring", stiffness: 200, damping: 20 }} 
        
//         className="bg-slate-800 text-slate-200 p-4 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.2)] border border-slate-700/50 group"
//         >
//             {isediting ?(
//                 <div>
//                     <input 
//                     type="text"
//                     autoFocus
//                     value={edittext}
//                     onChange={(e)=>setedittext(e.target.value)}
//                     onKeyDown={handlekeydown}
//                     onBlur={handleSave}
//                     className="w-full bg-slate-950 text-white px-3 py-2 rounded-lg outline-none ring-2 ring-indigo-500/80 transition-all"
//                     />
//                 </div>
//             ):(
//                 <div className="flex justify-between items-start gap-3 relative">
//                 <p className="flex-1 leading-relaxed break-words">{task.text}</p>
//                 <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-3 pt-1">
//                     <button 
//                     onClick={() => setIsEditing(true)} 
//                     className="text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors"
//                     >
//                     Edit
//                     </button>
//                     <button 
//                     onClick={() => onDelete(task.id)} 
//                     className="text-xs font-semibold text-slate-400 hover:text-red-400 transition-colors"
//                     >
//                     Delete
//                     </button>
//                 </div>
//                 </div>
//             )}
//             </motion.div>
//             )}


// function Column({title,tasks,color,ondelete,Onupdate}){
//     return(
//         <div className={`flex-1 bg-slate-900/40 p-5 rounded-2xl border-t-4 ${color} shadow-lg min-h-[300px]`}>
            
//             <div>
//                 <h2>{title}</h2>
//                     <motion.span
//                         key={tasks.length}
//                         initial={{ scale: 1.5, color: '#818cf8' }}
//                         animate={{ scale: 1, color: '#94a3b8' }}
//                         className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded-full font-bold"
//                         >
//                             {tasks.length}
//                         </motion.span>
//                     </div>
//             <div className="flex flex-col gap-3">
//         <AnimatePresence mode="popLayout">
//         {tasks.map(task => (
//             <TaskCard 
//             key={task.id} 
//             task={task} 
//             onDelete={ondelete} 
//             onUpdate={Onupdate} 
//             />
//             ))}
//         </AnimatePresence>

//         {tasks.length === 0 && (
//         <motion.div 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             className="text-center text-slate-500 text-sm mt-4 italic"
//         >
//             No tasks here yet.
//         </motion.div>
//         )}
//     </div>
//     </div>
//     );
// }
// export default Task










// chat gpt try with somechanges to my one




import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Task() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [status, setStatus] = useState('not started');

  function addNewTask() {
    if (taskText.trim() === "") return;
    const newTask = { id: Date.now(), text: taskText, status: status };
    setTasks([...tasks, newTask]);
    setTaskText("");
  }

  function deleteTask(taskIdToFind) {
    setTasks(tasks.filter(task => task.id !== taskIdToFind));
  }

  function updateTask(taskIdToFind, newlyTypedText) {
    setTasks(tasks.map(task => 
      task.id === taskIdToFind ? { ...task, text: newlyTypedText } : task
    ));
  }

  return (
    // 1. min-h-screen and flex-col makes the app take the FULL height of the window
    <div className="min-h-screen flex flex-col p-8 bg-slate-950 font-sans">
      
      {/* INPUT DESK */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex flex-wrap items-center justify-center gap-4 p-6 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl mb-8 w-full max-w-5xl mx-auto"
      >
        <div className="relative flex-1 min-w-[250px]">
          <input 
            type="text" 
            placeholder="What needs to be done, Sam?" 
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addNewTask()}
            className="w-full bg-slate-950/50 text-slate-100 border border-slate-700 rounded-xl px-5 py-3.5 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all shadow-inner"
          />
        </div>

        <div className="relative">
          <select 
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="appearance-none bg-slate-950/50 text-slate-300 border border-slate-700 rounded-xl px-5 py-3.5 pr-12 text-lg outline-none cursor-pointer focus:ring-2 focus:ring-indigo-500/50 transition-all"
          >
            <option value="not started">⚪ Not started</option>
            <option value="in progress">🟡 In progress</option>
            <option value="done">🟢 Done</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addNewTask}
          className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] flex items-center gap-2"
        >
          <span>Add Task</span>
          <span className="text-xl">+</span>
        </motion.button>
      </motion.div>

      {/* COLUMNS SECTION */}
      {/* 2. flex-1 allows this row to stretch to the bottom of the screen */}
      <div className='flex flex-1 gap-6 w-full max-w-7xl mx-auto'>
        <Column 
          title="Not Started" 
          tasks={tasks.filter(t => t.status === 'not started')} 
          color="border-slate-500"
          onDelete={deleteTask}
          onUpdate={updateTask}
          delay={0.1}
        />
        <Column 
          title="In Progress" 
          tasks={tasks.filter(t => t.status === 'in progress')} 
          color="border-yellow-500" 
          onDelete={deleteTask}
          onUpdate={updateTask}
          delay={0.2}
        />
        <Column 
          title="Done" 
          tasks={tasks.filter(t => t.status === 'done')} 
          color="border-green-500" 
          onDelete={deleteTask}
          onUpdate={updateTask}
          delay={0.3}
        />
      </div>
    </div>
  );
}

// ==========================================
// COLUMN COMPONENT
// ==========================================
function Column({ title, tasks, color, onDelete, onUpdate, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5, type: "spring" }}
      // 3. h-full ensures the column background goes all the way down
      className={`flex-1 flex flex-col bg-slate-900/40 p-5 rounded-2xl border-t-4 ${color} shadow-xl h-full`}
    >
      <div className="flex justify-between items-center mb-6 border-b border-slate-700/50 pb-3">
        <h2 className="text-slate-300 font-bold uppercase text-sm tracking-widest">{title}</h2>
        <motion.span
          key={tasks.length}
          initial={{ scale: 1.5, color: '#818cf8' }}
          animate={{ scale: 1, color: '#94a3b8' }}
          className="bg-slate-950 border border-slate-700 text-slate-400 text-xs px-3 py-1 rounded-full font-bold"
        >
          {tasks.length}
        </motion.span>
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto pr-2 pb-4">
        <AnimatePresence mode="popLayout">
          {tasks.map((task) => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onDelete={onDelete} 
              onUpdate={onUpdate} 
            />
          ))}
        </AnimatePresence>

        {tasks.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center text-slate-500 text-sm mt-8 p-6 border border-dashed border-slate-700 rounded-xl"
          >
            Ready for new tasks.
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}


function TaskCard({ task, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  function handleSave() {
    if (editText.trim() !== "") {
      onUpdate(task.id, editText);
    } else {
      setEditText(task.text);
    }
    setIsEditing(false);
  }

  return (
    <motion.div
      layout 
      initial={{ opacity: 0, scale: 0.8, y: 20 }} 
      animate={{ opacity: 1, scale: 1, y: 0 }}      
      exit={{ opacity: 0, scale: 0.8, x: -50, transition: { duration: 0.2 } }} 
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      whileHover={{ scale: 1.02, y: -2 }} // NEW: Lifts the card up slightly on hover
      className="bg-slate-800  text-slate-200 p-4 rounded-xl shadow-lg border border-slate-700 group relative overflow-hidden"
    >
      <div className="absolute left-0 top-0  bottom-0 w-1 bg-slate-600/30"></div>

      {isEditing ? (
        <div className="pl-2">
          <textarea 
            autoFocus
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full bg-slate-950 text-white px-3 py-2 rounded-lg outline-none ring-2 ring-indigo-500/80 transition-all resize-none min-h-[60px]"
          />
          <div className="flex justify-end gap-2 mt-3">
            <button 
              onClick={() => {
                setEditText(task.text);
                setIsEditing(false);
              }}
              className="text-xs px-3 py-1.5 rounded-md text-slate-400 hover:bg-slate-700 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="text-xs px-3 py-1.5 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-between gap-2 pl-2">
          <p className="leading-relaxed break-words text-[20px]">{task.text}</p>
          
          <div className="opacity-0  flex   group-hover:opacity-100 transition-all   gap-3 mt-1">
            <button 
              onClick={() => setIsEditing(true)} 
              className="text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors bg-slate-900/50 px-2 py-1 rounded"
            >
              Edit
            </button>
            <button 
              onClick={() => onDelete(task.id)} 
              className="text-xs font-semibold text-slate-400 hover:text-red-400 transition-colors bg-slate-900/50 px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}