import { UserDto } from "./user";
import { Bedroom } from "./bedroom";

export interface Booking {
    id?: number;
    user?: UserDto;
    bedroom?: Bedroom;
    startDate?: string;
    finalDate?: string;
    state?: string
}