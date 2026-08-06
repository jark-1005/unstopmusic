import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const checkScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full glass-panel border-red-500/30 text-white hover:bg-red-600 hover:border-red-600 transition-all shadow-lg hover:scale-110"
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
}