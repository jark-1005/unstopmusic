import React from "react";
import { motion } from "framer-motion";

export default function ImageReveal({ children, className = "", delay = 0.1 }) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="w-full h-full"
            >
                {/* The masking overlay that slides away */}
                <motion.div
                    initial={{ scaleX: 1 }}
                    whileInView={{ scaleX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay, ease: [0.76, 0, 0.24, 1] }}
                    style={{ originX: 1 }}
                    className="absolute inset-0 bg-[#FE7F2E] z-20 pointer-events-none"
                />
                
                {/* The secondary dark cover layer */}
                <motion.div
                    initial={{ scaleX: 1 }}
                    whileInView={{ scaleX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: delay + 0.1, ease: [0.76, 0, 0.24, 1] }}
                    style={{ originX: 1 }}
                    className="absolute inset-0 bg-[#233D4C] z-10 pointer-events-none"
                />

                {/* The content (usually the image) */}
                <motion.div
                    initial={{ scale: 1.15, filter: "blur(4px)" }}
                    whileInView={{ scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full h-full"
                >
                    {children}
                </motion.div>
            </motion.div>
        </div>
    );
}
