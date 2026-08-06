import React from "react";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export default function ScrollProgress() {
    const progress = useScrollProgress();

    return (
        <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-white/5">
            <div
                className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-red-500 shadow-[0_0_10px_#ef4444] transition-all duration-150"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}