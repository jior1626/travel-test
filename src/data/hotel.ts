import { Hotel } from "../models";

const hotels: Hotel[] = [
     {
        id:1,
        name: "Hotel KV",
        address: "villa del rey",
        city: "Soledad",
        country: "Colombia",
        bedrooms: [
            {
                id: 1,
                numberBedroom: "201",
                type: "Sencilla",
                description: "Cama sencilla doble, tina",
                price: 30000,
                tax:4000
            },
            {
                id: 2,
                numberBedroom: "123",
                type: "Matrimonial",
                description: "Cama matrimonial doble, tina, 1 comida",
                price: 60000,
                tax:7000
            },
            {
                id: 3,
                numberBedroom: "67",
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
        city: "Barranquilla",
        country: "Colombia",
        bedrooms: [
            {
                id: 4,
                numberBedroom: "12",
                type: "matrimonial",
                description: "Cama matrimonial doble, tina, Piscina al aire libre, Habitaciones sin humo, Servicio de habitaciones, WiFi gratis, Bar",
                price: 35100,
                tax: 66700
            },
            {
                id: 5,
                numberBedroom: "23",
                type: "Matrimonial",
                description: "Cama matrimonial doble, tina, Piscina al aire libre, Habitaciones sin humo, Servicio de habitaciones, WiFi gratis, Bar",
                price: 348000,
                tax:60900
            },
            {
                id: 6,
                numberBedroom: "17",
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
        city: "Barranquilla",
        country: "Colombia",
        bedrooms: [
            {
                id: 7,
                numberBedroom: "30",
                type: "matrimonial",
                description: "Cama matrimonial doble, tina, Piscina al aire libre, Habitaciones sin humo, Servicio de habitaciones, WiFi gratis, Bar",
                price: 601900,
                tax: 68900
            },
            {
                id: 8,
                numberBedroom: "123",
                type: "Matrimonial",
                description: "Cama matrimonial doble, tina, Piscina al aire libre, Habitaciones sin humo, Servicio de habitaciones, WiFi gratis, Bar",
                price: 601900,
                tax: 68900
            },
            {
                id: 9,
                numberBedroom: "107",
                type: "Sencilla",
                description: "Cama sencilla doble, tina, Piscina al aire libre, Habitaciones sin humo, Servicio de habitaciones, WiFi gratis, Bar",
                price: 429900,
                tax:44900
            }
        ]
     },
     
];