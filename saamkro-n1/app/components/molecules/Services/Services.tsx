import {ArrowRight, Hammer, PaintBucket, Ruler} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "../../atoms/Card/Card";
import { motion } from "framer-motion";
import {useLanguage} from "@/app/context/LanguageContext";

const theme = {
    brand: "from-slate-200 via-slate-400 to-slate-700",
    dark: "#0a0e12",
};

function Services() {

    const {t} = useLanguage()

    const cards = [
        { icon: <Hammer className="h-5 w-5" />, title: `${t.services.items.furniture.title}`, text: `${t.services.items.furniture.text}` },
        { icon: <Ruler className="h-5 w-5" />, title: `${t.services.items.signage.title}`, text: `${t.services.items.signage.text}` },
        { icon: <PaintBucket className="h-5 w-5" />, title: `${t.services.items.branding.title}`, text: `${t.services.items.branding.text}` },
    ];
    return (
        <section id="services" className="mx-auto pr-8 pl-8 px-4 py-16">
            <div className="mb-8 flex items-end justify-between">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <h1 className="text-2xl font-bold sm:text-3xl">{t.services.title}</h1>
                    <p className="mt-2 max-w-xl text-neutral-300">{t.services.subtitle}</p>
                </motion.div>
                <motion.a initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} href="#contact" className="hidden text-sm text-neutral-300 hover:text-white md:inline-flex items-center gap-1">Get a quote <ArrowRight className="h-4 w-4" /></motion.a>
            </div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut"}} className="grid gap-4 md:grid-cols-3">
                {cards.map((c,i) => (
                    <motion.div key={c.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut",delay:i*0.2 }}>
                        <Card className="rounded-2xl border-white/10 bg-neutral-900">
                            <CardHeader className="flex flex-row items-center gap-3">
                                <div className={`rounded-xl bg-gradient-to-tr ${theme.brand} p-2`}>{c.icon}</div>
                                <CardTitle className="text-lg ">{c.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0 text-neutral-300">{c.text}</CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Services;