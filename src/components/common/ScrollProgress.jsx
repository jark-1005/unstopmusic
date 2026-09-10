import React from "react";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export default function ScrollProgress() {
    const progress = useScrollProgress();

    return (
        <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-white/5">
            <div
                className="h-full bg-gradient-to-r from-[#367588] via-[#A0522D] to-[#EEE8AA] shadow-[0_0_10px_rgba(238,232,170,0.6)] transition-all duration-150"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}