import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Volume2, Compass, ArrowUpRight } from "lucide-react";
import FadeIn from "../../components/animations/FadeIn";
import PageTransition from "../../components/animations/PageTransition";
import ImageReveal from "../../components/animations/ImageReveal";
import AudioWaveform from "../../components/common/AudioWaveform";
import VinylArtwork from "../../components/cards/VinylArtwork";
import MagneticButton from "../../components/buttons/MagneticButton";

// Configurable external link for Unstoppable Productions CTA
const UNSTOPPABLE_PRODUCTIONS_URL = "#";

export default function Home() {

    const featuredPreviews = [
        {
            id: 1,
            title: "Golden Horizon",
            artist: "Ethereal Echoes",
            coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
            category: "LATEST SINGLE",
        },
        {
            id: 2,
            title: "Midnight Grooves",
            artist: "Sound Wave Collective",
            coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
            category: "NEW ALBUM",
        },
        {
            id: 3,
            title: "Sonic Sanctuary",
            artist: "Vocal Echoes",
            coverUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=800&auto=format&fit=crop",
            category: "RECOMMENDED EP",
        },
    ];

    return (
        <PageTransition>
            <div className="bg-[#000000] text-[#EBECF0] font-sans antialiased overflow-hidden min-w-0 w-full relative">

                {/* BACKGROUND DETAILS: Subtle Orange Lights & Vignette */}
                <div className="absolute top-0 inset-x-0 h-[100vh] bg-gradient-to-b from-[#FE7F2E]/5 via-transparent to-transparent pointer-events-none -z-10" />
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#FE7F2E]/3 blur-[140px] rounded-full pointer-events-none -z-10" />
                <div className="absolute bottom-[30%] right-[-10%] w-[600px] h-[600px] bg-[#FE7F2E]/3 blur-[160px] rounded-full pointer-events-none -z-10" />

                {/* Fine Cinematic Grid overlay */}
                <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#FE7F2E_1px,transparent_1px),linear-gradient(to_bottom,#FE7F2E_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10" />

                {/* 01 — HERO SECTION: EDITORIAL COMPOSITION */}
                <section className="relative min-h-[95vh] flex items-center pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full relative z-10">

                        {/* Left Side: Overlapping Typographic Stack & CTAs */}
                        <div className="lg:col-span-8 space-y-10 text-left">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="flex items-center gap-4"
                            >
                                <span className="text-[10px] font-mono tracking-[0.25em] text-[#FE7F2E] uppercase bg-[#FE7F2E]/10 px-3 py-1 rounded-full border border-[#FE7F2E]/20">
                                    001 / INDEPENDENT LABEL
                                </span>
                                <AudioWaveform count={6} className="opacity-60" />
                            </motion.div>

                            <div className="relative">
                                {/* Typographic overlap block */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] 2xl:text-[6.2rem] font-black tracking-tighter uppercase leading-[0.8] text-white select-none z-10 relative"
                                >
                                    UNSTOPPABLE
                                </motion.h1>

                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex items-baseline gap-4 mt-2"
                                >
                                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] xl:text-[4.8rem] 2xl:text-[5.5rem] font-black tracking-tighter uppercase leading-[0.8] text-gradient-accent select-none">
                                        MUSIC
                                    </span>
                                    <span className="hidden md:inline-block w-16 h-1 bg-gradient-to-r from-[#FE7F2E] to-transparent translate-y-[-12px]" />
                                </motion.div>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-[#EBECF0]/80 text-base md:text-xl max-w-xl leading-relaxed font-light"
                            >
                                Independent sound. Unrestricted creativity. Music that moves beyond boundaries. We collaborate with original creators to engineer high-fidelity sonic experiences.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="pt-4"
                            >
                                <MagneticButton>
                                    <Link
                                        to="/music"
                                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FE7F2E] to-[#FF9F66] text-[#000000] font-black text-sm md:text-base px-10 py-4.5 rounded-full shadow-lg shadow-[#FE7F2E]/20 hover:shadow-[#FE7F2E]/35 transition-all duration-300"
                                    >
                                        <span>Explore Music</span>
                                        <ArrowRight className="w-5 h-5 shrink-0" />
                                    </Link>
                                </MagneticButton>
                            </motion.div>
                        </div>

                        {/* Right Side: Interactive Vinyl Object */}
                        <div className="lg:col-span-4 flex justify-center lg:justify-end w-full pt-8 lg:pt-0">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                                className="w-full max-w-[340px] md:max-w-[400px] lg:max-w-full aspect-square"
                            >
                                <VinylArtwork
                                    coverUrl="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
                                    title="Unstoppable Music Identity"
                                />
                            </motion.div>
                        </div>

                    </div>
                </section>

                {/* 02 — BRAND STATEMENT / ABOUT (Asymmetric editorial spacing) */}
                <section className="py-32 border-t border-white/5 bg-[#233D4C]/15 relative">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <FadeIn>
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">

                                {/* Vertical text banner on desktop */}
                                <div className="hidden lg:block absolute left-[-60px] top-6 select-none origin-left -rotate-90">
                                    <span className="text-[9px] font-mono tracking-[0.3em] text-[#FE7F2E]/30 uppercase block">
                                        UNSTOPPABLE MUSIC / ESTD 2026
                                    </span>
                                </div>

                                {/* Asymmetric Typography Columns */}
                                <div className="lg:col-span-8 space-y-6">
                                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#FE7F2E] uppercase block">
                                        02 / BRAND IDENTITY
                                    </span>

                                    <h2 className="text-4xl sm:text-6xl md:text-[5.25rem] font-black text-white leading-[0.95] uppercase tracking-tighter">
                                        WE DON'T JUST <br />
                                        <span className="flex flex-wrap items-center gap-4">
                                            <span>RELEASE</span>
                                            <span className="inline-block w-20 md:w-32 h-[45px] md:h-[65px] rounded-full overflow-hidden border border-[#FE7F2E]/40 bg-[#000000]">
                                                <img
                                                    src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop"
                                                    alt=""
                                                    className="w-full h-full object-cover scale-110 pointer-events-none"
                                                />
                                            </span>
                                            <span className="text-gradient-accent">MUSIC.</span>
                                        </span>
                                        WE BUILD ARTISTS.
                                    </h2>
                                </div>

                                <div className="lg:col-span-4 pt-4 lg:pt-24 space-y-8 text-left">
                                    <p className="text-[#EBECF0]/80 text-base md:text-lg leading-relaxed font-light">
                                        Unstoppable Music provides a creative sanctuary. We partner with vocalists, composers, producers, and rappers to distribute pure expressions directly to global audiences without structural restrictions.
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <span className="h-px w-12 bg-[#FE7F2E]/50" />
                                        <span className="text-[10px] font-mono tracking-widest text-[#FE7F2E]/60">CREATIVE FREEDOM</span>
                                    </div>
                                </div>

                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* 03 — VISION & MISSION: INTERACTIVE SCROLL & DIVIDER */}
                <section className="py-32 border-t border-white/5 bg-[#000000] relative">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">

                        <FadeIn>
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-mono tracking-[0.25em] text-[#FE7F2E] uppercase">
                                    03 / VISION & MISSION
                                </span>
                                <div className="h-[1px] w-24 bg-[#FE7F2E]/20" />
                            </div>
                        </FadeIn>

                        {/* Split Alternating Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">

                            {/* Central Gold Line animating on scroll */}
                            <motion.div
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.0, ease: "easeOut" }}
                                className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#FE7F2E]/40 via-[#FE7F2E]/10 to-transparent origin-top -translate-x-1/2"
                            />

                            {/* Vision Column (Align Left) */}
                            <FadeIn direction="left">
                                <div className="space-y-6 pr-0 lg:pr-16 text-left group">
                                    <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full border border-[#FE7F2E]/20 flex items-center justify-center text-[#FE7F2E] group-hover:bg-[#FE7F2E]/10 transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </div>
                                            <h3 className="text-2xl text-white font-extrabold uppercase tracking-wide">Vision</h3>
                                        </div>
                                        <span className="text-4xl md:text-7xl font-mono font-extralight text-[#FE7F2E]/15 select-none">01</span>
                                    </div>
                                    <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
                                        To establish one of the world's most trusted independent music labels, enabling creators to deliver premium sound waves and construct a global community built on creative integrity and stylistic innovation.
                                    </p>
                                </div>
                            </FadeIn>

                            {/* Mission Column (Align Right) */}
                            <FadeIn direction="right">
                                <div className="space-y-6 pl-0 lg:pl-16 text-left group mt-8 lg:mt-16">
                                    <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full border border-[#FE7F2E]/20 flex items-center justify-center text-[#FE7F2E] group-hover:bg-[#FE7F2E]/10 transition-colors">
                                                <Target className="w-4 h-4" />
                                            </div>
                                            <h3 className="text-2xl text-white font-extrabold uppercase tracking-wide">Mission</h3>
                                        </div>
                                        <span className="text-4xl md:text-7xl font-mono font-extralight text-[#FE7F2E]/15 select-none">02</span>
                                    </div>
                                    <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
                                        To empower independent artists by delivering elite recording environments, professional mixing and mastering support, strategic global digital distribution, and tailored promo campaigns.
                                    </p>
                                </div>
                            </FadeIn>

                        </div>
                    </div>
                </section>

                {/* 04 — MUSIC PREVIEW: HIERARCHICAL LAYOUT (1 Large + 2 Small) */}
                <section className="py-32 border-t border-white/5 bg-[#233D4C]/5">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">

                        <FadeIn>
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="space-y-3">
                                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#FE7F2E] uppercase block">
                                        04 / SELECTED DISCS
                                    </span>
                                    <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight">
                                        LATEST FROM <span className="text-gradient-accent">UNSTOPPABLE</span>
                                    </h2>
                                </div>
                                <MagneticButton>
                                    <Link
                                        to="/music"
                                        className="inline-flex items-center gap-2 text-sm md:text-base font-bold text-[#FE7F2E] hover:text-[#FF9F66] group transition-colors shrink-0"
                                    >
                                        <span>Discover All Music</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </MagneticButton>
                            </div>
                        </FadeIn>

                        {/* Hierarchical Preview Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

                            {/* Featured Release (Left, w-7/12) */}
                            <div className="lg:col-span-7 flex flex-col justify-between">
                                <FadeIn>
                                    <div className="space-y-6">
                                        <div className="w-full max-w-[500px] lg:max-w-full mx-auto aspect-square">
                                            <VinylArtwork
                                                coverUrl={featuredPreviews[0].coverUrl}
                                                title={featuredPreviews[0].title}
                                            />
                                        </div>
                                        <div className="space-y-2 text-left pt-2">
                                            <span className="text-[10px] font-mono text-[#FE7F2E] tracking-widest uppercase block">
                                                {featuredPreviews[0].category} // SELECTED FEATURE
                                            </span>
                                            <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide group-hover:text-[#FF9F66]">
                                                {featuredPreviews[0].title}
                                            </h4>
                                            <p className="text-slate-400 font-semibold">{featuredPreviews[0].artist}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Secondary Releases Stacked (Right, w-5/12) */}
                            <div className="lg:col-span-5 flex flex-col gap-10 justify-center">
                                {featuredPreviews.slice(1).map((release, index) => (
                                    <FadeIn key={index} delay={index * 0.15}>
                                        <div className="flex items-center gap-6 group/item text-left">
                                            <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-white/5 bg-[#233D4C]/30 shrink-0">
                                                <ImageReveal className="w-full h-full">
                                                    <img
                                                        src={release.coverUrl}
                                                        alt={release.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                                                    />
                                                </ImageReveal>
                                            </div>
                                            <div className="space-y-1.5 min-w-0">
                                                <span className="text-[9px] font-mono text-[#FE7F2E] tracking-widest uppercase block">
                                                    {release.category}
                                                </span>
                                                <h4 className="text-lg md:text-xl font-bold text-white uppercase truncate group-hover/item:text-[#FF9F66] transition-colors">
                                                    {release.title}
                                                </h4>
                                                <p className="text-slate-400 text-sm truncate">{release.artist}</p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>

                        </div>

                    </div>
                </section>

                {/* 05 — ARTIST / MUSIC PHILOSOPHY (Manifesto Style) */}
                <section className="relative py-36 border-t border-white/5 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 z-10 relative">
                        <FadeIn>
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                                {/* Image / Silhouette left */}
                                <div className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden border border-white/5 bg-[#000000]">
                                    <ImageReveal className="w-full h-full">
                                        <img
                                            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop"
                                            alt="Manifesto Graphic"
                                            className="w-full h-full object-cover opacity-60 filter grayscale group-hover:scale-105"
                                        />
                                    </ImageReveal>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent pointer-events-none" />
                                </div>

                                {/* Bold Manifesto right */}
                                <div className="lg:col-span-7 space-y-8 text-left">
                                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#FE7F2E] uppercase block">
                                        05 / MANIFESTO
                                    </span>

                                    <h2 className="text-4xl sm:text-6xl md:text-[5.5rem] font-black text-white leading-[0.85] uppercase tracking-tighter">
                                        FOR THE ARTISTS <br />
                                        WHO REFUSE TO <br />
                                        SOUND LIKE <br />
                                        <span className="text-gradient-accent">EVERYONE ELSE.</span>
                                    </h2>

                                    <p className="text-[#EBECF0]/80 text-base md:text-lg leading-relaxed max-w-xl font-light">
                                        We reject structural templates. Premium sound requires absolute experimentation, safety to build unique identity, and the platform to project. If your sonic horizon refuses to compromise, you belong here.
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <Volume2 className="w-5 h-5 text-[#FE7F2E]" />
                                        <span className="text-[10px] font-mono tracking-widest text-[#FE7F2E]/60">UNCOMPROMISING SONIC INTEGRITY</span>
                                    </div>
                                </div>

                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* 06 — BEYOND THE MUSIC (UNSTOPPABLE PRODUCTIONS CINEMATIC GATEWAY) */}
                <section className="py-24 border-t border-white/5 bg-[#233D4C]/15 relative">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <FadeIn>
                            <div className="relative overflow-hidden rounded-3xl bg-[#233D4C]/20 border border-[#FE7F2E]/35 p-12 md:p-24 shadow-2xl flex flex-col items-center text-center space-y-8 group/productions">

                                {/* Spotlight background glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FE7F2E]/4 blur-[130px] rounded-full pointer-events-none" />

                                <span className="text-[10px] font-mono tracking-[0.25em] text-[#FE7F2E] uppercase z-10">
                                    06 / NETWORK GATEWAY
                                </span>

                                <div className="space-y-4 z-10">
                                    <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-[#EBECF0]/60">BEYOND THE MUSIC</h3>
                                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none select-none">
                                        UNSTOPPABLE <br className="sm:hidden" />
                                        <span className="text-gradient-accent">PRODUCTIONS</span>
                                    </h2>
                                </div>

                                <p className="text-[#EBECF0]/80 text-sm md:text-base leading-relaxed max-w-2xl z-10 font-light">
                                    Discover the parent creative agency behind our wider world of spectacles, physical arena staging, global sports broadcasts, and high-fidelity live events.
                                </p>

                                <div className="pt-4 z-10">
                                    <MagneticButton>
                                        <a
                                            href={UNSTOPPABLE_PRODUCTIONS_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 bg-[#000000] text-white hover:text-[#FE7F2E] border border-[#FE7F2E]/30 hover:border-[#FE7F2E] font-bold text-sm px-10 py-5 rounded-full shadow-xl hover:shadow-[#FE7F2E]/10 transition-all duration-300 hover:scale-105"
                                        >
                                            <span>Explore Unstoppable Productions</span>
                                            <Compass className="w-4 h-4 shrink-0 transition-transform group-hover/productions:rotate-45" />
                                        </a>
                                    </MagneticButton>
                                </div>

                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* 07 — FINAL CONTACT CTA (Typographic Minimalist Statement) */}
                <section className="py-36 border-t border-white/5 bg-[#000000] relative overflow-hidden">
                    {/* Background music-themed texture overlay */}
                    <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200')] bg-cover bg-center pointer-events-none" />
                    {/* Gold background spotlight glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FE7F2E]/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-12 relative z-10">
                        <FadeIn>
                            <span className="text-[10px] font-mono tracking-[0.25em] text-[#FE7F2E] uppercase block">
                                07 / COLLABORATE
                            </span>

                            <h2 className="text-4xl sm:text-7xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] max-w-5xl mx-auto">
                                HAVE A SOUND <br />
                                THE WORLD <br />
                                <span className="text-gradient-accent">NEEDS TO HEAR?</span>
                            </h2>

                            <p className="text-[#EBECF0]/60 text-xs sm:text-sm uppercase tracking-[0.2em] font-mono">
                                ARTISTS. PRODUCERS. SONGWRITERS. COLLABORATORS.
                            </p>

                            <div className="pt-8">
                                <MagneticButton>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-3 border-b-2 border-[#FE7F2E] hover:border-[#FF9F66] text-2xl md:text-4xl font-black text-[#FE7F2E] hover:text-[#FF9F66] pb-2 transition-colors duration-300 group"
                                    >
                                        <span>Let's Connect</span>
                                        <ArrowUpRight className="w-8 h-8 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </Link>
                                </MagneticButton>
                            </div>
                        </FadeIn>
                    </div>
                </section>

            </div>
        </PageTransition>
    );
}