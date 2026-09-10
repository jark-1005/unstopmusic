import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function VinylArtwork({ coverUrl, title, artist, isPlaying: initialPlaying = false, className = "" }) {
    const [isPlaying, setIsPlaying] = useState(initialPlaying);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`relative w-full max-w-[620px] mx-auto select-none ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* 
              Safe Stage: The container allocates 100% width.
              The sleeve occupies 72% width on the left.
              The disc slides out by up to 34% within the remaining 28% width.
              Result: Disc NEVER extends past container bounds or overlaps neighboring columns.
            */}
            <div className="relative aspect-[1.32/1] w-full flex items-center">

                {/* The Vinyl Disc (Behind the Sleeve) */}
                <motion.div
                    className="absolute top-[4%] bottom-[4%] left-[3%] aspect-square rounded-full bg-gradient-to-tr from-[#0b0b0d] via-[#1A1A1D] to-[#121214] flex items-center justify-center shadow-2xl z-0"
                    style={{
                        boxShadow: "0 10px 40px rgba(0,0,0,0.9), inset 0 0 20px rgba(0,0,0,0.95), 0 0 15px rgba(238,232,170,0.15)",
                    }}
                    animate={{
                        x: isHovered || isPlaying ? "32%" : "8%",
                        rotate: isPlaying || isHovered ? 360 : 0,
                    }}
                    transition={{
                        x: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                        rotate: { 
                            duration: 8, 
                            ease: "linear", 
                            repeat: isPlaying || isHovered ? Infinity : 0 
                        }
                    }}
                >
                    {/* Concentric Vinyl Grooves */}
                    <div className="absolute inset-1.5 rounded-full border border-white/5 opacity-80" />
                    <div className="absolute inset-4 rounded-full border border-white/5 opacity-70" />
                    <div className="absolute inset-8 rounded-full border border-white/5 opacity-60" />
                    <div className="absolute inset-12 rounded-full border border-white/5 opacity-50" />
                    <div className="absolute inset-16 rounded-full border border-white/5 opacity-40" />
                    <div className="absolute inset-20 rounded-full border border-white/5 opacity-30" />
                    
                    {/* Realistic Light Reflection Sheen on Grooves */}
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none opacity-40 rotate-45" />

                    {/* Vinyl Center Sticker (Classic Vinyl Analog Brand / Cover) */}
                    <div className="w-[34%] h-[34%] rounded-full bg-gradient-to-br from-[#EEE8AA] via-[#A0522D] to-[#367588] p-[2px] z-10 shadow-xl relative flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-[#1A1A1D] overflow-hidden flex items-center justify-center relative">
                            {coverUrl ? (
                                <img 
                                    src={coverUrl} 
                                    alt="" 
                                    className="w-full h-full object-cover opacity-60 absolute inset-0 pointer-events-none scale-110"
                                />
                            ) : null}
                            
                            {/* Spindle hole & metallic ring */}
                            <div className="w-3.5 h-3.5 rounded-full bg-[#121214] border-2 border-[#EEE8AA] z-20 shadow-inner" />
                        </div>
                    </div>
                </motion.div>

                {/* The Sleeve (Front Artwork) */}
                <motion.div
                    className="relative z-10 w-[72%] aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 bg-[#161f26]"
                    animate={{
                        scale: isHovered ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    <img 
                        src={coverUrl} 
                        alt={title || "Album Cover"}
                        className="w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out"
                    />
                    
                    {/* Realistic Glossy Vinyl Jacket Texture & Sheen */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-white/5 to-white/10 pointer-events-none z-10" />
                    <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-10" />
                    
                    {/* Interactive Play/Pause Trigger */}
                    <button
                        type="button"
                        onClick={() => setIsPlaying(!isPlaying)}
                        aria-label={isPlaying ? "Pause vinyl" : "Play vinyl"}
                        className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-20 w-11 h-11 md:w-13 md:h-13 rounded-full bg-[#1A1A1D]/80 backdrop-blur-md border border-[#EEE8AA]/40 text-white flex items-center justify-center hover:bg-[#EEE8AA] hover:text-[#1A1A1D] hover:scale-110 transition-all shadow-lg group/play cursor-pointer"
                    >
                        {isPlaying ? (
                            <Pause className="w-5 h-5 fill-current" />
                        ) : (
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                        )}
                    </button>
                </motion.div>

            </div>
        </div>
    );
}
