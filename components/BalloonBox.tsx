'use client'
import { motion } from 'framer-motion'
import React from 'react'

const BalloonBox = () => {
  return (
    <motion.div
        className='h-96 w-96 px-4 py-2 rounded-full flex items-center gap-2 text-slate-500 shadow-[0px_-16px_30px_10px_rgba(0,0,0,_0.1)_inset] shadow-[8px_8px_4px_rgba(0, 0, 0,_0.05)] shadow-[16px_16px_8px_rgba(0, 0, 0,_0.05)]'

        whileHover={{
            scale: 1.05,
            boxShadow: [
                "rgba(0, 0, 0, 0.1) 0px -16px 30px 10px inset, rgba(0, 0, 0, 0.2) 0px -24px 30px 10px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.05) 4px 4px 2px",
                "rgba(0, 0, 0, 0.1) 0px -16px 30px 10px inset, rgba(0, 0, 0, 0.2) 0px -24px 30px 10px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.05) 4px 4px 2px, rgba(0, 0, 0, 0.05) 8px 8px 4px, rgba(0, 0, 0, 0.05) 16px 16px 8px",
                "rgba(0, 0, 0, 0.1) 0px -16px 30px 10px inset, rgba(0, 0, 0, 0.2) 0px -24px 30px 10px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.05) 4px 4px 2px, rgba(0, 0, 0, 0.05) 8px 8px 4px, rgba(0, 0, 0, 0.05) 16px 16px 8px, rgba(0, 0, 0, 0.05) 32px 32px 16px"
            ]
        }}
        transition={{
            duration: 2,
            times: [0, 0.2, 0.5, 1],
            type: 'tween',
        }}
    >

    </motion.div>
  )
}

export default BalloonBox
