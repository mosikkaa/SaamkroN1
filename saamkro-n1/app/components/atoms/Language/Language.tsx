"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

function Language() {
    const { lang, setLang } = useLanguage();

    return (
        <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md">
            <button
                onClick={() => setLang("en")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-300 ${
                    lang === "en"
                        ? "bg-white/10 text-white"
                        : "text-neutral-500 hover:text-neutral-300"
                }`}
            >
                <span className="text-base leading-none">🇺🇸</span>
                <AnimatePresence  initial={false}>
                    {lang === "en" && (
                        <motion.span
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "circOut" }}
                            className="overflow-hidden lg:flex hidden whitespace-nowrap text-[10px] font-black tracking-widest"
                        >
                            ENGLISH
                        </motion.span>
                    )}
                </AnimatePresence>
            </button>

            <div className="h-3 w-[1px] bg-white/10 mx-0.5" />

            <button
                onClick={() => setLang("ka")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-300 ${
                    lang === "ka"
                        ? "bg-white/10 text-white"
                        : "text-neutral-500 hover:text-neutral-300"
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
                            className="overflow-hidden lg:flex hidden whitespace-nowrap text-[10px] font-black tracking-widest"
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