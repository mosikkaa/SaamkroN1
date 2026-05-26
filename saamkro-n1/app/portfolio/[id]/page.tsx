import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWorkById, portfolioWorks } from "@/app/lib/portfolioData";
import PortfolioWorkDetail from "../../components/molecules/PortfolioWorkDetail/PortfolioWorkDetail";

type PageProps = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const work = getWorkById(Number(id));
    if (!work) return {};

    const title = work.title;
    const description = `${work.subtitle} · ${work.place}. Custom signs and visual advertising by Saamkro N1, Tbilisi, Georgia.`;

    return {
        title,
        description,
        alternates: {
            canonical: `/portfolio/${id}`,
        },
        openGraph: {
            title: `${work.title} — Saamkro N1`,
            description,
            type: "article",
            images: [
                {
                    url: work.cover.src,
                    width: work.cover.width,
                    height: work.cover.height,
                    alt: `${work.title} — ${work.subtitle}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${work.title} — Saamkro N1`,
            description,
            images: [work.cover.src],
        },
    };
}

export function generateStaticParams() {
    return portfolioWorks.map((work) => ({ id: String(work.id) }));
}

export default async function PortfolioWorkPage({ params }: PageProps) {
    const { id } = await params;
    const work = getWorkById(Number(id));

    if (!work) {
        notFound();
    }

    return <PortfolioWorkDetail work={work} />;
}
