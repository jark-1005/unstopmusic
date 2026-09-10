import { motion } from "framer-motion";

export default function AudioWaveform({ count = 12, className = "" }) {
    // Generate deterministic pseudo-random values based on the index to remain 100% pure
    const barData = Array.from({ length: count }, (_, i) => {
        const hash1 = (Math.abs(Math.sin((i + 1) * 9.88)) * 100000) % 1;
        const hash2 = (Math.abs(Math.cos((i + 1) * 12.45)) * 100000) % 1;
        
        return {
            id: i,
            duration: 0.6 + hash1 * 0.8,
            maxHeight: 16 + hash2 * 8,
        };
    });

    return (
        <div className={`flex items-center gap-[3px] h-6 select-none ${className}`}>
            {barData.map((bar) => (
                <motion.div
                    key={bar.id}
                    className="w-[2px] bg-[#EEE8AA] rounded-full"
                    initial={{ height: 4 }}
                    animate={{ 
                        height: [4, bar.maxHeight, 4] 
                    }}
                    transition={{
                        duration: bar.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: bar.id * 0.05
                    }}
                />
            ))}
        </div>
    );
}
