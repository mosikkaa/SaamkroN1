import type { Metadata } from "next";
import Header from "@/app/components/molecules/Header/Header";
import Footer from "@/app/components/molecules/Footer/Footer";

export const metadata: Metadata = {
    title: "Portfolio",
    description:
        "Browse our portfolio of custom signs, facade lighting, retail signage, and visual advertising projects across Georgia.",
    alternates: {
        canonical: "/portfolio",
    },
    openGraph: {
        title: "Portfolio — Saamkro N1",
        description:
            "Custom signs, facade lighting, retail signage, and visual advertising projects across Georgia by Saamkro N1.",
        type: "website",
    },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col justify-between relative bg-neutral-950 text-neutral-100">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
