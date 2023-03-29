import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface LoadingState {
    isLoading: boolean
}

export const initialState: LoadingState = {
    isLoading: false
}

const LoadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading: (state: LoadingState, {payload}: PayloadAction<boolean>) => {
            state.isLoading = payload;
        }
    }
})

export const { setLoading } = LoadingSlice.actions

export const loadingSelector = (state: RootState) => state.loading

export default LoadingSlice.reducer;