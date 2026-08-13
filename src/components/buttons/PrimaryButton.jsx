import React from "react";

export default function PrimaryButton({ children, onClick, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`bg-gradient-to-r from-[#FE7F2E] via-[#FF9F66] to-[#FE7F2E] text-[#000000] font-bold text-xs px-6 py-3 rounded-full hover:brightness-110 shadow-lg shadow-[#FE7F2E]/20 transition-all hover:scale-105 ${className}`}
        >
            {children}
        </button>
    );
}