import React from "react";

export default function PrimaryButton({ children, onClick, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`bg-gradient-to-r from-[#EEE8AA] via-[#F7F2CB] to-[#E6D88A] text-[#1A1A1D] font-black text-xs px-6 py-3 rounded-full hover:brightness-105 shadow-lg shadow-[#EEE8AA]/20 transition-all hover:scale-105 cursor-pointer ${className}`}
        >
            {children}
        </button>
    );
}