import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SubmenuState {
	isOpen: boolean;
	category: string | null;
}

const initialState: SubmenuState = {
	isOpen: false,
	category: null,
}

const submenuSlice = createSlice({
	name: "submenu",
	initialState,
	reducers: {
		openSubmenu: (state, action: PayloadAction<string>) => {
			state.isOpen = true;
			state.category = action.payload;
		},
		closeSubmenu: (state) => {
			state.isOpen = false;
			state.category = null;
		},
	}
})

export const { openSubmenu, closeSubmenu } = submenuSlice.actions;
export default submenuSlice.reducer;