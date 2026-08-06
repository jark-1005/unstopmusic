import React from "react";

export default function PrimaryButton({ children, onClick, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`bg-gradient-to-r from-[#D4AF37] via-[#F5D97A] to-[#D4AF37] text-[#111827] font-bold text-xs px-6 py-3 rounded-full hover:brightness-110 shadow-lg shadow-[#D4AF37]/20 transition-all hover:scale-105 ${className}`}
        >
            {children}
        </button>
    );
}