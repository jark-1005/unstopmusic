import React from "react";

export default function SectionMarker({ number, label }) {
    return (
        <div className="flex items-center gap-3 select-none">
            {number ? (
                <>
                    <span className="font-mono text-[10px] text-[#D4AF37]">{number}</span>
                    <span className="h-px w-5 bg-[#D4AF37]/60 shrink-0" />
                </>
            ) : (
                <span className="w-5 h-px bg-[#D4AF37]/70 shrink-0" />
            )}
            <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400 font-semibold">
                {label}
            </span>
        </div>
    );
}
