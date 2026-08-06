import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance = null;

export function getLenis() {
    return lenisInstance;
}

export function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        lenisInstance = lenis;

        // Start Lenis in stopped state if splash screen is active in this session
        const played = sessionStorage.getItem("introPlayed");
        if (played !== "true") {
            lenis.stop();
        }

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisInstance = null;
        };
    }, []);
}