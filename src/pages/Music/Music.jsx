import { useRef } from "react";
import { trendingMusic, freshArrivals } from "../../data/music";
import { ChevronLeft, ChevronRight, Play, AudioLines } from "lucide-react";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import FadeIn from "../../components/animations/FadeIn";
import PageTransition from "../../components/animations/PageTransition";
import ImageReveal from "../../components/animations/ImageReveal";
import VinylArtwork from "../../components/cards/VinylArtwork";
import SectionMarker from "../../components/common/SectionMarker";

export default function Music() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const offset = direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
            scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
        }
    };

    // Extract the featured item (first item in trending)
    const featuredTrack = trendingMusic[0];
    const otherTrending = trendingMusic.slice(1);

    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-[#000000] text-[#EBECF0] overflow-hidden relative">
                
                {/* Visual Ambient Details */}
                <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-[#FE7F2E]/3 blur-[130px] rounded-full pointer-events-none -z-10" />
                <div className="absolute bottom-[20%] left-[-15%] w-[600px] h-[600px] bg-[#FE7F2E]/3 blur-[160px] rounded-full pointer-events-none -z-10" />

                <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-32">
                    
                    {/* MUSIC PAGE HERO */}
                    <FadeIn>
                        <div className="text-center max-w-3xl mx-auto space-y-6">
                            <div className="flex justify-center">
                                <SectionMarker label="Label Releases" />
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none select-none">
                                DISCOVER <br />
                                <span className="text-gradient-accent">THE CATALOG</span>
                            </h1>
                            <p className="text-[#EBECF0]/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light">
                                Explore official physical releases, conceptual EP tracks, and fresh arrival singles curated under the Unstoppable Music label.
                            </p>
                        </div>
                    </FadeIn>

                    {/* FEATURED TRENDING RELEASE */}
                    {featuredTrack && (
                        <section className="space-y-10 text-left">
                            <FadeIn>
                                <span className="text-[10px] font-mono tracking-[0.25em] text-[#FE7F2E] uppercase block mb-4">
                                    01 / FEATURED SPOTLIGHT
                                </span>
                            </FadeIn>

                            <div className="glass-panel p-8 md:p-14 rounded-3xl border-[#FE7F2E]/25 relative overflow-hidden bg-[#233D4C]/40 flex flex-col lg:flex-row items-center gap-12 group/featured">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#FE7F2E]/5 via-transparent to-transparent pointer-events-none" />
                                
                                {/* Featured Visual with Vinyl slide on hover */}
                                <div className="w-full max-w-[340px] md:max-w-[420px] aspect-square shrink-0 relative z-10">
                                    <VinylArtwork coverUrl={featuredTrack.coverUrl} title={featuredTrack.title} />
                                </div>

                                {/* Featured Track Meta */}
                                <div className="flex-grow space-y-6 relative z-10 text-left">
                                    <div className="flex items-center gap-3">
                                        <AudioLines className="w-5 h-5 text-[#FE7F2E]" />
                                        <span className="text-xs font-mono tracking-wider text-slate-400">TRENDING RELEASE // #01</span>
                                    </div>

                                    <div className="space-y-2">
                                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none group-hover/featured:text-[#FF9F66] transition-colors">
                                            {featuredTrack.title}
                                        </h2>
                                        <p className="text-xl text-[#EBECF0]/80 font-bold">{featuredTrack.artist}</p>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 uppercase tracking-widest pt-2">
                                        <span>GENRE: {featuredTrack.category}</span>
                                        <span>•</span>
                                        <span>RELEASED: {featuredTrack.releaseDate}</span>
                                    </div>

                                    <div className="pt-6 flex flex-wrap items-center gap-6 border-t border-white/5">
                                        {/* Streaming links container */}
                                        <div className="flex items-center gap-4">
                                            <a 
                                                href={featuredTrack.streamingLinks.spotify}
                                                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-[#1DB954] hover:border-[#1DB954]/50 transition-all shadow-md"
                                                title="Listen on Spotify"
                                            >
                                                <FaSpotify className="w-5 h-5" />
                                            </a>
                                            <a 
                                                href={featuredTrack.streamingLinks.appleMusic}
                                                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-[#FC3C44] hover:border-[#FC3C44]/50 transition-all shadow-md"
                                                title="Listen on Apple Music"
                                            >
                                                <FaApple className="w-5 h-5" />
                                            </a>
                                            <a 
                                                href={featuredTrack.streamingLinks.youtube}
                                                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-[#FF0000] hover:border-[#FF0000]/50 transition-all shadow-md"
                                                title="Watch on YouTube"
                                            >
                                                <FaYoutube className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* OTHER TRENDING MUSIC LAYOUT: ASYMMETRIC GRID */}
                    <section className="space-y-12 text-left">
                        <FadeIn>
                            <span className="text-[10px] font-mono tracking-[0.25em] text-[#FE7F2E] uppercase block mb-4">
                                02 / TRENDING CATALOG
                            </span>
                        </FadeIn>

                        {/* Asymmetric layout grid */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                            {otherTrending.map((track, index) => {
                                // Alternating card shapes (First is wide/medium, second is tall)
                                const isEven = index % 2 === 0;
                                const gridClass = isEven ? "md:col-span-7" : "md:col-span-5";

                                return (
                                    <div key={track.id} className={`${gridClass} flex flex-col h-full`}>
                                        <FadeIn delay={index * 0.1}>
                                            <div className="glass-panel group rounded-3xl overflow-hidden border-white/5 hover:border-[#FE7F2E]/35 p-6 flex flex-col justify-between h-full bg-[#233D4C]/30 shadow-xl transition-all duration-300">
                                                
                                                {/* Artwork */}
                                                <div className="w-full relative aspect-video rounded-2xl overflow-hidden bg-black/25">
                                                    <ImageReveal className="w-full h-full">
                                                        <img 
                                                            src={track.coverUrl} 
                                                            alt={track.title}
                                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                        />
                                                    </ImageReveal>
                                                    
                                                    {/* Play Overlays */}
                                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                                        <div className="w-12 h-12 rounded-full bg-[#FE7F2E] flex items-center justify-center text-[#000000] shadow-lg">
                                                            <Play className="w-5 h-5 fill-current translate-x-0.5" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Text Info */}
                                                <div className="pt-6 space-y-4">
                                                    <div className="space-y-1">
                                                        <span className="text-[9px] font-mono text-[#FE7F2E] uppercase tracking-widest block">
                                                            {track.category} // RELEASES
                                                        </span>
                                                        <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide truncate group-hover:text-[#FF9F66] transition-colors">
                                                            {track.title}
                                                        </h3>
                                                        <p className="text-slate-400 font-semibold text-sm">{track.artist}</p>
                                                    </div>

                                                    <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-mono">
                                                        <span className="text-slate-500">{track.releaseDate}</span>
                                                        
                                                        {/* Stream Icons */}
                                                        <div className="flex items-center gap-3">
                                                            <a href={track.streamingLinks.spotify} className="text-slate-500 hover:text-[#1DB954] transition-colors"><FaSpotify className="w-4 h-4" /></a>
                                                            <a href={track.streamingLinks.appleMusic} className="text-slate-500 hover:text-[#FC3C44] transition-colors"><FaApple className="w-4 h-4" /></a>
                                                            <a href={track.streamingLinks.youtube} className="text-slate-500 hover:text-[#FF0000] transition-colors"><FaYoutube className="w-4 h-4" /></a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </FadeIn>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* FRESH ARRIVALS: HORIZONTAL ARTWORK SCROLL RAIL */}
                    <section className="space-y-10 text-left">
                        <FadeIn>
                            <div className="flex items-center justify-between border-b border-[#FE7F2E]/20 pb-4">
                                <span className="text-[10px] font-mono tracking-[0.25em] text-[#FE7F2E] uppercase block">
                                    03 / FRESH ARRIVALS
                                </span>
                                
                                {/* Rail arrows */}
                                <div className="flex items-center gap-3">
                                    <button 
                                        onClick={() => scroll("left")} 
                                        className="w-10 h-10 rounded-full border border-white/10 hover:border-[#FE7F2E] flex items-center justify-center text-slate-400 hover:text-white transition-all bg-[#233D4C]/30 cursor-pointer"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button 
                                        onClick={() => scroll("right")} 
                                        className="w-10 h-10 rounded-full border border-white/10 hover:border-[#FE7F2E] flex items-center justify-center text-slate-400 hover:text-white transition-all bg-[#233D4C]/30 cursor-pointer"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Horizontal Snap Rail */}
                        <div 
                            ref={scrollRef}
                            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 w-full pointer-events-auto [scrollbar-width:none] [-ms-overflow-style:none]"
                            style={{ WebkitOverflowScrolling: "touch" }}
                        >
                            {freshArrivals.map((track) => (
                                <div 
                                    key={track.id} 
                                    className="snap-start shrink-0 w-[280px] md:w-[320px] flex flex-col gap-4 group/rail" 
                                >
                                    {/* Album Cover wrapper */}
                                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/5 bg-[#233D4C]/20 shadow-md">
                                        <ImageReveal className="w-full h-full">
                                            <img 
                                                src={track.coverUrl} 
                                                alt={track.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover/rail:scale-103"
                                            />
                                        </ImageReveal>
                                        
                                        {/* Play Overlay */}
                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/rail:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                            <div className="w-10 h-10 rounded-full bg-[#FE7F2E] flex items-center justify-center text-[#000000] shadow-lg">
                                                <Play className="w-4 h-4 fill-current translate-x-0.5" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Copy details */}
                                    <div className="space-y-1 text-left px-1">
                                        <span className="text-[8px] font-mono text-[#FE7F2E] uppercase tracking-widest block">
                                            {track.category}
                                        </span>
                                        <h4 className="text-base font-bold text-white uppercase truncate group-hover/rail:text-[#FF9F66] transition-colors">
                                            {track.title}
                                        </h4>
                                        <p className="text-slate-400 text-xs truncate">{track.artist}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

            </div>
        </PageTransition>
    );
}