import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
export default function Sidebar() {

  const [open, setOpen] = useState(true);
const SidebarVarient ={
  open:{
    width:"16rem"
  },
  closed:{
    width:"4.5rem"
  }
}
const ChildVarient={
  open:{
    opacity:1,
    y:0
  },
closed:{
  opacity:0,
  y:-100
}
}
  return (
  <motion.div
   initial={false} 
    animate={open?"open":"closed"} 
    transition={{duration:0.3}}
exit="closed"
  >
     <motion.aside
    variants={SidebarVarient}
    className={`h-screen bg-slate-900 text-white ${open ? "w-64" : "w-20"}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-slate-700">
        {open && <h1 className="font-bold text-lg">MyApp</h1>}

        <button
          onClick={() => setOpen(!open)}
          className="text-xl hover:text-slate-300"
        >
          ☰
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-6">
        <ul>
          
          <motion.li
          
           className="flex items-center gap-4 px-4 py-3 hover:bg-slate-800 cursor-pointer">
            <span>🏠</span>
            {open && <span>Dashboard</span>}
          </motion.li>

          <motion.li 
          className="flex items-center gap-4 px-4 py-3 hover:bg-slate-800 cursor-pointer">
            <span>📁</span>
            {open && <span>Projects</span>}
          </motion.li>

          <motion.li 
          className="flex items-center gap-4 px-4 py-3 hover:bg-slate-800 cursor-pointer">
            <span>📊</span>
            {open && <span>Analytics</span>}
          </motion.li>

          <motion.li 
          className="flex items-center gap-4 px-4 py-3 hover:bg-slate-800 cursor-pointer">
            <span>⚙️</span>
            {open && <span>Settings</span>}
          </motion.li>
         
        </ul>
      </nav>
    </motion.aside>
  </motion.div>
   
  );
}
