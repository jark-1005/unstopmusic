import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "./Footer";
import { useIntro } from "../../context/IntroContext";
import SplashScreen from "../common/SplashScreen";
import { AnimatePresence } from "framer-motion";
import { getLenis } from "../../hooks/useLenis";

export default function Layout({ children }) {
    const { isIntroPlaying, completeIntro } = useIntro();

    useEffect(() => {
        const lenis = getLenis();
        if (isIntroPlaying) {
            lenis?.stop();
            document.body.style.overflow = "hidden";
        } else {
            lenis?.start();
            document.body.style.overflow = "";
        }
    }, [isIntroPlaying]);

    return (
        <div className={`min-h-screen flex flex-col justify-between bg-transparent text-slate-100 transition-colors duration-500 w-full max-w-full min-w-0 overflow-x-clip ${
            isIntroPlaying ? "h-screen overflow-hidden pointer-events-none select-none" : ""
        } pb-24 lg:pb-0`}>
            <AnimatePresence>
                {isIntroPlaying && (
                    <SplashScreen onComplete={completeIntro} />
                )}
            </AnimatePresence>

            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}
