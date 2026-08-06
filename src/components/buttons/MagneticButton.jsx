import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({ children, className = "", onClick, ...props }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkDevice = () => {
            const hasTouch = window.matchMedia("(pointer: coarse)").matches;
            const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            setIsMobile(hasTouch || prefersReduced);
        };
        checkDevice();
    }, []);

    const handleMouseMove = (e) => {
        if (isMobile) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        // Max magnetic pull of 8 pixels for sophisticated subtlety
        const pullLimit = 8;
        const x = (clientX - centerX) / (width / 2) * pullLimit;
        const y = (clientY - centerY) / (height / 2) * pullLimit;
        
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.15 }}
            className={`inline-block ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.div>
    );
}
