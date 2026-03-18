import {motion} from "framer-motion";
import {ChevronRight, Hammer, PaintBucket, Ruler} from "lucide-react";
import {Button} from "../../atoms/Button/Button";
import Stepinn from '../../../assets/stepinn.jpg'
import Image from "next/image";

const theme = {
    brand: "from-slate-200 via-slate-400 to-slate-700",
    dark: "#0a0e12",
};


const Hero = () => {
    return (
        <motion.section initial={{ opacity: 0, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} id="home" className="relative isolate overflow-hidden pr-6 pl-6">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className={`absolute -left-20 -top-24 h-72 w-72 rounded-full bg-gradient-to-tr ${theme.brand} blur-3xl opacity-15`} />
                <div className={`absolute right-0 top-1/3 h-72 w-72 rounded-full bg-gradient-to-tr ${theme.brand} blur-3xl opacity-10`} />
            </div>
            <div className="mx-auto grid items-center gap-10 px-4 pb-12 pt-7 md:grid-cols-2 md:gap-16 md:pb-16 md:pt-12">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
            <ChevronRight className="h-3 w-3" /> Since 2015 — Tbilisi & beyond
          </span>
                    <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                        Furniture, Title Signage & <span className={`bg-gradient-to-tr ${theme.brand} bg-clip-text text-transparent`}>Advertising</span>
                    </h1>
                    <p className="mt-4 max-w-xl text-neutral-300">
                        We design and build standout furniture, company titles, and visual advertising. From shopfronts to full spatial branding, we handle concept → fabrication → install.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Button asChild className="rounded-2xl bg-white/10 text-white hover:bg-white/20">
                            <a href="#portfolio">See work</a>
                        </Button>
                        <Button asChild variant="secondary" className="rounded-2xl bg-white/10 text-white hover:bg-white/20">
                            <a href="#contact">Get a quote</a>
                        </Button>
                    </div>
                    <ul className="mt-8 flex flex-wrap gap-6 text-sm text-neutral-300">
                        <li className="flex items-center gap-2"><Hammer className="h-4 w-4" /> In‑house fabrication</li>
                        <li className="flex items-center gap-2"><Ruler className="h-4 w-4" /> Precise installation</li>
                        <li className="flex items-center gap-2"><PaintBucket className="h-4 w-4" /> Custom finishes</li>
                    </ul>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                    <div className="relative rounded-3xl border border-white/10 bg-neutral-900 p-2 shadow-2xl">
                        <Image src={Stepinn} alt="Step Inn facade lighting" className="h-64 w-full rounded-2xl object-cover" />
                        <div className="absolute inset-2 rounded-2xl border border-white/10" />
                        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-neutral-950/70 p-3 text-xs text-neutral-300">
                            <p className="font-medium text-white">Case study: Step Inn — facade lighting</p>
                            <p>Night-time wayfinding & perimeter lighting; bilingual logo signage.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Hero;