import { Room } from "./room";

import { Images } from "./images";

export interface Hotel {
    id?: number;
    name?: string;
    address?: string;
    phone?: string;
    city?: string;
    country?: string;
    images?: Images[];
    rooms?: Room[]
}