import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../Utils/const";

export const fetchProductsByCategory = createAsyncThunk(
  "product/fetch",
  async (activeCategory) => {
    const data = await fetch(
      `${API_URI}${POSTFIX}?category=${activeCategory}`
    ).then((res) => res.json());
    return data;
  }
);

const ProductsSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsByCategory.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.loading = "success";
      state.products = action.payload;
    });
  },
});

export default ProductsSlice.reducer;
