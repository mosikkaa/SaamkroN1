import { notFound } from "next/navigation";
import { getWorkById, portfolioWorks } from "@/app/lib/portfolioData";
import PortfolioWorkDetail from "./PortfolioWorkDetail";

type PageProps = {
    params: Promise<{ id: string }>;
};

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
