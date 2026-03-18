import {ArrowRight, Hammer, PaintBucket, Ruler} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "../../atoms/Card/Card";
import { motion } from "framer-motion";

const theme = {
    brand: "from-slate-200 via-slate-400 to-slate-700",
    dark: "#0a0e12",
};

function Services() {
    const cards = [
        { icon: <Hammer className="h-5 w-5" />, title: "Custom Furniture", text: "Tables, counters, and display units with durable materials and clean finishes." },
        { icon: <Ruler className="h-5 w-5" />, title: "Title Signs & Wayfinding", text: "Exterior/interior signage, letterforms, and installation with laser‑cut precision." },
        { icon: <PaintBucket className="h-5 w-5" />, title: "Branding & Advertising", text: "Logos, storefront wraps, banners, and campaign visuals that match your space." },
    ];
    return (
        <section id="services" className="mx-auto pr-8 pl-8 px-4 py-16">
            <div className="mb-8 flex items-end justify-between">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <h1 className="text-2xl font-bold sm:text-3xl">Services</h1>
                    <p className="mt-2 max-w-xl text-neutral-300">End‑to‑end: concept, 3D, fabrication, transport, and install across Georgia.</p>
                </motion.div>
                <motion.a initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} href="#contact" className="hidden text-sm text-neutral-300 hover:text-white md:inline-flex items-center gap-1">Get a quote <ArrowRight className="h-4 w-4" /></motion.a>
            </div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="grid gap-4 md:grid-cols-3">
                {cards.map((c) => (
                    <Card key={c.title} className="rounded-2xl border-white/10 bg-neutral-900">
                        <CardHeader className="flex flex-row items-center gap-3">
                            <div className={`rounded-xl bg-gradient-to-tr ${theme.brand} p-2`}>{c.icon}</div>
                            <CardTitle className="text-lg">{c.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 text-neutral-300">{c.text}</CardContent>
                    </Card>
                ))}
            </motion.div>
        </section>
    );
}

export default Services;