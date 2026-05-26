"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectCard } from "../../atoms/Card/Card";
import { portfolioWorks } from "@/app/lib/portfolioData";
import { useLanguage } from "@/app/context/LanguageContext";

const gridContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardItem = {
    hidden: { opacity: 0, y: 36 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 80, damping: 16 },
    },
};

const PortfolioGrid = ({ limit }: { limit?: number }) => {
    const { t } = useLanguage();
    const works = limit ? portfolioWorks.slice(0, limit) : portfolioWorks;

    return (
        <motion.div
            variants={gridContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
            {works.map((work) => (
                <motion.div key={work.id} variants={cardItem}>
                    <Link href={`/portfolio/${work.id}`} className="block">
                        <ProjectCard
                            it={{
                                ...work,
                                src: work.cover,
                                tag: t.portfolio.tags[work.tagKey],
                            }}
                        >
                            {work.place}
                        </ProjectCard>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default PortfolioGrid;
