"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

function Language() {
    const { lang, setLang } = useLanguage();

    return (
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-neutral-900/60 p-1 shadow-lg backdrop-blur-md">
            <button
                onClick={() => setLang("en")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
                    lang === "en"
                        ? "bg-neutral-800 text-white shadow-md ring-1 ring-white/10"
                        : "text-neutral-500 hover:bg-white/5 hover:text-neutral-300"
                }`}
            >
                <span className="text-base leading-none">🇬🇧</span>
                <AnimatePresence  initial={false}>
                    {lang === "en" && (
                        <motion.span
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "circOut" }}
                            className="overflow-hidden hidden md:flex  whitespace-nowrap text-[10px] font-black tracking-widest"
                        >
                            ENGLISH
                        </motion.span>
                    )}
                </AnimatePresence>
            </button>

            <button
                onClick={() => setLang("ka")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
                    lang === "ka"
                        ? "bg-neutral-800 text-white shadow-md ring-1 ring-white/10"
                        : "text-neutral-500 hover:bg-white/5 hover:text-neutral-300"
                }`}
            >
                <span className="text-base leading-none">🇬🇪</span>
                <AnimatePresence initial={false}>
                    {lang === "ka" && (
                        <motion.span
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "circOut" }}
                            className="overflow-hidden hidden md:flex whitespace-nowrap text-[10px] font-black tracking-widest"
                        >
                            ქართული
                        </motion.span>
                    )}
                </AnimatePresence>
            </button>
        </div>
    );
}

export default Language;