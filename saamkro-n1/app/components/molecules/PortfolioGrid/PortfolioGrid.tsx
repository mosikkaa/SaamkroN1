"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectCard } from "../../atoms/Card/Card";
import { portfolioWorks } from "@/app/lib/portfolioData";
import { useLanguage } from "@/app/context/LanguageContext";

const PortfolioGrid = () => {
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
            {portfolioWorks.map((work, i) => (
                <motion.div
                    key={work.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.15 }}
                >
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
