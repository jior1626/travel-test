import { Room } from "./room";

import { Images } from "./images";

export interface Hotel {
    id?: number;
    name?: string;
    address?: string;
    phone?: string;
    city?: string;
    country?: string;
    image?: Images[];
    rooms?: Room[]
}