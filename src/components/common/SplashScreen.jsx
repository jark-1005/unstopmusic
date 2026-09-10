import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, ArrowRight, Sparkles, Disc } from "lucide-react";

export default function SplashScreen({ onComplete }) {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    // Check for prefers-reduced-motion
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
        const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Keyboard listener (Escape or Space or Enter to skip)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
                onComplete();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onComplete]);

    // Progress counter and timeline
    useEffect(() => {
        const duration = 4500; // 4.5s total intro runtime
        const intervalTime = 30;
        const increment = 100 / (duration / intervalTime);

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(() => onComplete(), 150);
                    return 100;
                }
                return next;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [onComplete]);

    // Lightweight Canvas Audio Equalizer
    useEffect(() => {
        if (prefersReducedMotion) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animationId;
        let start = null;

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return;
            canvas.width = rect.width * (window.devicePixelRatio || 1);
            canvas.height = rect.height * (window.devicePixelRatio || 1);
            ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const draw = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;

            const displayWidth = canvas.width / (window.devicePixelRatio || 1);
            const displayHeight = canvas.height / (window.devicePixelRatio || 1);

            ctx.clearRect(0, 0, displayWidth, displayHeight);

            // Equalizer Bars across the visualizer
            const barCount = 28;
            const barWidth = 3;
            const gap = 6;
            const totalWidth = barCount * gap;
            const startX = (displayWidth - totalWidth) / 2;

            for (let i = 0; i < barCount; i++) {
                const norm = i / barCount;
                const freqAmp = Math.sin(norm * Math.PI * 2.5 + elapsed * 0.006) * 0.5 + 0.5;
                const dynamicNoise = Math.sin(i * 1.8 + elapsed * 0.009) * 0.25;
                const barHeight = Math.max(4, (freqAmp + dynamicNoise) * (displayHeight * 0.75));
                const x = startX + i * gap;
                const y = (displayHeight - barHeight) / 2;

                ctx.fillStyle = i % 2 === 0 ? "#EEE8AA" : "#367588";
                ctx.beginPath();
                ctx.roundRect(x, y, barWidth, barHeight, 1.5);
                ctx.fill();
            }

            animationId = requestAnimationFrame(draw);
        };

        animationId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [prefersReducedMotion]);

    const toggleAudio = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const customEase = [0.16, 1, 0.3, 1];

    return (
        <motion.div
            key="grand-splash-screen"
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0, 
                scale: 0.98,
                transition: { duration: 0.45, ease: customEase } 
            }}
            className="fixed inset-0 w-screen h-screen max-h-[100dvh] z-[99999] overflow-hidden bg-[#0d0d0f] text-[#EBECF0] flex flex-col justify-between py-3 sm:py-5 px-4 sm:px-8 select-none pointer-events-auto"
            style={{
                transform: "translate3d(0,0,0)",
                backfaceVisibility: "hidden",
                willChange: "opacity, transform"
            }}
        >
            {/* 1. LIGHTWEIGHT GPU-ACCELERATED MESH LIGHTING */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                {/* Fast CSS Radial Glows (No blur filters) */}
                <div className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(54,117,136,0.18)_0%,transparent_70%)]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(160,82,45,0.18)_0%,transparent_70%)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(238,232,170,0.1)_0%,transparent_70%)]" />

                {/* Subtle Studio Anamorphic Horizon Line */}
                <div className="absolute top-1/2 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#EEE8AA]/20 to-transparent" />
            </div>

            {/* 2. TOP HUD NAVIGATION DECK */}
            <div className="relative z-30 w-full max-w-6xl mx-auto flex items-center justify-between shrink-0">
                {/* Left Brand Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
                    className="flex items-center gap-2.5 bg-black/50 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full shadow-lg"
                >
                    <div className="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                        <img src="/unstoppable.png" alt="Unstoppable" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-mono text-[9px] sm:text-xs tracking-[0.2em] text-[#EEE8AA] uppercase font-semibold">
                        MASTER // 96kHz HI-RES
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EEE8AA] animate-ping" />
                </motion.div>

                {/* Right Action Controls: Audio Mute & Skip Intro Button */}
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: customEase }}
                    className="flex items-center gap-2.5"
                >
                    {/* Audio Toggle */}
                    <button
                        type="button"
                        onClick={toggleAudio}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:border-[#EEE8AA]/50 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
                        aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                    >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-400" /> : <Volume2 className="w-3.5 h-3.5 text-[#EEE8AA]" />}
                    </button>

                    {/* Skip Intro Button */}
                    <button
                        type="button"
                        onClick={onComplete}
                        className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#EEE8AA]/20 via-[#EEE8AA]/10 to-transparent hover:from-[#EEE8AA] hover:to-[#E6D88A] border border-[#EEE8AA]/40 text-[#EEE8AA] hover:text-[#1A1A1D] px-4 sm:px-5 py-2 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
                    >
                        <span>Skip Intro</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>

            {/* 3. CENTER STAGE: LOGO ANIMATION & CINEMATIC IDENTITY */}
            <div className="relative z-20 flex flex-col items-center justify-center max-w-4xl mx-auto w-full my-auto py-1">
                
                {/* Video Stage Frame with Glass & Gold Bevel (Height-bounded for all laptop/desktop screens) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: customEase }}
                    className="relative w-[32vh] max-w-[260px] sm:max-w-[300px] md:max-w-[340px] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden p-[2px] bg-gradient-to-b from-[#EEE8AA]/50 via-white/10 to-[#367588]/40 shadow-[0_15px_45px_rgba(0,0,0,0.8),0_0_25px_rgba(238,232,170,0.15)] group shrink-0"
                >
                    <div className="w-full h-full bg-[#121215] rounded-[18px] sm:rounded-[22px] overflow-hidden relative flex items-center justify-center">
                        
                        {/* Video Player */}
                        <video
                            ref={videoRef}
                            src="/Music_label_logo_animation_20260910152531.mp4"
                            poster="/unstoppable_music_logo.png"
                            autoPlay
                            loop
                            muted={isMuted}
                            playsInline
                            className="w-full h-full object-cover relative z-10"
                        />

                        {/* Glass subtle sheen */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/10 pointer-events-none z-20" />
                        
                        {/* Corner Studio Framing Markers */}
                        <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t-2 border-l-2 border-[#EEE8AA]/70 z-30 pointer-events-none" />
                        <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t-2 border-r-2 border-[#EEE8AA]/70 z-30 pointer-events-none" />
                        <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b-2 border-l-2 border-[#EEE8AA]/70 z-30 pointer-events-none" />
                        <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b-2 border-r-2 border-[#EEE8AA]/70 z-30 pointer-events-none" />
                    </div>
                </motion.div>

                {/* Grand Brand Editorial Title */}
                <div className="mt-3 sm:mt-4 text-center space-y-1.5 shrink-0">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
                        className="space-y-0.5"
                    >
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase text-white leading-tight">
                            UNST<span className="text-red-500">O</span>PPABLE <span className="text-gradient-accent">MUSIC</span>
                        </h1>
                        <p className="font-mono text-[8.5px] sm:text-[10.5px] tracking-[0.25em] text-slate-400 uppercase font-light">
                            INDEPENDENT SOUND • UNRESTRICTED CREATIVITY
                        </p>
                    </motion.div>

                    {/* Center Equalizer Canvas Visualizer */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="w-48 sm:w-64 h-6 sm:h-7 mx-auto mt-1.5 overflow-hidden relative flex items-center justify-center"
                    >
                        <canvas ref={canvasRef} className="w-full h-full opacity-80" />
                    </motion.div>
                </div>
            </div>

            {/* 4. BOTTOM HUD PROGRESS DECK & INTERACTION DOCK */}
            <div className="relative z-30 w-full max-w-4xl mx-auto pb-1 sm:pb-2 space-y-2 shrink-0">
                
                {/* Audio Progress Meter */}
                <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <div className="flex items-center gap-1.5">
                            <Disc className="w-3 h-3 text-[#EEE8AA] animate-spin" style={{ animationDuration: "6s" }} />
                            <span className="tracking-wider text-slate-300 uppercase font-medium text-[10px] sm:text-xs">Sonic Stream Initialized</span>
                        </div>
                        <span className="text-[#EEE8AA] font-bold font-mono tracking-widest text-[10px] sm:text-xs">
                            {Math.min(100, Math.round(progress)).toString().padStart(2, "0")}%
                        </span>
                    </div>

                    {/* Progress bar line */}
                    <div className="w-full h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden p-[1px] relative">
                        <div
                            className="h-full bg-gradient-to-r from-[#367588] via-[#EEE8AA] to-[#F7F2CB] rounded-full transition-all duration-75 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Bottom Sub-info / Enter Trigger */}
                <div className="flex items-center justify-between pt-0.5">
                    <div className="hidden sm:flex items-center gap-2.5 text-[9px] font-mono tracking-[0.2em] text-slate-500 uppercase">
                        <span>432Hz</span>
                        <span>•</span>
                        <span>PRESS SPACE TO ENTER</span>
                    </div>

                    {/* Interactive Enter Soundscape Button */}
                    <button
                        type="button"
                        onClick={onComplete}
                        className="ml-auto inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono tracking-widest text-[#EEE8AA] hover:text-white uppercase group/enter cursor-pointer py-0.5 px-2.5 rounded-lg hover:bg-white/5 transition-all"
                    >
                        <Sparkles className="w-3 h-3 text-[#EEE8AA] group-hover/enter:rotate-12 transition-transform" />
                        <span>ENTER SOUNDSCAPE</span>
                        <ArrowRight className="w-3 h-3 group-hover/enter:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

        </motion.div>
    );
}