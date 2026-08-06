import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Send } from "lucide-react";
import { navLinks } from "../../data/navbar";
import { useIntro } from "../../context/IntroContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const location = useLocation();
    const { isIntroPlaying } = useIntro();
    const [shouldAnimate] = useState(() => !sessionStorage.getItem("introPlayed"));
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide on scroll down, show on scroll up
            if (currentScrollY < 50) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        // Initial run
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navbar */}
            <motion.header
                initial={shouldAnimate ? { opacity: 0, y: -100 } : { opacity: 1, y: 0 }}
                animate={
                    isIntroPlaying
                        ? { opacity: 0, y: -100 }
                        : isVisible
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: -100 }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed top-4 left-0 right-0 z-50 px-3 md:px-8 max-w-7xl mx-auto w-full min-w-0"
            >
                <nav className="glass-panel rounded-full px-3 py-2 md:px-6 md:py-3 flex items-center justify-between shadow-2xl min-w-0 w-full">
                    {/* Brand Logo */}
                    <Link to="/" className="flex items-center group shrink-0 min-w-0">
                        <div className="relative flex items-center h-10 min-[375px]:h-12 md:h-16 lg:h-20 w-auto shrink-0 min-w-0">
                            <img
                                src="/unstoppable.png"
                                alt="Unstoppable Music Logo"
                                className="h-full w-auto max-w-[150px] min-[375px]:max-w-[170px] md:max-w-[210px] lg:max-w-[260px] object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.6)] shrink-0"
                            />
                        </div>
                    </Link>

                    {/* Links */}
                    <div className="hidden lg:flex items-center gap-1 bg-[#1B1F24]/80 rounded-full p-1.5 border border-white/5">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${isActive
                                        ? "bg-gradient-to-r from-[#D4AF37] to-[#F5D97A] text-[#111827] shadow-lg shadow-[#D4AF37]/20"
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{link.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA Button */}
                    <Link
                        to="/contact"
                        className="flex items-center gap-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F5D97A] text-[#111827] font-bold text-[10px] min-[375px]:text-xs sm:text-sm px-3 min-[375px]:px-4 py-2 sm:py-2.5 rounded-full hover:brightness-110 shadow-lg shadow-[#D4AF37]/20 transition-all hover:scale-105 cursor-pointer shrink-0"
                    >
                        <span>Let's Connect</span>
                        <Send className="w-3 h-3 min-[375px]:w-3.5 min-[375px]:h-3.5" />
                    </Link>
                </nav>
            </motion.header>

            {/* Mobile Bottom Navigation */}
            <AnimatePresence>
                {!isIntroPlaying && (
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 80, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: shouldAnimate ? 0.6 : 0 }}
                        className="fixed bottom-3 left-2.5 right-2.5 z-50 w-auto max-w-full lg:hidden"
                    >
                        <div className="glass-panel rounded-2xl p-1.5 flex items-center justify-between shadow-2xl border border-white/10 gap-0.5 w-full">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`flex flex-col items-center gap-1 py-1 px-0.5 rounded-xl transition-all duration-300 relative flex-1 min-w-0 text-center select-none ${isActive
                                            ? "text-[#D4AF37] font-semibold"
                                            : "text-slate-400 hover:text-[#F5E6C8]"
                                            }`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeBottomTabBg"
                                                className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/15 to-[#F5D97A]/15 border-t border-[#D4AF37]/40 rounded-xl -z-10"
                                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                            />
                                        )}
                                        <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-105 text-[#D4AF37]" : ""}`} />
                                        <span className="text-[8.5px] uppercase tracking-wider font-semibold truncate block w-full">{link.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}