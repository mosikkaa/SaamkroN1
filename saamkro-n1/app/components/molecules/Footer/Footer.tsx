import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { useSectionNav } from "@/app/hooks/useSectionNav";

function Footer() {
    const { t } = useLanguage();
    const { navigateToSection } = useSectionNav();

    const linkClass = "hover:text-white transition-colors";

    return (
        <footer className="mt-10 border-t pr-4 pl-4 border-white/10">
            <motion.div initial={{ opacity: 0, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="mx-auto flex  flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-sm text-neutral-400">© {new Date().getFullYear()} Saamkro N1. All rights reserved.</motion.p>
                <motion.nav initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex gap-5 text-sm text-neutral-300">
                    <Link href="/" onClick={(e) => navigateToSection(e, "services")} className={linkClass}>
                        {t.nav.services}
                    </Link>
                    <Link href="/portfolio" className={linkClass}>
                        {t.nav.portfolio}
                    </Link>
                    <Link href="/" onClick={(e) => navigateToSection(e, "contact")} className={linkClass}>
                        {t.nav.contact}
                    </Link>
                </motion.nav>
            </motion.div>
        </footer>
    );
}

export default Footer;
