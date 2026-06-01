'use client';
import { Menu, X } from "lucide-react";
import Logo from '../../../favicon.ico'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Language from '../../atoms/Language/Language'
import { useLanguage } from "@/app/context/LanguageContext";
import { useSectionNav } from "@/app/hooks/useSectionNav";
import { useEffect, useState } from "react";


function Header() {
    const [open, setOpen] = useState(false);

    const { t } = useLanguage();
    const pathname = usePathname();
    const { navigateToSection: scrollTo } = useSectionNav();

    const navigateToSection = (e: React.MouseEvent, id: string, onNavigate?: () => void) => {
        scrollTo(e, id);
        onNavigate?.();
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 960);
      };
    
      handleResize(); 
      window.addEventListener("resize", handleResize);
    
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navItems = [
        { label: t.nav.home, href: "home" },
        { label: t.nav.services, href: "services" },
        { label: t.nav.portfolio, href: "portfolio" },
        { label: t.nav.about, href: "about" },
        { label: t.nav.contact, href: "contact" },
    ];

    const renderNavLink = (n: { label: string; href: string }, onNavigate?: () => void) => {
        const className =
            n.href === "portfolio" && pathname.startsWith("/portfolio")
                ? "text-sm text-white transition-colors"
                : "text-sm text-neutral-300 hover:text-white transition-colors";

        if (n.href === "portfolio") {
            return (
                <Link
                    key={n.href}
                    href="/portfolio"
                    onClick={onNavigate}
                    className={className}
                >
                    {n.label}
                </Link>
            );
        }

        return (
            <Link
                key={n.href}
                href="/"
                onClick={(e) => navigateToSection(e, n.href, onNavigate)}
                className={className}
            >
                {n.label}
            </Link>
        );
    };

    return (
        <header className="sticky top-0 z-50 backdrop-blur pr-4 pl-4 supports-[backdrop-filter]:bg-neutral-950/60">
            <div className="mx-auto flex items-center justify-between px-4 py-4">
                <Link href="/" className="flex items-center gap-3">
                    <Image src={Logo} alt="Saamkro N1 logo" className="h-10 w-10 rounded-full object-contain"/>
                    <span className="text-lg font-semibold tracking-tight">{t.nav.name}</span>
                </Link>
                {!isMobile && 
                   (<nav className="flex gap-6 ">
                       {navItems.map((n) => renderNavLink(n))}
                   </nav>
                   )}
                <div className="flex gap-4">
                    <Language/>
                    {isMobile && (
                         <button
                           type="button"
                           onClick={() => setOpen(!open)}
                           aria-label="Toggle menu"
                         >
                           {open ? <X /> : <Menu />}
                         </button>
                       )}
                </div>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full flex flex-col left-0 w-full z-50 !block min-[850px]:!hidden"
                    >
                        <div className="mx-4 flex flex-col gap-2 mb-4 mt-2 rounded-2xl px-4 py-3 bg-neutral-950 shadow-2xl">
                            {navItems.map((n) => renderNavLink(n, () => setOpen(false)))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;
