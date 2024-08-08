import {Config} from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Product {
    id: number,
    p_img: string,
    p_name: string,
    p_description: string,
    p_color: string,
    p_type: ProductType,
}

export enum ProductType {
    RUNDE_SALAT_PARADEIS = "Runde Salat Paradeis",
    FLEISCHPARADEIS = "Fleischparadeis",
    CHERRYPARADEIS = "Cherryparadeis",
    PARADEIS_BALK_U_HOCH = "Paradeis für Balkon und Hochbeet",
    PAPRIKA = "Paprika",
    PFEFFERONI = "Pfefferoni",
    CHILI = "Chili",
    MELANZANI = "Melanzani",
    PHYSALIS = "Physalis",
    MELONEN = "Melonen",
    KUERBIS = "Kürbis",
    ZUCCHINI = "Zucchini",
    GURKEN = "Gurken",
    BASILIKUM = "Basilikum",
    ERDBEEREN = "Erdbeeren",
    RARITAETEN = "Raritäten",
    ZELLER = "Zeller",
    LAUCH = "Lauch",
    PETERSILIE = "Petersilie",
    KOHLGEWAECHSE = "Kohlgewächse",
    SALATE = "Salate",
}


export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
