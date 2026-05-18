"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/app/components/atoms/Button/Button";
import PortfolioGrid from "@/app/components/molecules/PortfolioGrid/PortfolioGrid";
import { useLanguage } from "@/app/context/LanguageContext";

export default function PortfolioPage() {
    const { t } = useLanguage();

    return (
        <section className="mx-auto px-4 py-16 pr-8 pl-8">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8 flex items-end justify-between"
            >
                <div>
                    <h1 className="text-2xl font-bold sm:text-3xl">{t.portfolio.title}</h1>
                    <p className="mt-2 max-w-xl text-neutral-300">{t.portfolio.subtitle}</p>
                </div>
                <Button
                    asChild
                    variant="secondary"
                    className="rounded-2xl hidden md:block bg-white/10 text-white hover:bg-white/20"
                >
                    <Link href="/#contact">{t.portfolio.ctaStart}</Link>
                </Button>
            </motion.div>
            <PortfolioGrid />
        </section>
    );
}
