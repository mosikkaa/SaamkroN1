import { motion } from "framer-motion";


function Footer() {
    return (
        <footer className="mt-10 border-t pr-4 pl-4 border-white/10">
            <motion.div initial={{ opacity: 0, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="mx-auto flex  flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-sm text-neutral-400">© {new Date().getFullYear()} Saamkro N1. All rights reserved.</motion.p>
                <motion.nav initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex gap-5 text-sm text-neutral-300">
                    <a href="#services" className="hover:text-white">Services</a>
                    <a href="#portfolio" className="hover:text-white">Portfolio</a>
                    <a href="#contact" className="hover:text-white">Contact</a>
                </motion.nav>
            </motion.div>
        </footer>
    );
}

export default Footer