'use client'

import React, { useState, useEffect, useRef } from "react"
import { motion, useAnimate, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"

const SidePopCard = () => {
    const [isHovered, setHovered] = useState(false);
    const [scope, animate] = useAnimate();

    const DURATION = 0.3;

    useEffect(() => {
        if (isHovered) {
            animate(scope.current, { rotate: .15, rotateY: 22.5, rotateX: 2.5, x: 20, y: -10 }, {duration: DURATION})
            animate("#site", { x: 20, y: -5 }, {duration: DURATION})
            animate("#div", { x: 12.5 }, {duration: DURATION})
            animate("#icon", { x: 22.5, y: -6.25 }, {duration: DURATION})
            animate("#cta", { x: 30, y: -7.5 }, {duration: DURATION})
        } else {
            animate("#site", { x: 0, y: 0 }, {duration: DURATION})
            animate("#icon", { x: 0, y: 0 }, {duration: DURATION})
            animate("#cta", { x: 0, y: 0 }, {duration: DURATION})
            animate("#div", { x: 0}, {duration: DURATION})
            animate(scope.current, { rotate: 0, rotateX: 0, rotateY: 0, x: 0, y: 0 }, {duration: DURATION})
        }
    }, [isHovered]);

    return (
        <motion.div
            ref={scope}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                transformStyle: "preserve-3d",
            }}
            className="flex flex-col gap-4 p-4 h-72 w-96 rounded-xl bg-violet-200 bg-clip-padding backdrop-filter"
        >

            <div
                id="site"
                className="flex flex-1 flex-col gap-3 p-3 bg-zinc-800 rounded-xl"
            >
                <div className="flex justify-start gap-1 rounded-xl">
                    <div className="h-2 w-2 rounded-xl bg-red-500" />

                    <div className="h-2 w-2 rounded-xl bg-yellow-500" />

                    <div className="h-2 w-2 rounded-xl bg-green-500" />
                </div>

                <div
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                    className="flex flex-1 flex-col gap-4 p-2 bg-zinc-700 rounded-xl" >
                    <div
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                        id="div"
                        className="flex h-6 place-content-center rounded-xl bg-zinc-600 shadow-xl opacity-100"
                    />

                    <div
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                        className="flex-auto flex gap-4 inset-4 place-content-center rounded-xl opacity-100"
                    >
                        <div
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                            id="div"
                            className="flex w-16 inset-4 place-content-center rounded-xl bg-zinc-600 opacity-100"
                        />

                        <div
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                            id="icon"
                            className="flex-grow inset-4 place-content-center rounded-xl  bg-gradient-to-br from-purple-500 to-violet-600 opacity-100"
                        />

                        <div
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                            id="cta"
                            className="flex w-24 inset-4 place-content-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 opacity-100"
                        />
                    </div>
                </div>
            </div>


        </motion.div>
    )
}

export default SidePopCard