import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
function UICard() {
    const [open, setopen] = useState(true)
  return (
    <>
    <AnimatePresence>
         {open && (<motion.div 
         initial={{
            opacity:0,
            scale:0.98,
            filter:"blur(10px)"
         }}
         animate={{
            opacity:1,
            scale:1,
            filter:"blur(0px)"
         }
         }
    exit={{
         opacity:0,
        scale:0.98,
        filter:"blur(10px)"
    }} 
    transition={{
        duration:0.5
    }}
    className='p-4 flex flex-col w-72 h-[26rem] min-h-[26rem] rounded-xl bg-slate-100 shadow-[0_1px_2px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]'>
      <h2 className='font-bold text-[16px]'>UI Component</h2>
      <p className='text-neutral-400 text-[12px] mt-2'>this is Another UI Library</p>
    <motion.div whileTap={{y:1}}
           className=' bg-neutral-300  flex items-center justify-center px-2 py-1 rounded text-[12px] mt-3 shadow-[0_1px_2px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]' >
          <button onClick={()=>setopen(false)}>Click Me X</button>
          
        </motion.div>
      <div
      
      className='bg-neutral-200 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative'>
        <motion.div 
        initial={{
        opacity:0,
        scale:0.98,
        filter:"blur(10px)"
      }} 
      whileHover={{
        opacity:1,
        scale:1.05,
        filter:"blur(0px)"
      }}
      transition={{
        duration:0.3
      }}
        className='absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200'>
<div className='p-4 text-[10px] flex items-start'>ABCD</div>
<div className='p-4 text-[10px] flex items-start'>ABCD</div>
<div className='p-4 text-[10px] flex items-start'>ABCD</div>

        </motion.div>
      </div>
    </motion.div>)}
    </AnimatePresence>
   
    </>

  )
}

export default UICard
