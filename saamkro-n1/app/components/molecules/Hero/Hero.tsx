"use client";
import { motion } from "framer-motion";
import { ChevronRight, Hammer, PaintBucket, Ruler } from "lucide-react";
import { Button } from "../../atoms/Button/Button";
import Stepinn from '../../../assets/stepinn.jpg';
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const theme = {
    brand: "from-slate-200 via-slate-400 to-slate-700",
};

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
    hidden: { opacity: 0, y: 22 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 90, damping: 18 },
    },
};

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="home" className="relative isolate overflow-hidden pr-6 pl-6">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className={`absolute -left-20 -top-24 h-72 w-72 rounded-full bg-gradient-to-tr ${theme.brand} blur-3xl opacity-15`} />
                <div className={`absolute right-0 top-1/3 h-72 w-72 rounded-full bg-gradient-to-tr ${theme.brand} blur-3xl opacity-10`} />
            </div>

            <div className="mx-auto grid items-center gap-10 px-4 pb-12 pt-7 md:grid-cols-2 md:gap-16 md:pb-16 md:pt-12">

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col"
                >
                    <motion.span
                        variants={item}
                        className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                    >
                        <ChevronRight className="h-3 w-3" /> {t.hero.since}
                    </motion.span>

                    <motion.h1
                        variants={item}
                        className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl"
                    >
                        {t.hero.titleMain}{" "}
                        <span className={`bg-gradient-to-tr ${theme.brand} bg-clip-text text-transparent`}>
                            {t.hero.titleAccent}
                        </span>
                    </motion.h1>

                    <motion.p variants={item} className="mt-4 max-w-xl text-neutral-300">
                        {t.hero.description}
                    </motion.p>

                    <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
                        <Button asChild className="rounded-2xl bg-white/10 text-white hover:bg-white/20">
                            <a href="/portfolio">{t.hero.ctaSeeWork}</a>
                        </Button>
                        <Button asChild variant="secondary" className="rounded-2xl bg-white/10 text-white hover:bg-white/20">
                            <a href="#contact">Get a quote</a>
                        </Button>
                    </motion.div>

                    <motion.ul variants={item} className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-6 text-sm text-neutral-300">
                        <li className="flex items-center gap-2"><Hammer className="h-4 w-4" /> {t.hero.featureFab}</li>
                        <li className="flex items-center gap-2"><Ruler className="h-4 w-4" /> {t.hero.featureInst}</li>
                        <li className="flex items-center gap-2"><PaintBucket className="h-4 w-4" /> {t.hero.featureFinish}</li>
                    </motion.ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.35 }}
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                        className="relative rounded-3xl border border-white/10 bg-neutral-900 p-2 shadow-2xl"
                    >
                        <Image
                            src={Stepinn}
                            alt="Step Inn hotel — LED facade signage at night, Kazbegi"
                            className="h-64 w-full rounded-2xl object-cover"
                        />
                        <div className="absolute inset-2 rounded-2xl border border-white/10 pointer-events-none" />
                        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-neutral-950/70 p-3 text-xs text-neutral-300">
                            <p className="font-medium text-white">{t.hero.caseStudyTitle}</p>
                            <p>{t.hero.caseStudyDesc}</p>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
