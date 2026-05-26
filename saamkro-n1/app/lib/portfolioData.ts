import type { StaticImageData } from "next/image";


import Tsinandali from "../assets/tsinandali.jpg";
import Tsinandali2 from "../assets/tsinandali/tsinandali2.jpg";
import Tsinandali3 from "../assets/tsinandali/tsinandali.jpg"

import HugoBoss from "../assets/hugo/boss.jpg";
import HugoBoss2 from "../assets/hugo/boss1.jpg";
import HugoBoss3 from "../assets/hugo/boss2.jpg";
import HugoBoss4 from "../assets/hugo/boss3.jpg";

import Nisse from "../assets/nisse/nisse1.jpg";
import Nisse2 from "../assets/nisse/nisse2.jpg";
import Nisse3 from "../assets/nisse/nisse3.jpg";
import Nisse4 from "../assets/nisse/nisse4.jpg";

import PaulShark from "../assets/paulshark/paul1.jpg";
import PaulShark2 from "../assets/paulshark/paul2.jpg";
import PaulShark3 from "../assets/paulshark/paul3.jpg";
import PaulShark4 from "../assets/paulshark/paul4.jpg";

import Silknet from "../assets/silknet/silknet.jpg";
import Silknet2 from "../assets/silknet/silknet2.jpg";
import Silknet3 from "../assets/silknet/silknet3.jpg";
import Silknet4 from "../assets/silknet/silknet4.jpg";

import Axis from "../assets/axis/axis1.jpg";
import Axis2 from "../assets/axis/axis2.jpg";
import Axis3 from "../assets/axis/axis3.jpg";
import Axis4 from "../assets/axis/axis4.jpg";
import Axis5 from "../assets/axis/axis5.jpg";
import Axis6 from "../assets/axis/axis6.jpg";

import Borjomi from "../assets/borjomi/borjomi1.jpg";
import Borjomi2 from "../assets/borjomi/borjomi2.jpg";
import Borjomi3 from "../assets/borjomi/borjomi3.jpg";

import Cartlis from "../assets/cartlis/cartlis1.jpg";
import Cartlis2 from "../assets/cartlis/cartlis2.jpg";
import Cartlis3 from "../assets/cartlis/cartlis3.jpg";
import Cartlis4 from "../assets/cartlis/cartlis4.jpg";

import Eastpoint from "../assets/eastpoint/eastpoint1.jpg";
import Eastpoint2 from "../assets/eastpoint/eastpoint2.jpg";
import Eastpoint3 from "../assets/eastpoint/eastpoint3.jpg";
import Eastpoint4 from "../assets/eastpoint/eastpoint4.jpg";

import Eclipse from "../assets/eclipse/eclipse1.jpg";
import Eclipse2 from "../assets/eclipse/eclipse2.jpg";
import Eclipse3 from "../assets/eclipse/eclipse3.jpg";
import Eclipse4 from "../assets/eclipse/eclipse4.jpg";
import Eclipse5 from "../assets/eclipse/eclipse5.jpg";
import Eclipse6 from "../assets/eclipse/eclipse6.jpg";

import Gosport from "../assets/gosport/gosport1.jpg";
import Gosport2 from "../assets/gosport/gosport2.jpg";
import Gosport3 from "../assets/gosport/gosport3.jpg";
import Gosport4 from "../assets/gosport/gosport4.jpg";

import Imedi from "../assets/imedi/imedi1.png";
import Imedi2 from "../assets/imedi/imedi2.png";
import Imedi3 from "../assets/imedi/imedi3.png";

import Indorama from "../assets/indorama/indorama1.jpg";
import Indorama2 from "../assets/indorama/indorama2.jpg";
import Indorama3 from "../assets/indorama/indorama3.jpg";
import Indorama4 from "../assets/indorama/indorama4.jpg";

import Liberty from "../assets/liberty/liberty1.jpg";
import Liberty2 from "../assets/liberty/liberty2.jpg";
import Liberty3 from "../assets/liberty/liberty3.jpg";
import Liberty4 from "../assets/liberty/liberty4.jpg";

import Nabiji from "../assets/nabiji/nabiji1.jpg";
import Nabiji2 from "../assets/nabiji/nabiji2.jpg";
import Nabiji3 from "../assets/nabiji/nabiji3.jpg";
import Nabiji4 from "../assets/nabiji/nabiji4.jpg";

