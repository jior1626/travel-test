import { Bedroom } from "./bedroom";

export interface Hotel {
    id?: number;
    name?: string;
    address?: string;
    city?: string;
    country?: string;
    bedrooms ?: Bedroom[]
}