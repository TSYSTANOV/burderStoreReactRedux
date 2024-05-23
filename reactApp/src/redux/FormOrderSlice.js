import { createSlice } from "@reduxjs/toolkit";

const FormOrderSlice = createSlice({
  name: "formOrder",
  initialState: {
    isOpen: false,
    orderID: "",
  },
  reducers: {
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    setOrderID: (state, action) => {
      state.orderID = action.payload;
    },
    clearState: (state) => {
      state.orderID = "";
      state.isOpen = false;
    },
  },
});
export const { clearState, toggleOpen, setOrderID } = FormOrderSlice.actions;
export default FormOrderSlice.reducer;