import Oasis from "../assets/oasis/oasis1.jpg";
import Oasis2 from "../assets/oasis/oasis2.jpg";
import Oasis3 from "../assets/oasis/oasis3.jpg";
import Oasis4 from "../assets/oasis/oasis4.jpg";

import Redbull from "../assets/redbull/redbull1.jpg";
import Redbull2 from "../assets/redbull/redbull2.jpg";
import Redbull3 from "../assets/redbull/redbull3.jpg";
import Redbull4 from "../assets/redbull/redbull4.jpg";

import Tsitsinatela from "../assets/tsitsinatela/tsitsinatela1.jpg";
import Tsitsinatela2 from "../assets/tsitsinatela/tsitsinatela2.jpg";
import Tsitsinatela3 from "../assets/tsitsinatela/tsitsinatela3.jpg";
import Tsitsinatela4 from "../assets/tsitsinatela/tsitsinatela4.jpg";
import Tsitsinatela5 from "../assets/tsitsinatela/tsitsinatela5.jpg";
import Tsitsinatela6 from "../assets/tsitsinatela/tsitsinatela6.jpg";

import Urban from "../assets/urban/urban1.jpg";
import Urban2 from "../assets/urban/urban2.jpg";
import Urban3 from "../assets/urban/urban3.jpg";
import Urban4 from "../assets/urban/urban4.jpg";
import Urban5 from "../assets/urban/urban5.jpg";
import Urban6 from "../assets/urban/urban6.jpg";

import Zegna from "../assets/zegna/zegna1.jpg";
import Zegna2 from "../assets/zegna/zegna2.jpg";
import Zegna3 from "../assets/zegna/zegna3.jpg";
import Zegna4 from "../assets/zegna/zegna4.jpg";

import Stepinn from "../assets/steppinn/stepinn1.jpg"
import Stepinn2 from "../assets/steppinn/stepinn2.jpg"
import Stepinn3 from "../assets/steppinn/stepinn3.jpg"
import Stepinn4 from "../assets/steppinn/stepinn4.jpg"
import Stepinn5 from "../assets/steppinn/stepinn5.png"
import Stepinn6 from "../assets/steppinn/stepinn6.png"

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
    subtitle: string;
    tagKey: PortfolioTagKey;
    photos: PortfolioPhoto[];
};

