import {Button} from "../../atoms/Button/Button";
import {Menu, X} from "lucide-react";
import Logo from '../../../../public/logo.jpg'
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";
import Language from '../../atoms/Language/Language'
import {useLanguage} from "@/app/context/LanguageContext";


function Header({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {

    const { t } = useLanguage();

    const navItems = [
        { label: t.nav.home, href: "home" },
        { label: t.nav.services, href: "services" },
        { label: t.nav.portfolio, href: "portfolio" },
        { label: t.nav.about, href: "about" },
        { label: t.nav.contact, href: "contact" },
    ];

    const handleScroll = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <header className="sticky top-0 z-50 backdrop-blur pr-4 pl-4 supports-[backdrop-filter]:bg-neutral-950/60">
            <div className="mx-auto flex items-center justify-between px-4 py-4">
                <a href="/" onClick={(e) => handleScroll(e, 'home')} className="flex items-center gap-3">
                    <Image src={Logo} alt="Saamkro N1 logo" className="h-10 w-10 rounded-full object-contain"/>
                    <span className="text-lg font-semibold tracking-tight">{t.nav.name}</span>
                </a>
                <nav className="hidden gap-6 md:flex">
                    {navItems.map((n) => (
                        <a
                            key={n.href}
                            href={`${n.href}`}
                            onClick={(e) => handleScroll(e, n.href)}
                            className="text-sm text-neutral-300 hover:text-white transition-colors"
                        >
                            {n.label}
                        </a>
                    ))}
                </nav>
                <div className='flex gap-4'>
                    <Language/>
                    <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {open && (
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-0 w-full z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 md:hidden"
                        >
                            <div className="mx-4 mb-4 mt-2 rounded-2xl bg-neutral-950 shadow-2xl">
                                {navItems.map((n) => (
                                    <a
                                        key={n.href}
                                        href={`${n.href}`}
                                        onClick={(e) => {handleScroll(e, n.href);setOpen(false)}}
                                        className="block rounded-xl px-4 py-3 text-neutral-300 hover:bg-white/5"
                                    >
                                        {n.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </header>
    );
}

export default Header;