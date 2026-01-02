import React from 'react'
import { motion } from 'motion/react'
function Button() {
  return (
  
    <motion.div 
      whileHover={{
        rotateX:25,
        rotateY:10,
        y:-5,
        boxShadow:"0px 20px 50px rgba(0,0,0,0.7)"
      }}
      whileTap={{
        y:5
      }}
      transition={{
        duration:0.5
      }} className=' bg-black text-white flex items-center justify-center px-4 py-2 rounded-xl'>
      <button >Click Me Daddy!!</button>
    </motion.div>
  )
}

export default Button
