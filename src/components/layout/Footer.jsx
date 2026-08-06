import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-transparent py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/5 pb-8 mb-8">
                {/* Left: Brand Logo */}
                <div className="flex items-center group">
                    <img 
                        src="/unstoppable.png" 
                        alt="Unstoppable Music Logo" 
                        className="h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_6px_rgba(212,175,55,0.3)] group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                    />
                </div>

                {/* Right: Social Media Links */}
                <div className="flex items-center gap-4">
                    <a 
                        href="https://x.com/UProductio86683" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all"
                    >
                        <FaTwitter className="w-4 h-4" />
                    </a>
                    <a 
                        href="https://www.instagram.com/unstoppable.production/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all"
                    >
                        <FaInstagram className="w-4 h-4" />
                    </a>
                    <a 
                        href="https://www.facebook.com/unstoppableproduction?mibextid=wwXIfr&mibextid=wwXIfr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all"
                    >
                        <FaFacebook className="w-4 h-4" />
                    </a>
                    <a 
                        href="https://www.youtube.com/@Unstoppableproduction" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all"
                    >
                        <FaYoutube className="w-4 h-4" />
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-wider text-slate-500 uppercase text-center md:text-left">
                <div>
                    <span className="font-bold text-slate-400">UNSTOPPABLE MUSIC</span> // COPYRIGHT © {new Date().getFullYear()}. ALL RIGHTS RESERVED.
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                    <Link to="/" className="hover:text-white transition-colors">
                        HOME
                    </Link>
                    <Link to="/music" className="hover:text-white transition-colors">
                        MUSIC
                    </Link>
                    <Link to="/contact" className="hover:text-white transition-colors">
                        LET'S CONNECT
                    </Link>
                </div>
            </div>
        </footer>
    );
}