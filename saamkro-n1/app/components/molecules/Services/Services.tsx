"use client";
import { ArrowRight, Hammer, PaintBucket, Ruler, Wrench, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../atoms/Card/Card";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

const theme = {
    brand: "from-slate-200 via-slate-400 to-slate-700",
};

const gridContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariant = {
    hidden: { opacity: 0, y: 36 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 80, damping: 16 },
    },
};

function Services() {
    const { t } = useLanguage();

    const cards = [
        { id: "signage",   icon: <Ruler className="h-5 w-5" />,       title: t.services.items.signage.title,   text: t.services.items.signage.text },
        { id: "studios",   icon: <PaintBucket className="h-5 w-5" />, title: t.services.items.studios.title,   text: t.services.items.studios.text },
        { id: "branding",  icon: <PaintBucket className="h-5 w-5" />, title: t.services.items.branding.title,  text: t.services.items.branding.text },
        { id: "metal",     icon: <Wrench className="h-5 w-5" />,      title: t.services.items.metal.title,     text: t.services.items.metal.text },
        { id: "furniture", icon: <Hammer className="h-5 w-5" />,      title: t.services.items.furniture.title, text: t.services.items.furniture.text },
        { id: "laser",     icon: <Zap className="h-5 w-5" />,         title: t.services.items.laser.title,     text: t.services.items.laser.text },
    ];

    return (
        <section id="services" className="mx-auto pr-8 pl-8 px-4 py-16">
            <div className="mb-8 flex items-end justify-between">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ type: "spring", stiffness: 80, damping: 16 }}
                >
                    <h2 className="text-2xl font-bold sm:text-3xl">{t.services.title}</h2>
                    <p className="mt-2 max-w-xl text-neutral-300">{t.services.subtitle}</p>
                </motion.div>
                <motion.a
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    href="#contact"
                    className="hidden text-sm text-neutral-300 hover:text-white md:inline-flex items-center gap-1 transition-colors"
                >
                    Get a quote <ArrowRight className="h-4 w-4" />
                </motion.a>
            </div>

            <motion.div
                variants={gridContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid gap-4 md:grid-cols-3"
            >
                {cards.map((c) => (
                    <motion.div
                        key={c.id}
                        variants={cardVariant}
                        whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                    >
                        <Card className="h-full w-full rounded-2xl border-white/10 bg-neutral-900 transition-colors hover:border-white/20">
                            <CardHeader className="flex flex-row items-center gap-3">
                                <div className={`rounded-xl bg-gradient-to-tr ${theme.brand} p-2`}>{c.icon}</div>
                                <CardTitle className="text-lg">{c.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0 text-neutral-300">{c.text}</CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Services;
