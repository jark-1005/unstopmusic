import React from "react";

export default function GlassButton({ children, onClick, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`glass-panel text-white font-semibold text-xs px-6 py-3 rounded-full hover:bg-white/10 transition-all border-white/10 ${className}`}
        >
            {children}
        </button>
    );
}