import React, { createContext, useContext, useState } from "react";

const IntroContext = createContext();

export function IntroProvider({ children }) {
    const [isIntroPlaying, setIsIntroPlaying] = useState(() => {
        const played = sessionStorage.getItem("introPlayed");
        return played !== "true";
    });

    const completeIntro = () => {
        sessionStorage.setItem("introPlayed", "true");
        setIsIntroPlaying(false);
    };

    return (
        <IntroContext.Provider value={{ isIntroPlaying, completeIntro }}>
            {children}
        </IntroContext.Provider>
    );
}

export function useIntro() {
    return useContext(IntroContext);
}
