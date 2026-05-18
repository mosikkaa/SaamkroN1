import type { StaticImageData } from "next/image";
import Axis from "../assets/axis.jpg";
import Urban from "../assets/urbantails.jpg";
import Tsinandali from "../assets/tsinandali.jpg";
import Indorama from "../assets/indorama.jpg";
import Stepinn from "../assets/stepinn.jpg";
import Dreamland from "../assets/dreamland.jpg";
import Rockstar from "../assets/rockstar.jpg";
import Image1 from "../assets/image1.jpg";

export type PortfolioTagKey = "facade" | "living" | "retail" | "interior" | "industrial";

export type PortfolioPhoto = {
    src: StaticImageData;
    alt: string;
};

export type PortfolioWork = {
    id: number;
    place: string;
    cover: StaticImageData;
    title: string;
    tagKey: PortfolioTagKey;
    photos: PortfolioPhoto[];
};

export const portfolioWorks: PortfolioWork[] = [
    {
        id: 1,
        place: "Kazbegi, Georgia",
        cover: Stepinn,
        title: "Step Inn",
        tagKey: "facade",
        photos: [
            { src: Stepinn, alt: "Step Inn facade lighting" },
            { src: Image1, alt: "Step Inn signage detail" },
        ],
    },
    {
        id: 2,
        place: "Tsinandali, Georgia",
        cover: Tsinandali,
        title: "Tsinandali Estate",
        tagKey: "living",
        photos: [
            { src: Tsinandali, alt: "Tsinandali Estate living facade" },
            { src: Dreamland, alt: "Tsinandali Estate signage at night" },
        ],
    },
    {
        id: 3,
        place: "Tbilisi, Georgia",
        cover: Urban,
        title: "Urban Tails",
        tagKey: "retail",
        photos: [
            { src: Urban, alt: "Urban Tails retail canopy" },
            { src: Rockstar, alt: "Urban Tails lightbox detail" },
        ],
    },
    {
        id: 4,
        place: "Tbilisi, Georgia",
        cover: Axis,
        title: "Axis Towers — Weather Report",
        tagKey: "interior",
        photos: [
            { src: Axis, alt: "Axis Towers interior letterforms" },
            { src: Image1, alt: "Axis Towers signage fabrication" },
        ],
    },
    {
        id: 5,
        place: "Tbilisi, Georgia",
        cover: Indorama,
        title: "Indorama",
        tagKey: "industrial",
        photos: [
            { src: Indorama, alt: "Indorama industrial signage" },
            { src: Dreamland, alt: "Indorama high-rise install" },
        ],
    },
];

export function getWorkById(id: number): PortfolioWork | undefined {
    return portfolioWorks.find((work) => work.id === id);
}
