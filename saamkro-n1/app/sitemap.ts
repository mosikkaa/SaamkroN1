import { MetadataRoute } from "next";
import { portfolioWorks } from "./lib/portfolioData";

const BASE_URL = "https://saamkro1.com";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/portfolio`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        ...portfolioWorks.map((work) => ({
            url: `${BASE_URL}/portfolio/${work.id}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
    ];
}
