"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MapPin } from "lucide-react";
import type { PortfolioWork } from "@/app/lib/portfolioData";
import { useLanguage } from "@/app/context/LanguageContext";
import { cn } from "@/app/lib/utils";

export default function PortfolioWorkDetail({ work }: { work: PortfolioWork }) {
    const { t } = useLanguage();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedPhoto = work.photos[selectedIndex];
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, currentIndex]);

    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % work.photos.length);
    const prevImage = () => setCurrentIndex((prev) => (prev - 1 + work.photos.length) % work.photos.length);

    return (
        <section className="mx-auto px-8 py-16 sm:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                >
                    <ArrowLeft className="size-4" />
                    {t.portfolio.backToAll}
                </Link>

                <div className="mt-6 flex flex-col gap-4">
                    <h1 className="text-3xl font-bold sm:text-4xl">{work.title}</h1>
                    <p className="text-neutral-300">{t.portfolio.tags[work.tagKey]}</p>

                    <div
                        style={{ position: "relative", width: "100%", height: 550 }}
                        className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ position: "absolute", inset: 0 }}
                            >
                                <Image
                                    src={selectedPhoto.src}
                                    alt={selectedPhoto.alt}
                                    fill
                                    priority
                                    style={{ objectFit: "cover" }}
                                    sizes="100vw"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

            
                    <div className="flex flex-col justify-between gap-4">
                        <div className="flex items-center gap-1.5 text-sm text-neutral-400">
                            <MapPin className="size-4 text-white/50" />
                            <span>{work.place}</span>
                        </div>

                     
                        <div className="flex flex-row gap-2 overflow-x-auto pb-1">
                            {work.photos.map((photo, i) => (
                                <button
                                    key={`${work.id}-thumb-${i}`}
                                    type="button"
                                    onClick={() => setSelectedIndex(i)}
                                    aria-label={photo.alt}
                                    aria-pressed={i === selectedIndex}
                                    className={cn(
                                        "relative overflow-hidden rounded-xl border bg-neutral-900 transition-all",
                                        i === selectedIndex
                                            ? "border-white ring-2 ring-white/30"
                                            : "border-white/10 opacity-70 hover:border-white/30 hover:opacity-100"
                                    )}
                                    style={{ width: 102, height: 102, flexShrink: 0 }}
                                >
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        width={102}
                                        height={102}
                                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                        sizes="72px"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    );
}