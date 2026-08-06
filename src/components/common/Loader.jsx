import React from "react";

export default function Loader() {
    return (
        <div className="fixed inset-0 bg-[#08080a] z-50 flex items-center justify-center">
            <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-red-600/20 border-t-red-600 animate-spin" />
                <span className="mt-4 text-xs font-bold tracking-[0.3em] text-red-500 uppercase">
                    Loading Stage...
                </span>
            </div>
        </div>
    );
}