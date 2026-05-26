"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, X, ZoomIn } from "lucide-react";
import type { PortfolioWork } from "@/app/lib/portfolioData";
import { portfolioWorks } from "@/app/lib/portfolioData";
import { useLanguage } from "@/app/context/LanguageContext";
import { cn } from "@/app/lib/utils";

export default function PortfolioWorkDetail({ work }: { work: PortfolioWork }) {
    const { t } = useLanguage();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const selectedPhoto = work.photos[selectedIndex];
    const nextWork = portfolioWorks.find((w) => w.id === work.id + 1) ?? portfolioWorks[0];


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxOpen) {
                if (e.key === "Escape") setLightboxOpen(false);
                if (e.key === "ArrowRight") setLightboxIndex((p) => (p + 1) % work.photos.length);
                if (e.key === "ArrowLeft") setLightboxIndex((p) => (p - 1 + work.photos.length) % work.photos.length);
            } else {
                if (e.key === "ArrowRight") setSelectedIndex((p) => (p + 1) % work.photos.length);
                if (e.key === "ArrowLeft") setSelectedIndex((p) => (p - 1 + work.photos.length) % work.photos.length);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxOpen, work.photos.length]);


    useEffect(() => {
        document.body.style.overflow = lightboxOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [lightboxOpen]);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <>
            <section className="mx-auto px-8 py-16 sm:px-8 max-w-[1600px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 80, damping: 18 }}
                >
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                        <ArrowLeft className="size-4" />
                        {t.portfolio.backToAll}
                    </Link>

                    <div className="mt-6 flex flex-col gap-4">

                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.08 }}
                                className="text-3xl font-bold sm:text-4xl"
                            >
                                {work.title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.18 }}
                                className="mt-1 text-neutral-400 text-sm"
                            >
                                {t.portfolio.tags[work.tagKey]}
                            </motion.p>
                        </div>


                        <motion.div
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.12 }}
                            style={{ position: "relative", width: "100%", height: 520 }}
                            className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 cursor-zoom-in"
                            onClick={() => openLightbox(selectedIndex)}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                                    style={{ position: "absolute", inset: 0 }}
                                >
                                    <Image
                                        src={selectedPhoto.src}
                                        alt={selectedPhoto.alt}
                                        fill
                                        priority
                                        style={{ objectFit: "cover" }}
                                        sizes="(max-width: 768px) 100vw, 80vw"
                                    />
                                </motion.div>
                            </AnimatePresence>


                            <div className="absolute top-3 right-3 rounded-full border border-white/20 bg-neutral-950/60 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur pointer-events-none">
                                <ZoomIn className="size-4 text-white/80" />
                            </div>

                            {work.photos.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setSelectedIndex((p) => (p - 1 + work.photos.length) % work.photos.length); }}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-neutral-950/70 p-2 text-white backdrop-blur hover:bg-neutral-950/90 transition-colors"
                                        aria-label="Previous photo"
                                    >
                                        <ArrowLeft className="size-4" />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setSelectedIndex((p) => (p + 1) % work.photos.length); }}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-neutral-950/70 p-2 text-white backdrop-blur hover:bg-neutral-950/90 transition-colors"
                                        aria-label="Next photo"
                                    >
                                        <ArrowRight className="size-4" />
                                    </button>
                                </>
                            )}
                        </motion.div>

                        <div className="flex flex-col gap-4 sm:items-start sm:justify-between">
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.28 }}
                                className="flex items-center gap-1.5 text-sm text-neutral-400"
                            >
                                <MapPin className="size-4 text-white/50" />
                                <span>{work.place}</span>
                            </motion.div>


                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.35 }}
                                className="flex flex-row gap-2 flex-wrap"
                            >
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
                                                : "border-white/10 opacity-60 hover:border-white/30 hover:opacity-100"
                                        )}
                                        style={{ width: 88, height: 88, flexShrink: 0 }}
                                    >
                                        <Image
                                            src={photo.src}
                                            alt={photo.alt}
                                            width={88}
                                            height={88}
                                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                            sizes="88px"
                                        />
                                    </button>
                                ))}
                            </motion.div>
                        </div>


                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                            className="mt-6 border-t border-white/10 pt-6"
                        >
                            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">Next project</p>
                            <Link
                                href={`/portfolio/${nextWork.id}`}
                                className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors"
                            >
                                {nextWork.title}
                                <ArrowRight className="size-4" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </section>


            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
                        onClick={() => setLightboxOpen(false)}
                    >

                        <button
                            onClick={() => setLightboxOpen(false)}
                            className="absolute top-4 right-4 z-10 rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20 transition-colors"
                            aria-label="Close"
                        >
                            <X className="size-5" />
                        </button>


                        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-sm text-white/50 tabular-nums">
                            {lightboxIndex + 1} / {work.photos.length}
                        </div>


                        <AnimatePresence mode="wait">
                            <motion.div
                                key={lightboxIndex}
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                                className="relative"
                                style={{ width: "90vw", height: "85vh", maxWidth: 1400 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={work.photos[lightboxIndex].src}
                                    alt={work.photos[lightboxIndex].alt}
                                    fill
                                    priority
                                    style={{ objectFit: "contain" }}
                                    sizes="90vw"
                                />
                            </motion.div>
                        </AnimatePresence>


                        {work.photos.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => { e.stopPropagation(); setLightboxIndex((p) => (p - 1 + work.photos.length) % work.photos.length); }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20 transition-colors"
                                    aria-label="Previous"
                                >
                                    <ArrowLeft className="size-5" />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); setLightboxIndex((p) => (p + 1) % work.photos.length); }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20 transition-colors"
                                    aria-label="Next"
                                >
                                    <ArrowRight className="size-5" />
                                </button>
                            </>
                        )}


                        {work.photos.length > 1 && (
                            <div
                                className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {work.photos.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setLightboxIndex(i)}
                                        aria-label={`Go to photo ${i + 1}`}
                                        className={cn(
                                            "rounded-full transition-all",
                                            i === lightboxIndex
                                                ? "w-4 h-1.5 bg-white"
                                                : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                                        )}
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
