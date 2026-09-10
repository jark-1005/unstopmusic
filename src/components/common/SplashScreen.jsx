import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, ArrowRight, Sparkles, Disc, Radio, Sliders } from "lucide-react";

export default function SplashScreen({ onComplete }) {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    // Check for prefers-reduced-motion
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
        const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Handle skip or finish
    const handleComplete = () => {
        if (isExiting) return;
        setIsExiting(true);
        setTimeout(() => {
            onComplete();
        }, 700);
    };

    // Keyboard listener (Escape or Space to skip)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
                handleComplete();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isExiting]);

    // Progress counter and timeline
    useEffect(() => {
        const duration = 4800; // 4.8s total intro runtime
        const intervalTime = 30;
        const increment = 100 / (duration / intervalTime);

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(() => handleComplete(), 200);
                    return 100;
                }
                return next;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, []);

    // Canvas Audio Waveform & Frequency Bars
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
            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const draw = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;

            const displayWidth = canvas.width / window.devicePixelRatio;
            const displayHeight = canvas.height / window.devicePixelRatio;

            ctx.clearRect(0, 0, displayWidth, displayHeight);

            // Equalizer Bars across the visualizer
            const barCount = 36;
            const barWidth = 3;
            const totalWidth = barCount * 6;
            const startX = (displayWidth - totalWidth) / 2;

            for (let i = 0; i < barCount; i++) {
                const norm = i / barCount;
                const freqAmp = Math.sin(norm * Math.PI * 3 + elapsed * 0.005) * 0.5 + 0.5;
                const dynamicNoise = Math.sin(i * 1.5 + elapsed * 0.008) * 0.3;
                const barHeight = Math.max(4, (freqAmp + dynamicNoise) * (displayHeight * 0.75));
                const x = startX + i * 6;
                const y = (displayHeight - barHeight) / 2;

                const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
                gradient.addColorStop(0, "#EEE8AA");
                gradient.addColorStop(0.5, "#367588");
                gradient.addColorStop(1, "#A0522D");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.roundRect(x, y, barWidth, barHeight, 2);
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
        <AnimatePresence>
            {!isExiting && (
                <motion.div
                    key="grand-splash-screen"
                    initial={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0, 
                        scale: 1.05, 
                        filter: "blur(12px)",
                        transition: { duration: 0.7, ease: customEase } 
                    }}
                    className="fixed inset-0 w-screen h-[100dvh] z-[99999] overflow-hidden bg-[#0d0d0f] text-[#EBECF0] flex flex-col justify-between select-none pointer-events-auto"
                >
                    {/* 1. CINEMATIC AMBIENT LIGHTING & DYNAMIC BACKDROPS */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                        {/* Background Video Blur Layer for deep atmospheric aura */}
                        <video
                            src="/Music_label_logo_animation_20260910152531.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover scale-150 blur-3xl opacity-20 filter saturate-150"
                        />

                        {/* Radial atmospheric glows */}
                        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#367588]/20 blur-[180px] rounded-full" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[850px] h-[850px] bg-[#A0522D]/20 blur-[190px] rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EEE8AA]/10 blur-[220px] rounded-full" />

                        {/* Subtle Studio Anamorphic Horizon Line */}
                        <div className="absolute top-1/2 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#EEE8AA]/25 to-transparent" />
                        
                        {/* Film Grain Texture */}
                        <div className="absolute inset-0 cinematic-grain opacity-25" />
                    </div>

                    {/* 2. TOP HUD NAVIGATION DECK */}
                    <div className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-10 pt-6 sm:pt-8 flex items-center justify-between">
                        {/* Left Brand Badge */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
                            className="flex items-center gap-3.5 bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-2xl"
                        >
                            <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center">
                                <img src="/unstoppable.png" alt="Unstoppable" className="w-full h-full object-contain" />
                            </div>
                            <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-[#EEE8AA] uppercase font-semibold">
                                MASTER // HI-RES 96kHz
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EEE8AA] animate-ping" />
                        </motion.div>

                        {/* Right Action Controls: Audio Mute & Skip Intro Button */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: customEase }}
                            className="flex items-center gap-3"
                        >
                            {/* Audio Toggle */}
                            <button
                                type="button"
                                onClick={toggleAudio}
                                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 hover:border-[#EEE8AA]/50 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer hover:scale-105 active:scale-95"
                                aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                            >
                                {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-[#EEE8AA]" />}
                            </button>

                            {/* Skip Intro Button */}
                            <button
                                type="button"
                                onClick={handleComplete}
                                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#EEE8AA]/20 via-[#EEE8AA]/10 to-transparent hover:from-[#EEE8AA] hover:to-[#E6D88A] border border-[#EEE8AA]/40 text-[#EEE8AA] hover:text-[#1A1A1D] px-5 sm:px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-xl transition-all duration-300 shadow-[0_4px_20px_rgba(238,232,170,0.15)] hover:shadow-[0_4px_30px_rgba(238,232,170,0.4)] cursor-pointer hover:scale-105 active:scale-95"
                            >
                                <span>Skip Intro</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                    {/* 3. CENTER STAGE: GRAND LOGO ANIMATION & CINEMATIC IDENTITY */}
                    <div className="relative z-20 flex-grow flex flex-col items-center justify-center px-4 sm:px-6 max-w-5xl mx-auto w-full my-auto">
                        
                        {/* Video Stage Frame with Glass Hologram & Gold Bevel */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.88, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.0, delay: 0.2, ease: customEase }}
                            className="relative w-full max-w-[420px] sm:max-w-[500px] md:max-w-[560px] aspect-square rounded-3xl overflow-hidden p-[2px] bg-gradient-to-b from-[#EEE8AA]/50 via-white/10 to-[#367588]/40 shadow-[0_20px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(238,232,170,0.2)] group"
                        >
                            <div className="w-full h-full bg-[#121215] rounded-[22px] overflow-hidden relative flex items-center justify-center">
                                
                                {/* Video Player */}
                                <video
                                    ref={videoRef}
                                    src="/Music_label_logo_animation_20260910152531.mp4"
                                    poster="/unstoppable_music_logo.png"
                                    autoPlay
                                    loop
                                    muted={isMuted}
                                    playsInline
                                    onLoadedData={() => setVideoLoaded(true)}
                                    className="w-full h-full object-cover relative z-10"
                                />

                                {/* Glass reflection overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none z-20" />
                                
                                {/* Corner Studio Framing Markers */}
                                <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-[#EEE8AA]/70 z-30 pointer-events-none" />
                                <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-[#EEE8AA]/70 z-30 pointer-events-none" />
                                <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-[#EEE8AA]/70 z-30 pointer-events-none" />
                                <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-[#EEE8AA]/70 z-30 pointer-events-none" />
                            </div>
                        </motion.div>

                        {/* Grand Brand Editorial Title */}
                        <div className="mt-8 sm:mt-10 text-center space-y-3">
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.4, ease: customEase }}
                                className="space-y-1"
                            >
                                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-white leading-none">
                                    UNST<span className="text-red-500">O</span>PPABLE <span className="text-gradient-accent">MUSIC</span>
                                </h1>
                                <p className="font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.35em] text-slate-400 uppercase font-light pt-1">
                                    INDEPENDENT SOUND • UNRESTRICTED CREATIVITY
                                </p>
                            </motion.div>

                            {/* Center Equalizer Canvas Visualizer */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="w-64 sm:w-80 h-10 mx-auto mt-4 overflow-hidden relative flex items-center justify-center"
                            >
                                <canvas ref={canvasRef} className="w-full h-full opacity-80" />
                            </motion.div>
                        </div>
                    </div>

                    {/* 4. BOTTOM HUD PROGRESS DECK & INTERACTION DOCK */}
                    <div className="relative z-30 w-full max-w-5xl mx-auto px-6 sm:px-10 pb-6 sm:pb-8 space-y-4">
                        
                        {/* Audio Progress Meter */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                                <div className="flex items-center gap-2">
                                    <Disc className="w-3.5 h-3.5 text-[#EEE8AA] animate-spin" style={{ animationDuration: "6s" }} />
                                    <span className="tracking-wider text-slate-300 uppercase font-medium">Sonic Stream Initialized</span>
                                </div>
                                <span className="text-[#EEE8AA] font-bold font-mono tracking-widest">
                                    {Math.min(100, Math.round(progress)).toString().padStart(2, "0")}%
                                </span>
                            </div>

                            {/* Progress bar line */}
                            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-[1px] relative shadow-inner">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-[#367588] via-[#EEE8AA] to-[#F7F2CB] rounded-full shadow-[0_0_15px_rgba(238,232,170,0.8)]"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>

                        {/* Bottom Sub-info / Enter Trigger */}
                        <div className="flex items-center justify-between pt-1">
                            <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase">
                                <span>FREQUENCY: 432Hz</span>
                                <span>•</span>
                                <span>BUFFER: STABLE</span>
                                <span>•</span>
                                <span>PRESS SPACE TO ENTER</span>
                            </div>

                            {/* Interactive Enter Soundscape Button */}
                            <button
                                type="button"
                                onClick={handleComplete}
                                className="ml-auto inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#EEE8AA] hover:text-white uppercase group/enter cursor-pointer py-1 px-3 rounded-lg hover:bg-white/5 transition-all"
                            >
                                <Sparkles className="w-3.5 h-3.5 text-[#EEE8AA] group-hover/enter:rotate-12 transition-transform" />
                                <span>ENTER SOUNDSCAPE</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover/enter:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}