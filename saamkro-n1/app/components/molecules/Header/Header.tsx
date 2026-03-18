import {Button} from "../../atoms/Button/Button";
import {Menu, X} from "lucide-react";
import Logo from '../../../../public/logo.jpg'
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";


const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];


function Header({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
    return (
        <header className="sticky top-0 z-50 backdrop-blur pr-4 pl-4 supports-[backdrop-filter]:bg-neutral-950/60">
            <div className="mx-auto flex items-center justify-between px-4 py-4">
                <a href="#home" className="flex items-center gap-3">
                    <Image src={Logo} alt="Saamkro N1 logo" className="h-10 w-10 rounded-full object-contain"/>
                    <span className="text-lg font-semibold tracking-tight">Saamkro N1</span>
                </a>
                <nav className="hidden gap-6 md:flex">
                    {navItems.map((n) => (
                        <a key={n.href} href={n.href} className="text-sm text-neutral-300 hover:text-white">
                            {n.label}
                        </a>

                    ))}
                </nav>
                <div className="hidden md:block">
                    <Button className="rounded-2xl bg-white/10 hover:bg-white/20" asChild>
                        <a href="#contact">Get a quote</a>
                    </Button>
                </div>
                <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                    {open ? <X /> : <Menu />}
                </button>
            </div>
            {open && (
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-0 w-full z-50 bg-neutral-950/95 backdrop-blur-lg md:hidden"
                        >
                            <div className="mx-4 mb-4 mt-2 rounded-2xl border border-white/10 bg-neutral-900 p-2 shadow-2xl">
                                {navItems.map((n) => (
                                    <a
                                        key={n.href}
                                        href={n.href}
                                        onClick={() => setOpen(false)}
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