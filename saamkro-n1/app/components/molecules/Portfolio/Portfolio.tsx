import { Button } from "../../atoms/Button/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import PortfolioGrid from "../PortfolioGrid/PortfolioGrid";
import { useLanguage } from "@/app/context/LanguageContext";

const Portfolio = () => {
    const { t } = useLanguage();

    return (
        <section id="portfolio" className="mx-auto pr-8 pl-8 px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8 flex items-end justify-between gap-4 "
            >
                <div>
                    <h1 className="text-2xl font-bold sm:text-3xl">{t.portfolio.title}</h1>
                    <p className="mt-2 max-w-xl text-neutral-300">{t.portfolio.subtitle}</p>
                </div>
                <div className="flex shrink-0  gap-2 sm:flex-row">
                    <Button
                        asChild
                        variant="secondary"
                        className="rounded-2xl bg-white/10 text-white hover:bg-white/20"
                    >
                        <Link href="/portfolio">{t.portfolio.viewAll}</Link>
                    </Button>
                    <Button
                        asChild
                        variant="secondary"
                        className="rounded-2xl hidden md:inline-flex bg-white/10 text-white hover:bg-white/20"
                    >
                        <Link href="/#contact">{t.portfolio.ctaStart}</Link>
                    </Button>
                </div>
            </motion.div>
            <PortfolioGrid />
        </section>
    );
};

export default Portfolio;
