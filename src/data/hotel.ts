import { Hotel } from "../models";

export const hotels: Hotel[] = [
     {
        id:1,
        name: "Hotel KV",
        address: "villa del rey",
        phone: "30087871212",
        city: "Soledad",
        country: "Colombia",
        rooms: [
            {
                id: 1,
                numberRoom: "201",
                type: "Sencilla",
                description: "Cama sencilla doble, tina",
                price: 30000,
                tax:4000
            },
            {
                id: 2,
                numberRoom: "123",
                type: "Matrimonial",
                description: "Cama matrimonial doble, tina, 1 comida",
                price: 60000,
                tax:7000
            },
            {
                id: 3,
                numberRoom: "67",
                type: "Sencilla",
                description: "Cama sencilla doble, tina",
                price: 30000,
                tax:4000
            }
        ]
     },
     {
        id:2,
        name: "Hotel dorado barranquilla",
        address: "Carrera 42F #79 38 – ",
        phone: "43456632",
        city: "Barranquilla",
        country: "Colombia",
        rooms: [
            {
                id: 4,
                numberRoom: "12",
                type: "matrimonial",
                description: "Cama matrimonial doble, tina, Piscina al aire libre, Habitaciones sin humo, Servicio de habitaciones, WiFi gratis, Bar",
                price: 35100,
                tax: 66700
            },
            {
                id: 5,
                numberRoom: "23",
                type: "Matrimonial",
                description: "Cama matrimonial doble, tina, Piscina al aire libre, Habitaciones sin humo, Servicio de habitaciones, WiFi gratis, Bar",
                price: 348000,
                tax:60900
            },
            {
                id: 6,
                numberRoom: "17",
                type: "Sencilla",
                description: "Cama sencilla doble, tina, Piscina al aire libre, Habitaciones sin humo, Servicio de habitaciones, WiFi gratis, Bar",
                price: 300000,
                tax:40000
            }
        ]
     },
     {
        id:3,
        name: "Ibis barranquilla ",
        address: "Carrera 42F #79 38 – ",
        phone: "4577532",
        city: "Barranquilla",
        country: "Colombia",
        rooms: [
            {
                id: 7,
                numberRoom: "30",
                type: "matrimonial",
                description: "Cama matrimonial doble, tina, Piscina al aire libre, Habitaciones sin humo, Servicio de habitaciones, WiFi gratis, Bar",
                price: 601900,
                tax: 68900
            },
            {
                id: 8,
                numberRoom: "123",
                type: "Matrimonial",
                description: "Cama matrimonial doble, tina, Piscina al aire libre, Habitaciones sin humo, Servicio de habitaciones, WiFi gratis, Bar",
                price: 601900,
                tax: 68900
            },
            {
                id: 9,
                numberRoom: "107",
                type: "Sencilla",
                description: "Cama sencilla doble, tina, Piscina al aire libre, Habitaciones sin humo, Servicio de habitaciones, WiFi gratis, Bar",
                price: 429900,
                tax:44900
            }
        ]
     },
     
];