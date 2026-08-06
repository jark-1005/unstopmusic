import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onComplete }) {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animationId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Canvas Particle Class (Cinematic Gold Dust)
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height + 20;
                this.size = Math.random() * 2 + 0.4;
                this.speedY = -(Math.random() * 0.4 + 0.15); // slow rising
                this.speedX = (Math.random() - 0.5) * 0.2;  // subtle drift
                this.opacity = Math.random() * 0.4 + 0.1;
                this.oscillationSpeed = Math.random() * 0.02 + 0.005;
                this.oscillationAmount = Math.random() * 0.5;
                this.time = Math.random() * 100;
            }

            update() {
                this.y += this.speedY;
                this.time += this.oscillationSpeed;
                this.x += this.speedX + Math.sin(this.time) * this.oscillationAmount;

                // Recycle particle on exit
                if (this.y < -20) {
                    this.y = canvas.height + 20;
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
                ctx.shadowBlur = 4;
                ctx.shadowColor = "rgba(212, 175, 55, 0.6)";
                ctx.fill();
            }
        }

        const particles = Array.from({ length: 45 }, () => new Particle());

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.update();
                p.draw();
            });
            animationId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Start unmuted
        video.muted = false;
        video.defaultMuted = false;

        const handleVideoError = (e) => {
            console.error("Intro video load failed, skipping splash:", e);
            triggerExit();
        };
        video.addEventListener("error", handleVideoError);

        // Trigger play programmatically only after the video can play
        const handleCanPlay = () => {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch((err) => {
                    console.warn("Autoplay unmuted blocked, falling back to muted:", err);
                    // Fallback to muted playback so splash screen still functions
                    video.muted = true;
                    video.defaultMuted = true;
                    video.play().catch((playErr) => {
                        console.error("Autoplay muted also failed, skipping intro splash:", playErr);
                        triggerExit();
                    });
                });
            }
        };
        video.addEventListener("canplay", handleCanPlay);

        // Hard safety timeout of 9s to prevent black screen lockouts (adjusted for 1s extra buffer)
        const safetyTimeout = setTimeout(() => {
            console.log("Intro safety timeout triggered.");
            triggerExit();
        }, 9000);

        return () => {
            video.removeEventListener("error", handleVideoError);
            video.removeEventListener("canplay", handleCanPlay);
            clearTimeout(safetyTimeout);
        };
    }, [onComplete]);

    // Extracted transition logic with increased animation and delay duration (1.8s total window)
    const triggerExit = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
                onComplete();
            }, 1800); // Increased timeout duration to give an extra ~1 second of smooth breathing room
        }
    };

    // Watch video timing to trigger cinematic dissolve slightly earlier or right on time
    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video) return;

        // Trigger transition right when the video hits the last 0.8s
        if (video.duration && video.currentTime >= video.duration - 0.8) {
            triggerExit();
        }
    };

    const handleVideoEnded = () => {
        triggerExit();
    };

    return (
        <motion.div
            initial={{ opacity: 1, scale: 1, filter: "brightness(1) blur(0px)" }}
            animate={
                isTransitioning
                    ? {
                        opacity: 0,
                        scale: 1.08,
                        filter: "brightness(1.2) blur(12px)",
                    }
                    : {
                        opacity: 1,
                        scale: 1,
                        filter: "brightness(1) blur(0px)"
                    }
            }
            // Transition duration extended to 1.8s for a slower, smoother, luxury fade effect
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="fixed inset-0 w-screen h-[100dvh] z-[9999] bg-black overflow-hidden select-none pointer-events-auto"
            style={{
                transform: "translateZ(0)",
                willChange: "opacity, transform, filter"
            }}
        >
            {/* Ambient Blurred Background Video (Mobile Only) */}
            <video
                src="/intro.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-105 pointer-events-none md:hidden"
            />

            {/* The Video Source */}
            <video
                ref={videoRef}
                src="/intro.mp4"
                autoPlay
                playsInline
                className="absolute inset-0 w-full h-full object-contain md:object-cover md:object-center z-10"
                style={{ transform: "translateZ(0)" }}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnded}
            />

            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-10" />

            {/* Soft Ambient Gold Glow Center */}
            <div className="absolute inset-0 bg-gold-radial-glow pointer-events-none z-10" />

            {/* Cinematic Moving Grain Overlay */}
            <div className="absolute inset-0 cinematic-grain pointer-events-none z-20" />

            {/* Rising Gold Spark Particles */}
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-30 opacity-70" />
        </motion.div>
    );
}