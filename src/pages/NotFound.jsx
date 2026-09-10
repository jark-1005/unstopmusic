import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#1A1A1D] text-[#EBECF0]">
            <h1 className="text-8xl font-black text-gradient-accent mb-2">404</h1>
            <h2 className="text-2xl font-bold text-white mb-2">PAGE NOT FOUND</h2>
            <p className="text-slate-400 text-sm max-w-md mb-6">
                Looks like you took a wrong turn into deep vinyl grooves.
            </p>
            <Link
                to="/"
                className="flex items-center gap-2 bg-gradient-to-r from-[#EEE8AA] via-[#F7F2CB] to-[#E6D88A] text-[#1A1A1D] font-bold text-xs px-6 py-3 rounded-full shadow-lg shadow-[#EEE8AA]/20 hover:scale-105 transition-all"
            >
                <Home className="w-4 h-4" />
                <span>Back to Safety</span>
            </Link>
        </div>
    );
}