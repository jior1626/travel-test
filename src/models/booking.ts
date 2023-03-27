import { UserDto } from "./user";
import { Room } from "./room";

export interface Booking {
    id?: number;
    user?: UserDto;
    room?: Room;
    startDate?: string;
    finalDate?: string;
    state?: string
}