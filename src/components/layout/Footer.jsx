import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#1A1A1D] py-14 relative overflow-hidden">
            {/* Subtle background warm ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#EEE8AA]/4 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1650px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/5 pb-10 mb-8 relative z-10">
                {/* Left: Official Unstoppable Music Brand Logo */}
                <Link to="/" className="flex items-center gap-4 group text-left">
                    <div className="w-16 h-16 md:w-20 md:h-20 aspect-square rounded-2xl flex items-center justify-center p-1 relative">
                        <img 
                            src="/unstoppable.png" 
                            alt="Unstoppable Music" 
                            className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(238,232,170,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(238,232,170,0.55)]"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl md:text-2xl font-black tracking-tight text-white uppercase group-hover:text-[#EEE8AA] transition-colors">
                            UNST<span className="text-red-500">O</span>PPABLE
                        </span>
                        <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#EEE8AA] uppercase">
                            MUSIC LABEL
                        </span>
                    </div>
                </Link>

                {/* Right: Social Media Links */}
                <div className="flex items-center gap-3">
                    <a 
                        href="https://x.com/UProductio86683" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="X (Twitter)"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#EEE8AA] hover:border-[#EEE8AA]/50 hover:bg-[#EEE8AA]/10 transition-all hover:scale-110"
                    >
                        <FaTwitter className="w-4 h-4" />
                    </a>
                    <a 
                        href="https://www.instagram.com/unstoppable.production/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#EEE8AA] hover:border-[#EEE8AA]/50 hover:bg-[#EEE8AA]/10 transition-all hover:scale-110"
                    >
                        <FaInstagram className="w-4 h-4" />
                    </a>
                    <a 
                        href="https://www.facebook.com/unstoppableproduction?mibextid=wwXIfr&mibextid=wwXIfr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#EEE8AA] hover:border-[#EEE8AA]/50 hover:bg-[#EEE8AA]/10 transition-all hover:scale-110"
                    >
                        <FaFacebook className="w-4 h-4" />
                    </a>
                    <a 
                        href="https://www.youtube.com/@Unstoppableproduction" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#EEE8AA] hover:border-[#EEE8AA]/50 hover:bg-[#EEE8AA]/10 transition-all hover:scale-110"
                    >
                        <FaYoutube className="w-4 h-4" />
                    </a>
                </div>
            </div>

            <div className="max-w-[1650px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono tracking-wider text-slate-500 uppercase text-center md:text-left relative z-10">
                <div>
                    <span className="font-bold text-slate-300">UNST<span className="text-red-500">O</span>PPABLE MUSIC</span> © {new Date().getFullYear()} ALL RIGHTS RESERVED.
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6">
                    <Link to="/" className="hover:text-white transition-colors">
                        Home
                    </Link>
                    <Link to="/music" className="hover:text-white transition-colors">
                        Music Catalog
                    </Link>
                    <Link to="/contact" className="hover:text-white transition-colors">
                        Let's Connect
                    </Link>
                </div>
            </div>
        </footer>
    );
}