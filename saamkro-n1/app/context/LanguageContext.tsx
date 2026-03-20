"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "../lib/translation";

const LanguageContext = createContext<{
    lang: Language;
    setLang: (l: Language) => void;
    t: typeof translations.en;
} | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<Language>("en");

    useEffect(() => {
        const saved = localStorage.getItem("preferred-lang") as Language;
        if (saved) setLang(saved);
    }, []);

    const handleSetLang = (newLang: Language) => {
        setLang(newLang);
        localStorage.setItem("preferred-lang", newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within LanguageProvider");
    return context;
};