import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-8xl font-black text-gradient-red mb-2">404</h1>
            <h2 className="text-2xl font-bold text-white mb-2">PAGE NOT FOUND</h2>
            <p className="text-slate-400 text-sm max-w-md mb-6">
                Looks like you took a wrong turn into deep space.
            </p>
            <Link
                to="/"
                className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold text-xs px-6 py-3 rounded-full shadow-lg shadow-red-600/30"
            >
                <Home className="w-4 h-4" />
                <span>Back to Safety</span>
            </Link>
        </div>
    );
}