import {Images, PaintBucket, Ruler} from "lucide-react";
import { motion } from "framer-motion";
import {useLanguage} from "@/app/context/LanguageContext";
import dreamland from '../../../assets/dreamland.jpg'
import Image from "next/image";


const theme = {
    brand: "from-slate-200 via-slate-400 to-slate-700",
    dark: "#0a0e12",
};

const About = () => {

    const {t} = useLanguage()

    return (
        <section id="about" className="mx-auto pr-8 pl-8 px-4 py-16">
            <div className="grid items-center gap-10 md:grid-cols-2">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <h1 className="text-2xl font-bold sm:text-3xl">{t.about.title}</h1>
                    <p className="mt-3 text-neutral-300">
                        {t.about.description}
                    </p>
                    <ul className="mt-6 space-y-2 text-neutral-300">
                        <li className="flex items-center gap-2"><Images className="h-4 w-4" /> {t.about.featurePreview}</li>
                        <li className="flex items-center gap-2"><Ruler className="h-4 w-4" />{t.about.featureMeasure}</li>
                        <li className="flex items-center gap-2"><PaintBucket className="h-4 w-4" /> {t.about.featureMaterials}</li>
                    </ul>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="rounded-3xl border border-white/10 bg-neutral-900 p-2">
                    <div className={`h-64 rounded-2xl overflow-hidden bg-gradient-to-tr ${theme.brand}`}>
                        <Image
                            className='w-full h-full object-cover block'
                            src={dreamland}
                            alt="Dreamland"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About