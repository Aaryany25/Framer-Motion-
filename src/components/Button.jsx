import React from 'react'
import { motion } from 'motion/react'
function Button() {
  return (
  
    <motion.div whileTap={{y:1}}
       className=' bg-neutral-300  flex items-center justify-center px-2 py-1 rounded text-[12px] mt-3 shadow-[0_1px_2px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]' >
      <button >Click Me X</button>
      
    </motion.div>
  )
}

export default Button
