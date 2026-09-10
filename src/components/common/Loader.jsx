import React from "react";

export default function Loader() {
    return (
        <div className="fixed inset-0 bg-[#1A1A1D] z-50 flex items-center justify-center">
            <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-[#EEE8AA]/20 border-t-[#EEE8AA] animate-spin" />
                <span className="mt-4 text-xs font-bold tracking-[0.3em] text-[#EEE8AA] uppercase">
                    Loading Stage...
                </span>
            </div>
        </div>
    );
}