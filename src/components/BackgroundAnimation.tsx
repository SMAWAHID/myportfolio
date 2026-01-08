"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundAnimation() {
    // Only run on client to avoid hydration mismatches with random values
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Primary Orb - Blue-ish */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] rounded-full mix-blend-multiply filter blur-[80px] opacity-40 dark:opacity-20"
                style={{
                    background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0) 70%)",
                }}
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Secondary Orb - Purple-ish */}
            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] rounded-full mix-blend-multiply filter blur-[80px] opacity-40 dark:opacity-20"
                style={{
                    background: "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0) 70%)",
                }}
                animate={{
                    x: [0, -70, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            {/* Tertiary Orb - Cyan-ish */}
            <motion.div
                className="absolute top-[40%] left-[40%] w-[40vh] h-[40vh] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 dark:opacity-10"
                style={{
                    background: "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, rgba(34, 211, 238, 0) 70%)",
                }}
                animate={{
                    x: [0, -50, 50, 0],
                    y: [0, 50, -50, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                }}
            />
        </div>
    );
}
