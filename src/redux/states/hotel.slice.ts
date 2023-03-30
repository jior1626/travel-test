import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { hotels } from "../../data/hotel";
import { Hotel } from "../../models";
import { getItemLocalStorage, setItemLocalStorage } from "../../utilities/helpers";
import { RootState } from "../store";

export interface HotelsState {
    hotels: Hotel[]
    error: string
}

export const initialState: HotelsState = {
    hotels: [],
    error: "",
}

const HotelSlice = createSlice({
    name: "hotels",
    initialState,
    reducers: {
        getHotels: (state, { payload }: PayloadAction<any>) => {
            let hotelsInLocalStorage = getItemLocalStorage("hotels");
            if(hotelsInLocalStorage && hotelsInLocalStorage.length > 0) {
                state.hotels = hotelsInLocalStorage;
            } else {
                setItemLocalStorage("hotels", hotels);
                state.hotels = hotels;
            }
        },
        deleteHotelById: (state, { payload }: PayloadAction<number>) => {
            state.hotels = state.hotels.filter(item => item.id != payload);
            setItemLocalStorage("hotels", state.hotels);
        }
    }
})

export const { getHotels, deleteHotelById } = HotelSlice.actions

export const hotelsSelector = (state: RootState) => state.hotels

export default HotelSlice.reducer;