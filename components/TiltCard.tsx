'use client'

import React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { FiMousePointer } from "react-icons/fi"

const TiltCard = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e: any) => {
        const rect = e.target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    const handleMouseLeave = (e: any) => {
        x.set(0)
        y.set(0)
    }

  return (
    <motion.div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
        }}
        className="relative h-96 w-72 rounded-xl bg-gray-200 bg-clip-padding backdrop-filter bg-opacity-50"
    >
        <div
            style={{
                transform: "translateZ(60px)",
                transformStyle: "preserve-3d"
            }} 
            className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-xl opacity-100">
                <FiMousePointer 
                    style={{
                        transform: "translateZ(60px)"
                    }}
                    className="mx-auto text-4xl"
                />
                <p
                    style={{
                        transform: "translateZ(60px)"
                    }}
                    className="mx-auto my-2 text-2xl font-bold"
                >
                    DARK MODE
                </p>
        </div>
    </motion.div>
  )
}

export default TiltCard