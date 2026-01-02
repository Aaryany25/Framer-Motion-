import React from 'react'
import { motion } from 'motion/react'
function Button() {
  return (
    <motion.div initial={{
        rotate:0,
      }}
      animate={{
        rotate:[0,10,-10,0]
      }}
      transition={{
        duration:2
      }} className=' bg-black text-white flex items-center justify-center px-4 py-2 rounded-xl'>
      <button >Click Me Daddy!!</button>
    </motion.div>
  )
}

export default Button