export const portfolioWorks: PortfolioWork[] = [
    {
        id: 1,
        place: "Kazbegi, Georgia",
        cover: Stepinn,
        title: "Step Inn",
        subtitle: "Facade lighting & signage",
        tagKey: "facade",
        photos: [
            { src: Stepinn, alt: "Step Inn facade lighting at night, Kazbegi" },
            { src: Stepinn2, alt: "Step Inn 2" },
            { src: Stepinn3, alt: "Step Inn 3" },
            { src: Stepinn4, alt: "Step Inn 4" },
            { src: Stepinn5, alt: "Step Inn 5" },
            { src: Stepinn6, alt: "Step Inn 6" },
        ],
    },
    {
        id: 2,
        place: "Tsinandali, Georgia",
        cover: Tsinandali,
        title: "Tsinandali Estate",
        subtitle: "Living facade signage",
        tagKey: "living",
        photos: [
            { src: Tsinandali, alt: "Tsinandali Estate 1" },
            { src: Tsinandali2, alt: "Tsinandali Estate 2" },
            { src: Tsinandali3, alt: "Tsinandali Estate 2" },
        ],
    },
    {
        id: 3,
        place: "Tbilisi, Georgia",
        cover: Urban,
        title: "Urban Tails",
        subtitle: "Retail canopy & lightbox",
        tagKey: "retail",
        photos: [
            { src: Urban, alt: "Urban Tails 1" },
            { src: Urban2, alt: "Urban Tails 2" },
            { src: Urban3, alt: "Urban Tails 3" },
            { src: Urban4, alt: "Urban Tails 4" },
            { src: Urban5, alt: "Urban Tails 5" },
            { src: Urban6, alt: "Urban Tails 6" },
        ],
    },
    {
        id: 4,
        place: "Tbilisi, Georgia",
        cover: Axis,
        title: "Axis Towers — Weather Report",
        subtitle: "Interior letterforms",
        tagKey: "interior",
        photos: [
            { src: Axis, alt: "Axis Towers 1" },
            { src: Axis2, alt: "Axis Towers 2" },
            { src: Axis3, alt: "Axis Towers 3" },
            { src: Axis4, alt: "Axis Towers 4" },
            { src: Axis5, alt: "Axis Towers 5" },
            { src: Axis6, alt: "Axis Towers 6" },
        ],
    },
    {
        id: 5,
        place: "Tbilisi, Georgia",
        cover: Indorama,
        title: "Indorama",
        subtitle: "Industrial high-rise signage",
        tagKey: "industrial",
        photos: [
            { src: Indorama, alt: "Indorama 1" },
            { src: Indorama2, alt: "Indorama 2" },
            { src: Indorama3, alt: "Indorama 3" },
            { src: Indorama4, alt: "Indorama 4" },
        ],
    },
    {
        id: 6,
        place: "Tbilisi, Georgia",
        cover: Imedi,
        title: "Imedi",
        subtitle: "Showroom signage",
        tagKey: "interior",
        photos: [
            { src: Imedi, alt: "Imedi 1" },
            { src: Imedi2, alt: "Imedi 2" },
            { src: Imedi3, alt: "Imedi 3" },
        ],
    },
    {
        id: 7,
        place: "Borjomi, Georgia",
        cover: Borjomi,
        title: "Borjomi",
        subtitle: "Facade signage",
        tagKey: "facade",
        photos: [
            { src: Borjomi, alt: "Borjomi 1" },
            { src: Borjomi2, alt: "Borjomi 2" },
            { src: Borjomi3, alt: "Borjomi 3" },
        ],
    },
    {
        id: 8,
        place: "Tbilisi, Georgia",
        cover: Cartlis,
        title: "Cartlis",
        subtitle: "Signage & branding",
        tagKey: "facade",
        photos: [
            { src: Cartlis, alt: "Cartlis 1" },
            { src: Cartlis2, alt: "Cartlis 2" },
            { src: Cartlis3, alt: "Cartlis 3" },
            { src: Cartlis4, alt: "Cartlis 4" },
        ],
    },
    {
        id: 9,
        place: "Tbilisi, Georgia",
        cover: Eastpoint,
        title: "East Point",
        subtitle: "Retail signage",
        tagKey: "retail",
        photos: [
            { src: Eastpoint, alt: "East Point 1" },
            { src: Eastpoint2, alt: "East Point 2" },
            { src: Eastpoint3, alt: "East Point 3" },
            { src: Eastpoint4, alt: "East Point 4" },
        ],
    },
    {
        id: 10,
        place: "Tbilisi, Georgia",
        cover: Eclipse,
        title: "Eclipse",
        subtitle: "Interior signage",
        tagKey: "interior",
        photos: [
            { src: Eclipse, alt: "Eclipse 1" },
            { src: Eclipse2, alt: "Eclipse 2" },
            { src: Eclipse3, alt: "Eclipse 3" },
            { src: Eclipse4, alt: "Eclipse 4" },
            { src: Eclipse5, alt: "Eclipse 5" },
            { src: Eclipse6, alt: "Eclipse 6" },
        ],
    },
    {
        id: 11,
        place: "Tbilisi, Georgia",
        cover: Gosport,
        title: "Gosport",
        subtitle: "Retail canopy & signage",
        tagKey: "retail",
        photos: [
            { src: Gosport, alt: "Gosport 1" },
            { src: Gosport2, alt: "Gosport 2" },
            { src: Gosport3, alt: "Gosport 3" },
            { src: Gosport4, alt: "Gosport 4" },
        ],
    },
    {
        id: 12,
        place: "Tbilisi, Georgia",
        cover: Liberty,
        title: "Liberty",
        subtitle: "Facade signage",
        tagKey: "facade",
        photos: [
            { src: Liberty, alt: "Liberty 1" },
            { src: Liberty2, alt: "Liberty 2" },
            { src: Liberty3, alt: "Liberty 3" },
            { src: Liberty4, alt: "Liberty 4" },
        ],
    },
    {
        id: 13,
        place: "Tbilisi, Georgia",
        cover: Nabiji,
        title: "Nabiji",
        subtitle: "Interior letterforms",
        tagKey: "interior",
        photos: [
            { src: Nabiji, alt: "Nabiji 1" },
            { src: Nabiji2, alt: "Nabiji 2" },
            { src: Nabiji3, alt: "Nabiji 3" },
            { src: Nabiji4, alt: "Nabiji 4" },
        ],
    },
    {
        id: 14,
        place: "Chakvi, Georgia",
        cover: Oasis,
        title: "Oasis",
        subtitle: "Retail signage",
        tagKey: "retail",
        photos: [
            { src: Oasis, alt: "Oasis 1" },
            { src: Oasis2, alt: "Oasis 2" },
            { src: Oasis3, alt: "Oasis 3" },
            { src: Oasis4, alt: "Oasis 4" },
        ],
    },
    {
        id: 15,
        place: "Tbilisi, Georgia",
        cover: Redbull,
        title: "Red Bull",
        subtitle: "Branding & advertising",
        tagKey: "facade",
        photos: [
            { src: Redbull, alt: "Red Bull 1" },
            { src: Redbull2, alt: "Red Bull 2" },
            { src: Redbull3, alt: "Red Bull 3" },
            { src: Redbull4, alt: "Red Bull 4" },
        ],
    },
    {
        id: 16,
        place: "Tbilisi, Georgia",
        cover: Tsitsinatela,
        title: "Tsitsinatela",
        subtitle: "Facade lighting & signage",
        tagKey: "facade",
        photos: [
            { src: Tsitsinatela, alt: "Tsitsinatela 1" },
            { src: Tsitsinatela2, alt: "Tsitsinatela 2" },
            { src: Tsitsinatela3, alt: "Tsitsinatela 3" },
            { src: Tsitsinatela4, alt: "Tsitsinatela 4" },
            { src: Tsitsinatela5, alt: "Tsitsinatela 5" },
            { src: Tsitsinatela6, alt: "Tsitsinatela 6" },
        ],
    },
    {
        id: 17,
        place: "Tbilisi, Georgia",
        cover: Zegna,
        title: "Zegna",
        subtitle: "Retail display & signage",
        tagKey: "retail",
        photos: [
            { src: Zegna, alt: "Zegna 1" },
            { src: Zegna2, alt: "Zegna 2" },
            { src: Zegna3, alt: "Zegna 3" },
            { src: Zegna4, alt: "Zegna 4" },
        ],
    },
    {
        id: 18,
        place: "Tbilisi, Georgia",
        cover: HugoBoss,
        title: "Hugo Boss",
        subtitle: "Retail display & signage",
        tagKey: "retail",
        photos: [
            { src: HugoBoss, alt: "Hugo Boss 1" },
            { src: HugoBoss2, alt: "Hugo Boss 2" },
            { src: HugoBoss3, alt: "Hugo Boss 3" },
            { src: HugoBoss4, alt: "Hugo Boss 4" },
        ],
    },
    {
        id: 19,
        place: "Tbilisi, Georgia",
        cover: Nisse,
        title: "Nisse",
        subtitle: "Signage & branding",
        tagKey: "facade",
        photos: [
            { src: Nisse, alt: "Nisse 1" },
            { src: Nisse2, alt: "Nisse 2" },
            { src: Nisse3, alt: "Nisse 3" },
            { src: Nisse4, alt: "Nisse 4" },
        ],
    },
    {
        id: 20,
        place: "Tbilisi, Georgia",
        cover: PaulShark,
        title: "Paul & Shark",
        subtitle: "Retail display & signage",
        tagKey: "retail",
        photos: [
            { src: PaulShark, alt: "Paul & Shark 1" },
            { src: PaulShark2, alt: "Paul & Shark 2" },
            { src: PaulShark3, alt: "Paul & Shark 3" },
            { src: PaulShark4, alt: "Paul & Shark 4" },
        ],
    },
    {
        id: 21,
        place: "Tbilisi, Georgia",
        cover: Silknet,
        title: "Silknet",
        subtitle: "Facade signage",
        tagKey: "facade",
        photos: [
            { src: Silknet, alt: "Silknet 1" },
            { src: Silknet2, alt: "Silknet 2" },
            { src: Silknet3, alt: "Silknet 3" },
            { src: Silknet4, alt: "Silknet 4" },
        ],
    },
];

export function getWorkById(id: number): PortfolioWork | undefined {
    return portfolioWorks.find((work) => work.id === id);
}
