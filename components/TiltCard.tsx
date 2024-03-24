'use client'

import React, { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { FiMousePointer } from "react-icons/fi"

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const XSpring = useSpring(x);
    const YSpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${XSpring}deg) rotateY(${YSpring}deg)`;

    const handleMouseMove = (e: any) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = (mouseX / width - HALF_ROTATION_RANGE);

        x.set(rX);
        y.set(rY);
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

  return (
    <motion.div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
            transformStyle: "preserve-3d",
            transform,
        }}
        className="relative h-96 w-72 rounded-xl bg-gray-200 bg-clip-padding backdrop-filter bg-opacity-50"
    >
        <div
            style={{
                transform: "translateZ(75px)",
                transformStyle: "preserve-3d"
            }} 
            className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-xl opacity-100">
                <FiMousePointer 
                    style={{
                        transform: "translateZ(75px)"
                    }}
                    className="mx-auto text-4xl"
                />
                <p
                    style={{
                        transform: "translateZ(50px)"
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