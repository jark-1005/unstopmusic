import React from "react";

/**
 * Universal BrandText component for "UNSTOPPABLE" / "Unstoppable"
 * Enforces the brand rule:
 * UNST / Unst -> Inherit
 * O / o -> Red (#ef4444)
 * PPABLE / ppable -> Inherit
 */
export default function BrandText({ 
    className = "", 
    suffix = "", 
    variant = "uppercase", // 'uppercase' | 'capitalize'
    style = {} 
}) {
    if (variant === "capitalize") {
        return (
            <span className={`inline-block whitespace-nowrap ${className}`} style={style}>
                <span>Unst</span>
                <span className="text-red-500">o</span>
                <span>ppable</span>
                {suffix && <span> {suffix}</span>}
            </span>
        );
    }

    return (
        <span className={`inline-block whitespace-nowrap ${className}`} style={style}>
            <span>UNST</span>
            <span className="text-red-500">O</span>
            <span>PPABLE</span>
            {suffix && <span> {suffix}</span>}
        </span>
    );
}

/**
 * Helper to replace occurrences of 'UNSTOPPABLE' or 'Unstoppable' inside strings
 */
export function formatBrandString(text = "") {
    if (!text) return text;
    const parts = text.split(/(unstoppable)/gi);
    return parts.map((part, i) => {
        if (part.toLowerCase() === "unstoppable") {
            const isUpper = part === part.toUpperCase();
            return isUpper ? (
                <span key={i} className="inline-block whitespace-nowrap">
                    <span>UNST</span>
                    <span className="text-red-500">O</span>
                    <span>PPABLE</span>
                </span>
            ) : (
                <span key={i} className="inline-block whitespace-nowrap">
                    <span>Unst</span>
                    <span className="text-red-500">o</span>
                    <span>ppable</span>
                </span>
            );
        }
        return part;
    });
}
