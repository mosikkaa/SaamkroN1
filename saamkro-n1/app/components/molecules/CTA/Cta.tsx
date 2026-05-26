"use client";
import { Button } from "../../atoms/Button/Button";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

const theme = {
    brand: "from-slate-200 via-slate-400 to-slate-700",
};

function Cta() {
    const { t } = useLanguage();

    return (
        <motion.section
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            className="relative mx-8 my-8 pr-4 pl-4 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className={`absolute -left-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-tr ${theme.brand} blur-3xl`}
                    animate={{
                        x: [-10, 16, -10],
                        scale: [1, 1.18, 1],
                        opacity: [0.18, 0.32, 0.18],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="mx-auto flex flex-col items-center gap-4 px-6 py-10 text-center md:flex-row md:justify-between md:text-left relative">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.15 }}
                >
                    <h3 className="text-xl font-semibold sm:text-2xl">{t.cta.title}</h3>
                    <p className="mt-1 text-neutral-300">{t.cta.description}</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 14, delay: 0.25 }}
                >
                    <Button asChild className="rounded-2xl bg-white/10 hover:bg-white/30 transition-colors">
                        <a href="#contact">{t.cta.button}</a>
                    </Button>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Cta;
