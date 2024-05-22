import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../Utils/const";

export const fetchCategory = createAsyncThunk("categories/fetch", async () => {
  const data = await fetch(`${API_URI}${POSTFIX}/category`).then((res) =>
    res.json()
  );
  return data;
});

export const localStorActiveCategoryMiddleWare =
  (state) => (next) => (action) => {
    const nextAction = next(action);
    if (action.type === "categories/changeActiveCategory") {
      localStorage.setItem("activeCategory", JSON.stringify(action.payload));
    }
    return nextAction;
  };

const initState = {
  category: [],
  activeCategory: localStorage.getItem("activeCategory")
    ? +JSON.parse(localStorage.getItem("activeCategory"))
    : 0,
};

const CategorySlice = createSlice({
  name: "categories",
  initialState: initState,
  reducers: {
    changeActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.category = action.payload;
    });
  },
});
export const { changeActiveCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
