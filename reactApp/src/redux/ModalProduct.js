import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../Utils/const";

export const fetchModalProduct = createAsyncThunk(
  "modalProduct/fetch",
  async (id) => {
    const data = await fetch(`${API_URI}${POSTFIX}/${id}`).then((res) =>
      res.json()
    );
    return data;
  }
);

const ModalProduct = createSlice({
  name: "modalProduct",
  initialState: {
    activeProductInfo: {},
  },
  reducers: {
    closeModal: (state) => {
      state.activeProductInfo = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchModalProduct.fulfilled, (state, action) => {
      state.activeProductInfo = action.payload;
    });
  },
});
export const { closeModal } = ModalProduct.actions;
export default ModalProduct.reducer;
