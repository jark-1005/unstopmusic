import React from "react";
import { motion } from "framer-motion";

export default function VinylArtwork({ coverUrl, title }) {
    return (
        <motion.div 
            className="relative group/vinyl select-none overflow-visible"
            initial="initial"
            whileHover="hover"
        >
            {/* The Vinyl Disc (Behind the Sleeve) */}
            <motion.div
                className="absolute inset-y-1.5 left-1.5 aspect-square rounded-full bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 flex items-center justify-center shadow-2xl border border-white/5"
                style={{
                    boxShadow: "0 0 25px rgba(0,0,0,0.7), inset 0 0 15px rgba(0,0,0,0.9)",
                }}
                variants={{
                    initial: { x: 0, rotate: 0 },
                    hover: { 
                        x: "38%", 
                        rotate: 360, 
                        transition: { 
                            x: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                            rotate: { duration: 12, ease: "linear", repeat: Infinity }
                        } 
                    }
                }}
            >
                {/* Vinyl Grooves (Refined lines) */}
                <div className="absolute inset-1.5 rounded-full border border-zinc-900/30 opacity-70" />
                <div className="absolute inset-3 rounded-full border border-zinc-900/25 opacity-60" />
                <div className="absolute inset-6 rounded-full border border-zinc-900/25 opacity-60" />
                <div className="absolute inset-10 rounded-full border border-zinc-900/20 opacity-50" />
                <div className="absolute inset-14 rounded-full border border-zinc-900/15 opacity-40" />
                
                {/* Vinyl Gold Sticker Label */}
                <div className="w-[32%] h-[32%] rounded-full bg-[#D4AF37] flex items-center justify-center p-[1px] border border-[#111827]/10 z-10 shadow-lg">
                    <div className="w-full h-full rounded-full bg-[#111827] overflow-hidden flex items-center justify-center relative">
                        <img 
                            src={coverUrl} 
                            alt="" 
                            className="w-full h-full object-cover opacity-50 absolute inset-0 pointer-events-none"
                        />
                        {/* Spindle hole */}
                        <div className="w-2.5 h-2.5 rounded-full bg-[#111827] border border-[#D4AF37]/50 z-20" />
                    </div>
                </div>
            </motion.div>

            {/* The Sleeve (Front) */}
            <motion.div
                className="relative z-10 bg-[#1B1F24] rounded-2xl overflow-hidden shadow-2xl border border-white/5 aspect-square"
                variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.02 }
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
                <img 
                    src={coverUrl} 
                    alt={title}
                    className="w-full h-full object-cover group-hover/vinyl:brightness-95 transition-all duration-300 pointer-events-none"
                />
                
                {/* Glossy sheen overlay on the sleeve */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-20" />
            </motion.div>
        </motion.div>
    );
}
