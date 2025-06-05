import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../constants/categories";

interface SubmenuState {
  stack: Category[];
  isOpen: boolean;
}

const initialState: SubmenuState = {
  stack: [],
  isOpen: false
};

const submenuSlice = createSlice({
  name: "submenu",
  initialState,
  reducers: {
    openRoot(state, action: PayloadAction<Category[]>) {
      state.stack = [];
      state.isOpen = true;
    },
    openCategory(state, action: PayloadAction<Category>) {
      state.stack.push(action.payload);
      state.isOpen = true;
    },
    goBack(state) {
      if (state.stack.length > 0) {
        state.stack.pop();
      }
    },
    close(state) {
      state.isOpen = false;
      state.stack = [];
    }
  }
});

export const { openRoot, openCategory, goBack, close } = submenuSlice.actions;
export default submenuSlice.reducer;