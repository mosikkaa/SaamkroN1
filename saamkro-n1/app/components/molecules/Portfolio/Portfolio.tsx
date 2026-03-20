import {Button} from "../../atoms/Button/Button";
import { motion } from "framer-motion";
import Axis from '../../../assets/axis.jpg'
import Urban from '../../../assets/urbantails.jpg'
import Tsinandali from '../../../assets/tsinandali.jpg'
import Indorama from '../../../assets/indorama.jpg'
import Stepinn from '../../../assets/stepinn.jpg'
import Image from "next/image";
import {ProjectCard} from "../../atoms/Card/Card";
import {MapPin} from "lucide-react";
import {useLanguage} from "@/app/context/LanguageContext";


const Portfolio = () => {

    const { t } = useLanguage();

    const items = [
        { id: 1, place:"Kazbegi,Georgia", src: Stepinn, title: "Step Inn", tag: "Facade lighting & signage" },
        { id: 2, place:"Tsinandali,Georgia", src: Tsinandali, title: "Tsinandali Estate", tag: "Living facade signage" },
        { id: 3, place:"Tbilisi,Georgia", src: Urban, title: "Urban Tails", tag: "Retail canopy & lightbox" },
        { id: 4, place:"Tbilisi,Georgia", src: Axis, title: "Axis Towers — Weather Report", tag: "Interior letterforms" },
        { id: 5, place:"Tbilisi,Georgia", src: Indorama, title: "Indorama", tag: "Industrial high‑rise signage" },
    ];

    return (
        <section id="portfolio" className="mx-auto pr-8 pl-8 px-4 py-16">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-8 flex items-end justify-between">
                <div>
                    <h1 className="text-2xl font-bold sm:text-3xl">{t.portfolio.title}</h1>
                    <p className="mt-2 max-w-xl text-neutral-300">{t.portfolio.subtitle}</p>
                </div>
                <Button asChild variant="secondary" className="rounded-2xl bg-white/10 text-white hover:bg-white/20">
                    <a href="#contact">Start a project</a>
                </Button>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((it,i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut",delay:i*0.15 }}>
                        <ProjectCard title={it.title} key={it.id} description={it.tag} it={it}>
                            {it.place}
                        </ProjectCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;