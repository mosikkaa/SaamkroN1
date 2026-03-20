import {Button} from "../../atoms/Button/Button";
import { motion } from "framer-motion";
import {useLanguage} from "@/app/context/LanguageContext";

// ——— Brand palette tuned to the provided logo (steel + slate + deep blue)
const theme = {
    brand: "from-slate-200 via-slate-400 to-slate-700",
    dark: "#0a0e12",
};

function Cta() {

    const {t} = useLanguage()

    return (
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative mx-8 my-8 pr-4 pl-4 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
            <div className="absolute inset-0 opacity-20">
                <div className={`absolute -left-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-tr ${theme.brand} blur-3xl`} />
            </div>
            <div className="mx-auto flex flex-col items-center gap-4 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
                <div>
                    <h3 className="text-xl font-semibold sm:text-2xl">{t.cta.title}</h3>
                    <p className="mt-1 text-neutral-300">{t.cta.description}</p>
                </div>
                <Button asChild className="rounded-2xl bg-white/10 hover:bg-white/30">
                    <a href="#contact">{t.cta.button}</a>
                </Button>
            </div>
        </motion.section>
    );
}

export default Cta;