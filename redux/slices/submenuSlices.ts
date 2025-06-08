import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../constants/categories";

interface SubmenuState {
  stack: Category[];
  slideIndex: number; 
  isOpen: boolean;
}

const initialState: SubmenuState = {
  stack: [],
  slideIndex: 0,
  isOpen: false,
};

const submenuSlice = createSlice({
  name: "submenu",
  initialState,
  reducers: {
    openRoot(state, action: PayloadAction<Category[]>) {
      state.stack = [];
      state.slideIndex = 0;
      state.isOpen = true;
    },
    openCategory(state, action: PayloadAction<Category>) {
      state.stack.push(action.payload);
      state.slideIndex = state.stack.length;
      state.isOpen = true;
    },
    goBack(state) {
      if (state.slideIndex > 0) {
        state.slideIndex -= 1;
      }
    },
    popStack(state) {
      state.stack.pop();
    },
    close(state) {
      state.isOpen = false;
      state.stack = [];
      state.slideIndex = 0;
    },
  },
});

export const { openRoot, openCategory, goBack, popStack, close } = submenuSlice.actions;
export default submenuSlice.reducer;