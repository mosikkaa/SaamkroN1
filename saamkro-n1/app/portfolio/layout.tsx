"use client";

import { useState } from "react";
import Header from "@/app/components/molecules/Header/Header";
import Footer from "@/app/components/molecules/Footer/Footer";

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen relative bg-neutral-950 text-neutral-100">
            <Header open={open} setOpen={setOpen} />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
