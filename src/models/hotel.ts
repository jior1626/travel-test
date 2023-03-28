import { Room } from "./room";

export interface Hotel {
    id?: number;
    name?: string;
    address?: string;
    phone?: string;
    city?: string;
    country?: string;
    image?: string;
    rooms?: Room[]
}