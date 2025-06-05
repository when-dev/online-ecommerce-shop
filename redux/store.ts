import { configureStore } from "@reduxjs/toolkit";
import submenuReducer from "./slices/submenu/submenuSlices";

export const store = configureStore({
	reducer: {
		submenu: submenuReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;