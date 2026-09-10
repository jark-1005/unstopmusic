import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ArrowRight, 
    ArrowUpRight, 
    Target, 
    Eye, 
    Volume2, 
    Radio, 
    Sparkles, 
    Disc, 
    Headphones, 
    Mic2, 
    Compass, 
    Share2, 
    Play 
} from "lucide-react";
import FadeIn from "../../components/animations/FadeIn";
import PageTransition from "../../components/animations/PageTransition";
import ImageReveal from "../../components/animations/ImageReveal";
import AudioWaveform from "../../components/common/AudioWaveform";
import VinylArtwork from "../../components/cards/VinylArtwork";
import MagneticButton from "../../components/buttons/MagneticButton";
import { featuredReleases } from "../../data/music";

const UNSTOPPABLE_PRODUCTIONS_URL = "https://unstoppableproduction.com";

export default function Home() {
    const [selectedReleaseIndex, setSelectedReleaseIndex] = useState(0);
    const activeRelease = featuredReleases[selectedReleaseIndex] || featuredReleases[0];

    return (
        <PageTransition>
            <div className="bg-[#1A1A1D] text-[#EBECF0] font-sans antialiased overflow-hidden min-w-0 w-full relative selection:bg-[#EEE8AA] selection:text-[#1A1A1D]">

                {/* CINEMATIC BACKGROUND GLOWS & ATMOSPHERE */}
                <div className="absolute top-0 inset-x-0 h-[115vh] bg-gradient-to-b from-[#367588]/15 via-transparent to-transparent pointer-events-none -z-10" />
                <div className="absolute top-[12%] left-[-10%] w-[700px] h-[700px] bg-[#367588]/10 blur-[200px] rounded-full pointer-events-none -z-10" />
                <div className="absolute top-[35%] right-[-8%] w-[750px] h-[750px] bg-[#A0522D]/10 blur-[190px] rounded-full pointer-events-none -z-10" />
                <div className="absolute bottom-[20%] left-[-8%] w-[800px] h-[800px] bg-[#EEE8AA]/6 blur-[200px] rounded-full pointer-events-none -z-10" />

                {/* Subtle Cinematic Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#367588_1px,transparent_1px),linear-gradient(to_bottom,#367588_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none -z-10" />

                {/* ========================================================= */}
                {/* 01. HERO SECTION — WIDE CINEMATIC COMPOSITION             */}
                {/* ========================================================= */}
                <section className="relative min-h-[92vh] flex items-center pt-32 sm:pt-36 lg:pt-40 pb-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1680px] mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center w-full relative z-10">

                        {/* Left Column: Expanded Brand Statement & Primary CTA */}
                        <div className="lg:col-span-7 xl:col-span-7 space-y-8 md:space-y-10 text-left">
                            
                            {/* Official Brand Badge & Live Audio Signal */}
                            <motion.div
                                initial={{ opacity: 0, y: -12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-3.5 bg-[#367588]/30 border border-white/10 rounded-full px-4.5 py-2.5 backdrop-blur-md"
                            >
                                <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
                                    <img 
                                        src="/unstoppable.png" 
                                        alt="Unstoppable Music" 
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-200">
                                    Independent Music Label
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#EEE8AA] animate-ping" />
                                <AudioWaveform count={6} className="opacity-80" />
                            </motion.div>

                            {/* Main Editorial Typography (Scaled for Wide Displays) */}
                            <div className="relative space-y-2">
                                <motion.h1
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.8rem] 2xl:text-[7.8rem] font-black tracking-tighter uppercase leading-[0.82] text-white select-none"
                                >
                                    UNST<span className="text-red-500">O</span>PPABLE
                                </motion.h1>

                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex items-center gap-4 sm:gap-6"
                                >
                                    <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[6.0rem] 2xl:text-[7.0rem] font-black tracking-tighter uppercase leading-[0.82] text-gradient-accent select-none">
                                        MUSIC
                                    </span>
                                    <span className="hidden sm:inline-block h-1.5 w-24 md:w-36 bg-gradient-to-r from-[#EEE8AA] to-transparent rounded-full" />
                                </motion.div>
                            </div>

                            {/* Philosophy Description (Comfortable reading width) */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.35 }}
                                className="text-slate-300 text-base sm:text-lg md:text-xl xl:text-2xl max-w-2xl leading-relaxed font-light"
                            >
                                Independent sound. Unrestricted creativity. Music that moves beyond boundaries. We collaborate with original creators to engineer high-fidelity sonic experiences.
                            </motion.p>

                            {/* Actions */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.45 }}
                                className="flex flex-wrap items-center gap-5 pt-2"
                            >
                                <MagneticButton>
                                    <Link
                                        to="/music"
                                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#EEE8AA] via-[#F7F2CB] to-[#E6D88A] text-[#1A1A1D] font-black text-sm sm:text-base px-8 sm:px-11 py-4.5 rounded-full shadow-[0_10px_30px_rgba(238,232,170,0.25)] hover:shadow-[0_12px_45px_rgba(238,232,170,0.5)] transition-all duration-300 hover:scale-105"
                                    >
                                        <span>Explore Music</span>
                                        <ArrowRight className="w-5 h-5 shrink-0" />
                                    </Link>
                                </MagneticButton>

                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm sm:text-base font-semibold px-7 py-4.5 rounded-full border border-white/10 hover:border-[#EEE8AA]/40 hover:bg-white/5 transition-all"
                                >
                                    <span>Artists & Demos</span>
                                    <ArrowUpRight className="w-4 h-4 text-[#EEE8AA]" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right Column: Hero Visual Vinyl & Artwork (Expanded Scale) */}
                        <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end w-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.92 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                                className="w-full max-w-[480px] sm:max-w-[540px] md:max-w-[580px] lg:max-w-full flex justify-center lg:justify-end"
                            >
                                <VinylArtwork
                                    coverUrl="/unstoppable_music_logo.png"
                                    videoUrl="/Music_label_logo_animation_20260910152531.mp4"
                                    title="Unstoppable Music Identity"
                                    artist="Official Release"
                                    className="w-full max-w-[620px]"
                                />
                            </motion.div>
                        </div>

                    </div>
                </section>

                {/* ========================================================= */}
                {/* 02. MAIN CTA SECTION (Immediately after Hero)              */}
                {/* ========================================================= */}
                <section className="py-20 md:py-28 border-t border-white/5 bg-[#141416] relative overflow-hidden">
                    <div className="max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <FadeIn>
                            <div className="relative rounded-3xl bg-gradient-to-b from-[#367588]/25 to-[#1A1A1D]/80 border border-[#EEE8AA]/25 p-8 sm:p-12 md:p-16 lg:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden">
                                
                                {/* Ambient Background Glow */}
                                <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#EEE8AA]/8 blur-[140px] rounded-full pointer-events-none" />

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center relative z-10">
                                    <div className="lg:col-span-7 space-y-6 text-left">
                                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">
                                            STEP INTO THE <span className="text-gradient-accent">FREQUENCY.</span>
                                        </h2>
                                        <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-2xl font-light">
                                            Whether you're looking to stream official releases, audition as an independent artist, or collaborate on sonic engineering, Unst<span className="text-red-500">o</span>ppable Music is your launchpad.
                                        </p>
                                    </div>

                                    <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-5 w-full">
                                        <Link
                                            to="/music"
                                            className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#EEE8AA]/50 hover:bg-[#EEE8AA]/10 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-4 text-left">
                                                <div className="w-14 h-14 rounded-2xl bg-[#367588]/20 border border-[#367588]/40 flex items-center justify-center text-[#EEE8AA] group-hover:scale-110 transition-transform">
                                                    <Disc className="w-7 h-7" />
                                                </div>
                                                <div>
                                                    <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide">Explore The Catalog</h3>
                                                    <p className="text-xs sm:text-sm text-slate-400">Stream records, EPs & physical vinyl</p>
                                                </div>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#EEE8AA] group-hover:translate-x-1 transition-all" />
                                        </Link>

                                        <Link
                                            to="/contact"
                                            className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#EEE8AA]/50 hover:bg-[#EEE8AA]/10 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-4 text-left">
                                                <div className="w-14 h-14 rounded-2xl bg-[#367588]/20 border border-[#367588]/40 flex items-center justify-center text-[#EEE8AA] group-hover:scale-110 transition-transform">
                                                    <Mic2 className="w-7 h-7" />
                                                </div>
                                                <div>
                                                    <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide">Artist Collaboration</h3>
                                                    <p className="text-xs sm:text-sm text-slate-400">Submit demos & join the roster</p>
                                                </div>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#EEE8AA] group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* ========================================================= */}
                {/* 03. OPEN MIC EVENT — ANNOUNCING SOON (Third Section)       */}
                {/* ========================================================= */}
                <section className="py-28 md:py-36 border-t border-white/5 bg-[#1A1A1D] relative overflow-hidden">
                    
                    {/* Stage Lighting & Audio Visualizer Rays */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-[#EEE8AA]/10 via-[#A0522D]/8 to-transparent blur-[180px] rounded-full pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1A1A1D]/70 to-[#1A1A1D] pointer-events-none" />

                    <div className="max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
                        <FadeIn>
                            <div className="relative rounded-3xl border border-[#EEE8AA]/30 bg-gradient-to-b from-[#367588]/25 via-[#1A1A1D]/90 to-[#141416] p-8 sm:p-14 md:p-20 lg:p-24 shadow-[0_0_80px_rgba(238,232,170,0.12)] text-center overflow-hidden">
                                
                                {/* Top Status Beacon */}
                                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#EEE8AA]/10 border border-[#EEE8AA]/30 mb-8 backdrop-blur-sm">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EEE8AA] opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EEE8AA]" />
                                    </span>
                                    <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#EEE8AA] uppercase">
                                        UPCOMING CULTURAL EVENT
                                    </span>
                                </div>

                                {/* Event Announcement Editorial Typography */}
                                <div className="space-y-4 max-w-6xl mx-auto">
                                    <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11.5rem] font-black text-white uppercase tracking-tighter leading-none select-none">
                                        OPEN MIC
                                    </h2>
                                    <div className="flex items-center justify-center gap-4 sm:gap-8 pt-2">
                                        <span className="h-[2px] w-16 sm:w-32 bg-gradient-to-r from-transparent to-[#EEE8AA]" />
                                        <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-gradient-accent">
                                            ANNOUNCING SOON
                                        </span>
                                        <span className="h-[2px] w-16 sm:w-32 bg-gradient-to-l from-transparent to-[#EEE8AA]" />
                                    </div>
                                </div>

                                {/* Supporting Message */}
                                <p className="text-slate-300 text-base sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mt-8 sm:mt-10">
                                    A new stage for voices, stories, sounds, and emerging talent. Something exciting is coming to the Unst<span className="text-red-500">o</span>ppable Music community.
                                </p>

                                {/* Event Visual Pulse Waves */}
                                <div className="flex justify-center my-10 opacity-75">
                                    <AudioWaveform count={14} className="h-9" />
                                </div>

                                {/* Action Cue */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-2">
                                    <div className="inline-flex items-center gap-3 px-8 sm:px-10 py-4.5 rounded-full bg-white/5 border border-white/15 text-slate-300 font-bold text-sm tracking-wider uppercase backdrop-blur-md">
                                        <Radio className="w-4 h-4 text-[#EEE8AA] animate-pulse" />
                                        <span>Stay Tuned • Details Coming Soon</span>
                                    </div>

                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-400 hover:text-white px-6 py-4.5 transition-colors"
                                    >
                                        <span>Get In Touch Early</span>
                                        <ArrowRight className="w-4 h-4 text-[#EEE8AA]" />
                                    </Link>
                                </div>

                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* ========================================================= */}
                {/* 04. IDENTITY                                              */}
                {/* ========================================================= */}
                <section className="py-28 md:py-36 border-t border-white/5 bg-[#141416]/60 relative">
                    <div className="max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <FadeIn>
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
                                
                                {/* Left Big Typographic Statement */}
                                <div className="lg:col-span-8 space-y-6 text-left">
                                    <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black text-white leading-[0.92] uppercase tracking-tighter">
                                        WE DON'T JUST <br />
                                        <span className="flex flex-wrap items-center gap-4 my-1">
                                             <span>RELEASE</span>
                                             <span className="inline-block w-20 sm:w-28 md:w-36 lg:w-44 h-[42px] sm:h-[55px] md:h-[68px] lg:h-[80px] rounded-full overflow-hidden border border-[#EEE8AA]/40 bg-black shadow-lg">
                                                 <img
                                                     src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop"
                                                     alt="Recording Booth"
                                                     className="w-full h-full object-cover scale-110 pointer-events-none"
                                                 />
                                             </span>
                                             <span className="text-gradient-accent">MUSIC.</span>
                                         </span>
                                        WE BUILD ARTISTS.
                                    </h2>
                                </div>

                                {/* Right Narrative Column */}
                                <div className="lg:col-span-4 pt-4 lg:pt-16 space-y-8 text-left">
                                    <p className="text-slate-300 text-base md:text-xl leading-relaxed font-light">
                                        Unst<span className="text-red-500">o</span>ppable Music provides a creative sanctuary. We partner with vocalists, composers, producers, and rappers to distribute pure expressions directly to global audiences without structural restrictions.
                                    </p>
                                    
                                    <div className="pt-4 border-t border-white/10 space-y-4">
                                        <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-white">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#EEE8AA]" />
                                            <span>Pure Artistic Autonomy</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-white">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#EEE8AA]" />
                                            <span>High-Fidelity Sonic Engineering</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-white">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#EEE8AA]" />
                                            <span>Global Direct-to-Fan Channels</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* ========================================================= */}
                {/* 05. SELECTED DISCS (Zero Overlap & Generous Screen Width)  */}
                {/* ========================================================= */}
                <section className="py-28 md:py-36 border-t border-white/5 bg-[#1A1A1D] relative">
                    <div className="max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-16">

                        {/* Section Header */}
                        <FadeIn>
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="space-y-3 text-left">
                                    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight">
                                        SELECTED <span className="text-gradient-accent">DISCS</span>
                                    </h2>
                                    <p className="text-slate-400 text-base sm:text-lg max-w-xl">
                                        Featured physical pressings, conceptual albums, and original master recordings.
                                    </p>
                                </div>

                                <MagneticButton>
                                    <Link
                                        to="/music"
                                        className="inline-flex items-center gap-2.5 text-sm md:text-base font-bold text-[#EEE8AA] hover:text-[#FFF8DC] transition-colors shrink-0 group"
                                    >
                                        <span>Discover All Music</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </MagneticButton>
                            </div>
                        </FadeIn>

                        {/* Zero-Collision Showcase Grid (Expanded Width) */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">

                            {/* Left: Featured Vinyl Player Display (Expanded Scale) */}
                            <div className="lg:col-span-7 flex flex-col justify-center">
                                <FadeIn>
                                    <div className="space-y-6">
                                        {/* Vinyl Stage (Safe, isolated boundaries) */}
                                        <div className="w-full max-w-[560px] xl:max-w-[640px] mx-auto lg:mx-0">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={activeRelease.id}
                                                    initial={{ opacity: 0, scale: 0.96 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.96 }}
                                                    transition={{ duration: 0.4 }}
                                                >
                                                    <VinylArtwork
                                                        coverUrl={activeRelease.coverUrl}
                                                        title={activeRelease.title}
                                                        artist={activeRelease.artist}
                                                        className="w-full max-w-[640px]"
                                                    />
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>

                                        {/* Active Track Metadata */}
                                        <div className="space-y-2 text-left pt-3">
                                            <div className="flex items-center gap-3 text-xs sm:text-sm font-mono text-[#EEE8AA] tracking-wider uppercase">
                                                <span>{activeRelease.genre}</span>
                                                <span className="text-white/20">•</span>
                                                <span>{activeRelease.releaseDate}</span>
                                                <span className="text-white/20">•</span>
                                                <span>{activeRelease.bpm}</span>
                                            </div>
                                            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wide">
                                                {activeRelease.title}
                                            </h3>
                                            <p className="text-slate-400 font-medium text-lg sm:text-xl">
                                                {activeRelease.artist}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Right: Selectable Releases Stack */}
                            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 justify-center">
                                {featuredReleases.map((release, index) => {
                                    const isSelected = index === selectedReleaseIndex;
                                    return (
                                        <FadeIn key={release.id} delay={index * 0.1}>
                                            <div
                                                onClick={() => setSelectedReleaseIndex(index)}
                                                className={`flex items-center gap-5 p-4 sm:p-5 rounded-2xl border transition-all duration-300 text-left cursor-pointer group/item ${
                                                    isSelected
                                                        ? "bg-gradient-to-r from-[#367588]/35 to-white/5 border-[#EEE8AA]/60 shadow-[0_8px_30px_rgba(238,232,170,0.15)]"
                                                        : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.05]"
                                                }`}
                                            >
                                                {/* Cover Thumbnail */}
                                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-white/10 shrink-0 relative bg-zinc-900">
                                                    <img
                                                        src={release.coverUrl}
                                                        alt={release.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                                                    />
                                                    {isSelected && (
                                                        <div className="absolute inset-0 bg-[#EEE8AA]/20 flex items-center justify-center">
                                                            <div className="w-8 h-8 rounded-full bg-[#EEE8AA] text-[#1A1A1D] flex items-center justify-center shadow-lg">
                                                                <Play className="w-4 h-4 fill-current ml-0.5" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Track Details */}
                                                <div className="space-y-1 min-w-0 flex-1">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <span className="text-xs text-[#EEE8AA] font-semibold tracking-wide">
                                                            {release.genre}
                                                        </span>
                                                        <span className="text-xs font-mono text-slate-400">
                                                            {release.duration}
                                                        </span>
                                                    </div>
                                                    <h4 className={`text-base sm:text-xl font-bold uppercase truncate transition-colors ${
                                                        isSelected ? "text-white" : "text-slate-200 group-hover/item:text-white"
                                                    }`}>
                                                        {release.title}
                                                    </h4>
                                                    <p className="text-slate-400 text-sm sm:text-base truncate">
                                                        {release.artist}
                                                    </p>
                                                </div>

                                                {/* Active Indicator Arrow */}
                                                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all ${
                                                    isSelected 
                                                        ? "bg-[#EEE8AA] text-[#1A1A1D]" 
                                                        : "text-slate-500 group-hover/item:text-white group-hover/item:translate-x-1"
                                                }`}>
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </FadeIn>
                                    );
                                })}
                            </div>

                        </div>

                    </div>
                </section>

                {/* ========================================================= */}
                {/* 06. MANIFESTO                                             */}
                {/* ========================================================= */}
                <section className="relative py-28 md:py-36 border-t border-white/5 overflow-hidden bg-[#141416]">
                    <div className="max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 z-10 relative">
                        <FadeIn>
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">

                                {/* Monochrome Studio Photograph Left */}
                                <div className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                                    <ImageReveal className="w-full h-full">
                                        <img
                                            src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=900&auto=format&fit=crop"
                                            alt="Studio Session"
                                            className="w-full h-full object-cover filter grayscale contrast-125 opacity-80"
                                        />
                                    </ImageReveal>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
                                </div>

                                {/* Bold Storytelling Manifesto Right */}
                                <div className="lg:col-span-7 space-y-8 text-left">
                                    <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black text-white leading-[0.88] uppercase tracking-tighter">
                                        FOR THE ARTISTS <br />
                                        WHO REFUSE TO <br />
                                        SOUND LIKE <br />
                                        <span className="text-gradient-accent">EVERYONE ELSE.</span>
                                    </h2>

                                    <p className="text-slate-300 text-base md:text-xl xl:text-2xl leading-relaxed max-w-2xl font-light">
                                        We reject structural templates. Premium sound requires absolute experimentation, safety to build unique identity, and the platform to project. If your sonic horizon refuses to compromise, you belong here.
                                    </p>

                                    <div className="flex items-center gap-3 text-[#EEE8AA]">
                                        <Volume2 className="w-6 h-6 shrink-0" />
                                        <span className="text-sm sm:text-base font-semibold tracking-wider text-slate-200">
                                            UNCOMPROMISING SONIC INTEGRITY
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* ========================================================= */}
                {/* 07. VISION & MISSION                                      */}
                {/* ========================================================= */}
                <section className="py-28 md:py-36 border-t border-white/5 bg-[#1A1A1D] relative">
                    <div className="max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-16">

                        <FadeIn>
                            <div className="text-left space-y-3">
                                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight">
                                    OUR <span className="text-gradient-accent">DIRECTION</span>
                                </h2>
                                <p className="text-slate-400 text-base sm:text-lg max-w-xl">
                                    Anchored in creative autonomy, designed for long-term global resonance.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Split Clean Layout (Wider Cards) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 relative">

                            {/* Vision Column */}
                            <FadeIn direction="left">
                                <div className="space-y-6 text-left p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#EEE8AA]/30 transition-colors">
                                    <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-[#367588]/20 border border-[#367588]/40 flex items-center justify-center text-[#EEE8AA]">
                                            <Eye className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-black uppercase tracking-wide">
                                            Vision
                                        </h3>
                                    </div>
                                    <p className="text-slate-300 text-base sm:text-lg xl:text-xl leading-relaxed font-light">
                                        To establish one of the world's most trusted independent music labels, enabling creators to deliver premium sound waves and construct a global community built on creative integrity and stylistic innovation.
                                    </p>
                                </div>
                            </FadeIn>

                            {/* Mission Column */}
                            <FadeIn direction="right">
                                <div className="space-y-6 text-left p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#EEE8AA]/30 transition-colors">
                                    <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-[#367588]/20 border border-[#367588]/40 flex items-center justify-center text-[#EEE8AA]">
                                            <Target className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-black uppercase tracking-wide">
                                            Mission
                                        </h3>
                                    </div>
                                    <p className="text-slate-300 text-base sm:text-lg xl:text-xl leading-relaxed font-light">
                                        To empower independent artists by delivering elite recording environments, professional mixing and mastering support, strategic global digital distribution, and tailored promo campaigns.
                                    </p>
                                </div>
                            </FadeIn>

                        </div>
                    </div>
                </section>

                {/* ========================================================= */}
                {/* 08. NETWORK (The Creative Ecosystem)                      */}
                {/* ========================================================= */}
                <section className="py-28 md:py-36 border-t border-white/5 bg-[#141416] relative overflow-hidden">
                    <div className="max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-16">
                        
                        <FadeIn>
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
                                <div className="space-y-3">
                                    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight">
                                        THE <span className="text-gradient-accent">ECOSYSTEM</span>
                                    </h2>
                                    <p className="text-slate-400 text-base sm:text-lg max-w-xl">
                                        An interconnected network of creators, producers, vocalists, and sound architects.
                                    </p>
                                </div>

                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#EEE8AA] hover:text-[#FFF8DC] transition-colors"
                                >
                                    <span>Join The Community</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </FadeIn>

                        {/* Ecosystem 4-Pillar Grid (Wide, comfortable spacing) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            
                            <FadeIn delay={0.05}>
                                <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#EEE8AA]/40 transition-all duration-300 space-y-5 text-left group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#367588]/20 flex items-center justify-center text-[#EEE8AA] group-hover:scale-110 transition-transform">
                                        <Mic2 className="w-7 h-7" />
                                    </div>
                                    <h4 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
                                        Artists & Vocalists
                                    </h4>
                                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                                        Original singer-songwriters and vocalists executing uncompromised sonic concepts.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.1}>
                                <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#EEE8AA]/40 transition-all duration-300 space-y-5 text-left group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#367588]/20 flex items-center justify-center text-[#EEE8AA] group-hover:scale-110 transition-transform">
                                        <Headphones className="w-7 h-7" />
                                    </div>
                                    <h4 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
                                        Producers & Engineers
                                    </h4>
                                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                                        Analog tape masters and digital acoustic designers engineering pristine playback.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.15}>
                                <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#EEE8AA]/40 transition-all duration-300 space-y-5 text-left group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#367588]/20 flex items-center justify-center text-[#EEE8AA] group-hover:scale-110 transition-transform">
                                        <Sparkles className="w-7 h-7" />
                                    </div>
                                    <h4 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
                                        Visual Architects
                                    </h4>
                                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                                        Cinematic art directors, physical packaging creators, and stage lighting masters.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#EEE8AA]/40 transition-all duration-300 space-y-5 text-left group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#367588]/20 flex items-center justify-center text-[#EEE8AA] group-hover:scale-110 transition-transform">
                                        <Share2 className="w-7 h-7" />
                                    </div>
                                    <h4 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
                                        Global Channels
                                    </h4>
                                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                                        Independent worldwide DSP pipelines delivering recordings straight to listeners.
                                    </p>
                                </div>
                            </FadeIn>

                        </div>

                    </div>
                </section>

                {/* ========================================================= */}
                {/* 09. GATEWAY (Beyond The Music: Unstoppable Productions)    */}
                {/* ========================================================= */}
                <section className="py-24 md:py-32 border-t border-white/5 bg-[#1A1A1D] relative">
                    <div className="max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        <FadeIn>
                            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#367588]/25 via-[#1A1A1D]/60 to-[#141416] border border-[#EEE8AA]/35 p-10 sm:p-16 md:p-24 lg:p-28 shadow-2xl flex flex-col items-center text-center space-y-8 group/productions">

                                {/* Spotlight background glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#EEE8AA]/6 blur-[160px] rounded-full pointer-events-none" />

                                <div className="space-y-4 z-10">
                                    <span className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-slate-400">
                                        BEYOND THE MUSIC
                                    </span>
                                    <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none select-none">
                                        UNST<span className="text-red-500">O</span>PPABLE <br className="sm:hidden" />
                                        <span className="text-gradient-accent">PRODUCTIONS</span>
                                    </h2>
                                </div>

                                <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-2xl z-10 font-light">
                                    Discover the parent creative agency behind our wider world of spectacles, physical arena staging, global sports broadcasts, and high-fidelity live events.
                                </p>

                                <div className="pt-4 z-10">
                                    <MagneticButton>
                                        <a
                                            href={UNSTOPPABLE_PRODUCTIONS_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 bg-[#1A1A1D] text-white hover:text-[#EEE8AA] border border-[#EEE8AA]/40 hover:border-[#EEE8AA] font-bold text-sm sm:text-base px-10 sm:px-12 py-5 rounded-full shadow-xl hover:shadow-[0_0_35px_rgba(238,232,170,0.25)] transition-all duration-300 hover:scale-105"
                                        >
                                            <span>Explore Unst<span className="text-red-500">o</span>ppable Productions</span>
                                            <Compass className="w-5 h-5 shrink-0 transition-transform group-hover/productions:rotate-45" />
                                        </a>
                                    </MagneticButton>
                                </div>

                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* (Section 10 Footer is rendered automatically in Layout.jsx) */}

            </div>
        </PageTransition>
    );
}