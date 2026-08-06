import React from "react";
import { motion } from "framer-motion";

export default function AudioWaveform({ count = 12, className = "" }) {
    const bars = Array.from({ length: count });

    // Generate random heights and animation durations for natural fluctuation
    return (
        <div className={`flex items-center gap-[3px] h-6 select-none ${className}`}>
            {bars.map((_, i) => {
                const randomDuration = 0.6 + Math.random() * 0.8;
                return (
                    <motion.div
                        key={i}
                        className="w-[2px] bg-[#D4AF37] rounded-full"
                        initial={{ height: 4 }}
                        animate={{ 
                            height: [4, 16 + Math.random() * 8, 4] 
                        }}
                        transition={{
                            duration: randomDuration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.05
                        }}
                    />
                );
            })}
        </div>
    );
}
