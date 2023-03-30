import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import  AuthReducer  from './states/auth.slice';
import  LoadingReducer  from './states/loading.slice';
import  HotelsReducer  from './states/hotel.slice';

export const store = configureStore({
    reducer: {
		auth: AuthReducer,
		loading: LoadingReducer,
		hotels: HotelsReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState =  ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;


