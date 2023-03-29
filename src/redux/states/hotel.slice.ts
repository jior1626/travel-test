import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { hotels } from "../../data/hotel";
import { Hotel, UserDto } from "../../models";
import { encrypt, getItemLocalStorage, setItemLocalStorage } from "../../utilities/helpers";
import { RootState } from "../store";

export interface HotelsState {
    hotels: Hotel[]
    error: string
}

export const initialState: HotelsState = {
    error: "",
    hotels: []
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getHotels: (state, { payload }: PayloadAction<any>) => {
            let hotelsInLocalStorage = getItemLocalStorage("hotels");
            if(hotelsInLocalStorage && hotelsInLocalStorage.length > 0) {
                state.hotels = hotelsInLocalStorage;
            } else {
                setItemLocalStorage("hotels", hotels)
            }
        },
        // setAuthSuccess: (state, { payload }: PayloadAction<UserDto>) => {
        //     state.user = payload;
        //     state.isAuth = true;
        //     state.isLoading = false;
        //     const infoUserEncrypted = encrypt(payload);
        //     localStorage.setItem("auth", infoUserEncrypted);
        // },
        // setLogOut: (state) => {
        //     state.isAuth = false
        //     state.user = {}
        //     state.isLoading = false
        // },
        // setAuthFailed: (state, { payload }: PayloadAction<string>) => {
        //     state.error = payload
        //     state.isAuth = false
        //     state.isLoading = false
        // }
    }
})

export const { getHotels } = AuthSlice.actions

export const authSelector = (state: RootState) => state.auth

export default AuthSlice.reducer;