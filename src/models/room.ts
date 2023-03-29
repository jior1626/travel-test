interface ImagesRooms {
    preview: string;
    name: string;
}


export interface Room {
    id?: number;
    numberRoom?: string;
    type?: string;
    description?: string;
    sizeRoom?: string;
    beds?: number;
    price?: number;
    tax?: number;
    bathrooms?: number;
    wifi?: boolean;
    bathtub?: boolean;
    images?: ImagesRooms[];
}