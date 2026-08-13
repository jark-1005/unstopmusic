import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onComplete }) {
    const canvasRef = useRef(null);
    const [stage, setStage] = useState("signal"); // 'signal' | 'build' | 'brand' | 'wipe'
    const [isWiping, setIsWiping] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    // Check for prefers-reduced-motion
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = () => {
            setPrefersReducedMotion(mediaQuery.matches);
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Timeline control loop
    useEffect(() => {
        if (prefersReducedMotion) {
            setStage("brand");
            // Reduced motion: show static brand then fade out
            const fadeTimer = setTimeout(() => {
                setIsWiping(true);
                const completeTimer = setTimeout(() => {
                    onComplete();
                }, 800); // 800ms fade transition
                return () => clearTimeout(completeTimer);
            }, 1800);
            return () => clearTimeout(fadeTimer);
        }

        // Timeline for normal animation
        // Stage 1 (Signal): 0.0s - 0.8s
        // Stage 2 (Signal Builds): 0.8s - 1.6s
        // Stage 3 (Brand Reveal): 1.6s - 2.4s
        // Stage 4 (Wipe Transition): 2.4s - 3.2s
        const buildTimer = setTimeout(() => {
            setStage("build");
        }, 800);

        const brandTimer = setTimeout(() => {
            setStage("brand");
        }, 1600);

        const wipeTimer = setTimeout(() => {
            setStage("wipe");
            setIsWiping(true);
        }, 2400);

        const completeTimer = setTimeout(() => {
            onComplete();
        }, 3200);

        return () => {
            clearTimeout(buildTimer);
            clearTimeout(brandTimer);
            clearTimeout(wipeTimer);
            clearTimeout(completeTimer);
        };
    }, [prefersReducedMotion, onComplete]);

    // Canvas procedural waveform animation
    useEffect(() => {
        if (prefersReducedMotion || stage === "wipe") return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animationId;
        let start = null;

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            // Match internal scale to display size for crisp rendering
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

            // Audio waveform styles
            ctx.strokeStyle = "#FE7F2E"; // Site accent orange
            ctx.lineWidth = 1.5;
            const centerY = displayHeight / 2;

            const points = 120;
            ctx.beginPath();

            let baseAmp = 0;
            const timeScale = timestamp * 0.007;

            // Determine amplitude based on elapsed time within timeline
            if (elapsed < 800) {
                // Stage 1: grows from 0 to 4px
                const progress = elapsed / 800;
                baseAmp = progress * 4;
            } else if (elapsed < 1600) {
                // Stage 2: active waveform (4px to 14px)
                const progress = (elapsed - 800) / 800;
                baseAmp = 4 + progress * 10;
            } else {
                // Stage 3: collapses to 0 flat line over first half of brand reveal
                const progress = Math.min((elapsed - 1600) / 400, 1);
                baseAmp = 14 * (1 - progress);
            }

            for (let i = 0; i < points; i++) {
                const normX = i / (points - 1);
                const x = normX * displayWidth;
                
                // Sinusoidal envelope to taper waveform edges to 0
                const envelope = Math.sin(normX * Math.PI);

                // Multi-frequency wave formula
                let offset = Math.sin(normX * 10 + timeScale) * baseAmp;
                if (elapsed >= 800) {
                    offset += Math.sin(normX * 24 - timeScale * 1.6) * (baseAmp * 0.45);
                    offset += Math.sin(normX * 55 + timeScale * 2.2) * (baseAmp * 0.15);
                    
                    // Subtle dynamic jitter to mimic analog audio signals
                    offset += (Math.random() - 0.5) * (elapsed < 1600 ? 1.0 : 0.2);
                }

                const y = centerY + offset * envelope;

                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.stroke();

            // Render subtle terminal endpoints in Stages 1 & 2
            if (elapsed < 1600) {
                ctx.fillStyle = "rgba(254, 127, 46, 0.4)";
                ctx.fillRect(0, centerY - 3, 1, 7);
                ctx.fillRect(displayWidth - 1, centerY - 3, 1, 7);
            }

            animationId = requestAnimationFrame(draw);
        };

        animationId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [prefersReducedMotion, stage]);

    // Framer motion easing curve [easeOutExpo]
    const customEase = [0.16, 1, 0.3, 1];

    // Wipe layout configuration (matching transition time steps)
    const overlayAnimate = prefersReducedMotion
        ? (isWiping ? { opacity: 0 } : { opacity: 1 })
        : (isWiping ? { clipPath: ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(100% 0% 0% 0%)"] } : { clipPath: "inset(0% 0% 0% 0%)" });

    const overlayTransition = prefersReducedMotion
        ? { duration: 0.8, ease: "easeInOut" }
        : (isWiping 
            ? { times: [0, 0.2, 1], duration: 0.8, ease: ["easeInOut", customEase] }
            : { duration: 0.2 }
          );

    return (
        <div className="fixed inset-0 w-screen h-[100dvh] z-[9999] overflow-hidden select-none pointer-events-none">
            {/* The primary splash background container */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={overlayAnimate}
                transition={overlayTransition}
                className="absolute inset-0 bg-[#000000] w-full h-full pointer-events-auto flex items-center justify-center overflow-hidden"
                style={{
                    transform: "translateZ(0)",
                    willChange: "clip-path, opacity"
                }}
            >
                {/* Vintage static film grain layer */}
                <div className="absolute inset-0 cinematic-grain opacity-[0.02] pointer-events-none z-10" />

                {/* STAGES 1 & 2: SIGNAL COMPOSITION */}
                {stage !== "brand" && stage !== "wipe" && !prefersReducedMotion && (
                    <motion.div 
                        exit={{ opacity: 0 }}
                        className="w-full max-w-lg px-8 flex flex-col items-start space-y-6 z-20"
                    >
                        {/* Upper-left technical tag */}
                        <motion.span 
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: customEase }}
                            className="font-mono text-[10px] tracking-[0.25em] text-[#FE7F2E] uppercase"
                        >
                            001 / INDEPENDENT SOUND
                        </motion.span>

                        {/* Thin audio wave wrapper */}
                        <div className="w-full h-12 border-y border-white/[0.04] flex items-center relative overflow-hidden">
                            <canvas ref={canvasRef} className="w-full h-full opacity-90" />
                            
                            {/* Low opacity digital audio channel markers */}
                            <div className="absolute inset-x-2 inset-y-1 flex justify-between pointer-events-none opacity-20 text-[7px] font-mono text-[#FE7F2E] uppercase">
                                <span>L.CH</span>
                                <span>R.CH</span>
                            </div>
                        </div>

                        {/* Lower secondary status updates */}
                        <div className="w-full flex justify-between items-center font-mono text-[9px] tracking-[0.2em] text-[#FE7F2E]/60 h-4">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={stage === "build" ? { opacity: 0.8 } : { opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                A NEW FREQUENCY
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={stage === "build" ? { opacity: 0.8 } : { opacity: 0 }}
                                transition={{ duration: 0.4, delay: 0.15 }}
                                className="hidden sm:inline"
                            >
                                SIG_LOCK // PROG
                            </motion.span>
                        </div>
                    </motion.div>
                )}

                {/* STAGE 3 & 4: BRAND IDENTITY REVEAL */}
                {(stage === "brand" || stage === "wipe" || prefersReducedMotion) && (
                    <div className="relative w-full max-w-4xl px-8 flex flex-col items-center justify-center text-center z-20">
                        {/* Typographic Mask for UNSTOPPABLE */}
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.05, ease: customEase }}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7.5rem] font-black tracking-tighter uppercase leading-[0.8] text-white select-none"
                            >
                                UNSTOPPABLE
                            </motion.h1>
                        </div>

                        {/* Typographic Mask for MUSIC */}
                        <div className="overflow-hidden mt-2">
                            <motion.div
                                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.2, ease: customEase }}
                                className="flex items-center justify-center"
                            >
                                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] 2xl:text-[6.5rem] font-black tracking-tighter uppercase leading-[0.8] text-[#FE7F2E] select-none">
                                    MUSIC
                                </span>
                            </motion.div>
                        </div>

                        {/* Editorial divider line */}
                        <motion.div
                            initial={prefersReducedMotion ? { width: "100%" } : { width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.0, delay: 0.4, ease: customEase }}
                            className="h-[1.5px] bg-[#FE7F2E]/60 max-w-md my-6 md:my-8"
                        />

                        {/* Supporting record label details */}
                        <div className="overflow-hidden">
                            <motion.p
                                initial={prefersReducedMotion ? { opacity: 0.6, y: 0 } : { opacity: 0, y: 20 }}
                                animate={{ opacity: 0.6, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.55, ease: customEase }}
                                className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-[#EBECF0] uppercase"
                            >
                                INDEPENDENT • ORIGINAL • UNRESTRICTED
                            </motion.p>
                        </div>
                    </div>
                )}
            </motion.div>

            {/* STAGE 4: TRANSITION WIPE LINE (No motion check applies here to satisfy accessibility) */}
            {!prefersReducedMotion && isWiping && (
                <motion.div
                    initial={{ top: "50%" }}
                    animate={{ top: ["50%", "0%", "100%"] }}
                    transition={{
                        times: [0, 0.2, 1], // Glide to top, then sweep down
                        duration: 0.8,
                        ease: ["easeInOut", customEase]
                    }}
                    className="absolute left-0 right-0 h-[2px] bg-[#FE7F2E] z-[10000] shadow-[0_0_15px_rgba(254,127,46,0.85)]"
                    style={{ willChange: "top" }}
                />
            )}
        </div>
    );
}