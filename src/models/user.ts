export interface UserDto {
    id?: number;
    names?: string;
    surNames?: string;
    documentType: string;
    birthDate: string;
    email?: string;
    phone?: string;
    gender: string;
    emergencyPhone: string;
    nameEmergency: string;
    
    username?: string;
    role?: string;
    password?: string;
    address?: string;
    city?: string;
    country?: string;
}