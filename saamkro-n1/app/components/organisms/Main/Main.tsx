'use client';
import {useState} from "react";
import Header from "../../molecules/Header/Header";
import Hero from "../../molecules/Hero/Hero";
import Services from "../../molecules/Services/Services";
import Portfolio from "../../molecules/Portfolio/Portfolio";
import About from "../../molecules/About/About";
import CTA from "../../molecules/CTA/Cta";
import Contact from "../../molecules/Contact/Contact";
import Footer from "../../molecules/Footer/Footer";


function Main() {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen relative bg-neutral-950 text-neutral-100">
            <Header open={open} setOpen={setOpen} />
            <main>
                <Hero />
                <Services />
                <Portfolio />
                <About />
                <CTA />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default Main;