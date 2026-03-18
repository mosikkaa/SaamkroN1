import {Button} from "../../atoms/Button/Button";
import { motion } from "framer-motion";
import Axis from '../../../assets/axis.jpg'
import Urban from '../../../assets/urbantails.jpg'
import Tsinandali from '../../../assets/tsinandali.jpg'
import Indorama from '../../../assets/indorama.jpg'
import Stepinn from '../../../assets/stepinn.jpg'
import Image from "next/image";


const Portfolio = () => {
    const items = [
        { id: 1, src: Stepinn, title: "Step Inn", tag: "Facade lighting & signage" },
        { id: 2, src: Tsinandali, title: "Tsinandali Estate", tag: "Living facade signage" },
        { id: 3, src: Urban, title: "Urban Tails", tag: "Retail canopy & lightbox" },
        { id: 4, src: Axis, title: "Axis Towers — Weather Report", tag: "Interior letterforms" },
        { id: 5, src: Indorama, title: "Indorama", tag: "Industrial high‑rise signage" },
    ];

    return (
        <section id="portfolio" className="mx-auto pr-8 pl-8 px-4 py-16">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-8 flex items-end justify-between">
                <div>
                    <h1 className="text-2xl font-bold sm:text-3xl">Projects</h1>
                    <p className="mt-2 max-w-xl text-neutral-300">A few builds and installs. We’ll swap in more photos as you send them.</p>
                </div>
                <Button asChild variant="secondary" className="rounded-2xl bg-white/10 text-white hover:bg-white/20">
                    <a href="#contact">Start a project</a>
                </Button>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((it) => (
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} key={it.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                        <Image src={it.src} alt={it.title} className="h-48 w-full object-cover" />
                        <div className="absolute inset-0 flex items-end p-4">
                            <div className="rounded-xl border border-white/10 bg-neutral-950/70 p-3">
                                <p className="text-sm font-medium text-white">{it.title}</p>
                                <p className="text-xs text-neutral-300">{it.tag}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;