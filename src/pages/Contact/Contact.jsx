import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import FadeIn from "../../components/animations/FadeIn";
import PageTransition from "../../components/animations/PageTransition";
import SectionMarker from "../../components/common/SectionMarker";
import MagneticButton from "../../components/buttons/MagneticButton";

export default function Contact() {
    return (
        <PageTransition>
            <div className="pt-32 pb-24 min-h-screen bg-[#000000] text-[#EBECF0] overflow-hidden relative">
                
                {/* Visual Glows */}
                <div className="absolute top-[15%] left-[-10%] w-[450px] h-[450px] bg-[#FE7F2E]/3 blur-[120px] rounded-full pointer-events-none -z-10" />
                <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-[#FE7F2E]/3 blur-[140px] rounded-full pointer-events-none -z-10" />

                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <FadeIn>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                            
                            {/* Left Side: Oversized Editorial Typography */}
                            <div className="lg:col-span-6 space-y-10 text-left">
                                <div className="space-y-4">
                                    <SectionMarker label="Label Inquiries" />
                                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[0.9] uppercase tracking-tighter">
                                        CONNECT WITH <br />
                                        UNSTOPPABLE <br />
                                        <span className="text-gradient-accent">MUSIC.</span>
                                    </h1>
                                </div>

                                <p className="text-[#EBECF0]/80 text-base md:text-lg leading-relaxed max-w-lg font-light">
                                    Are you ready to align your sound with a label that honors artistic freedom? 
                                    Contact us regarding demo submissions, publishing rights, or brand alliances.
                                </p>

                                {/* Contextual Text Labels */}
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 text-xs font-mono tracking-widest text-[#FE7F2E] uppercase select-none">
                                    <span>ARTISTS</span>
                                    <span>/</span>
                                    <span>PRODUCERS</span>
                                    <span>/</span>
                                    <span>SONGWRITERS</span>
                                    <span>/</span>
                                    <span>COLLABORATIONS</span>
                                    <span>/</span>
                                    <span>PARTNERSHIPS</span>
                                </div>

                                <div className="h-px w-full bg-white/5 pt-4" />

                                {/* Social Links & Information */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                                    <div className="space-y-4">
                                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">HQ LOCATION</span>
                                        <a 
                                            href="https://share.google/MDGzFUSXG6NpFPhkJ" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-start gap-3 text-slate-400 hover:text-[#FE7F2E] transition-all text-sm leading-relaxed"
                                        >
                                            <MapPin className="w-5 h-5 text-[#FE7F2E] shrink-0 mt-0.5" />
                                            <span>Chennai & Hyderabad / Global HQ</span>
                                        </a>
                                    </div>
                                    <div className="space-y-4">
                                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">EMAIL ENQUIRIES</span>
                                        <a 
                                            href="mailto:contact@unstoppableproduction.com" 
                                            className="flex items-center gap-3 text-slate-400 hover:text-[#FE7F2E] transition-all text-sm [overflow-wrap:anywhere]"
                                        >
                                            <Mail className="w-5 h-5 text-[#FE7F2E] shrink-0" />
                                            <span>contact@unstoppableproduction.com</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Socials row */}
                                <div className="flex gap-4 pt-4">
                                    <a href="https://x.com/UProductio86683" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#FE7F2E] hover:border-[#FE7F2E]/50 hover:bg-[#FE7F2E]/5 transition-all"><FaTwitter className="w-4 h-4" /></a>
                                    <a href="https://www.instagram.com/unstoppable.production/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#FE7F2E] hover:border-[#FE7F2E]/50 hover:bg-[#FE7F2E]/5 transition-all"><FaInstagram className="w-4 h-4" /></a>
                                    <a href="https://www.facebook.com/unstoppableproduction?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#FE7F2E] hover:border-[#FE7F2E]/50 hover:bg-[#FE7F2E]/5 transition-all"><FaFacebook className="w-4 h-4" /></a>
                                    <a href="https://www.youtube.com/@Unstoppableproduction" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#FE7F2E] hover:border-[#FE7F2E]/50 hover:bg-[#FE7F2E]/5 transition-all"><FaYoutube className="w-4 h-4" /></a>
                                </div>
                            </div>

                            {/* Right Side: Minimalist Underlined Form */}
                            <div className="lg:col-span-6 bg-[#233D4C]/15 border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-md">
                                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div className="space-y-1 relative group text-left">
                                            <input 
                                                type="text" 
                                                id="name"
                                                required
                                                placeholder=" "
                                                className="w-full bg-transparent border-b border-white/15 focus:border-[#FE7F2E] py-3 text-sm text-white placeholder-transparent focus:outline-none transition-colors peer"
                                            />
                                            <label 
                                                htmlFor="name" 
                                                className="absolute left-0 top-3 text-xs font-mono uppercase tracking-wider text-slate-500 transition-all duration-300 origin-left -translate-y-6 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-[#FE7F2E] pointer-events-none"
                                            >
                                                Your Name
                                            </label>
                                        </div>
                                        
                                        <div className="space-y-1 relative group text-left">
                                            <input 
                                                type="email" 
                                                id="email"
                                                required
                                                placeholder=" "
                                                className="w-full bg-transparent border-b border-white/15 focus:border-[#FE7F2E] py-3 text-sm text-white placeholder-transparent focus:outline-none transition-colors peer"
                                            />
                                            <label 
                                                htmlFor="email" 
                                                className="absolute left-0 top-3 text-xs font-mono uppercase tracking-wider text-slate-500 transition-all duration-300 origin-left -translate-y-6 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-[#FE7F2E] pointer-events-none"
                                            >
                                                Your Email
                                            </label>
                                        </div>
                                    </div>

                                    <div className="space-y-1 relative group text-left">
                                        <input 
                                            type="text" 
                                            id="subject"
                                            required
                                            placeholder=" "
                                            className="w-full bg-transparent border-b border-white/15 focus:border-[#FE7F2E] py-3 text-sm text-white placeholder-transparent focus:outline-none transition-colors peer"
                                        />
                                        <label 
                                            htmlFor="subject" 
                                            className="absolute left-0 top-3 text-xs font-mono uppercase tracking-wider text-slate-500 transition-all duration-300 origin-left -translate-y-6 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-[#FE7F2E] pointer-events-none"
                                        >
                                            Inquiry Subject
                                        </label>
                                    </div>

                                    <div className="space-y-1 relative group text-left">
                                        <textarea 
                                            rows="5"
                                            id="message"
                                            required
                                            placeholder=" "
                                            className="w-full bg-transparent border-b border-white/15 focus:border-[#FE7F2E] py-3 text-sm text-white placeholder-transparent focus:outline-none transition-colors peer resize-none"
                                        />
                                        <label 
                                            htmlFor="message" 
                                            className="absolute left-0 top-3 text-xs font-mono uppercase tracking-wider text-slate-500 transition-all duration-300 origin-left -translate-y-6 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-[#FE7F2E] pointer-events-none"
                                        >
                                            Detail your Message
                                        </label>
                                    </div>

                                    <div className="pt-4 text-left">
                                        <MagneticButton>
                                            <button 
                                                type="submit" 
                                                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FE7F2E] to-[#FF9F66] text-[#000000] font-black text-sm px-10 py-5 rounded-full shadow-lg shadow-[#FE7F2E]/20 hover:brightness-110 cursor-pointer"
                                            >
                                                <span>Transmit Message</span>
                                                <ArrowUpRight className="w-5 h-5 shrink-0" />
                                            </button>
                                        </MagneticButton>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </FadeIn>
                </div>

            </div>
        </PageTransition>
    );
}