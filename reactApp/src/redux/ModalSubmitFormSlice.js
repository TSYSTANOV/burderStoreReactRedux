import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { resetCart } from "./CartSlice";
import { clearState, setOrderID } from "./FormOrderSlice";

export const postFetchOrderToServer = createAsyncThunk(
  "formSubmit/post",
  async (orderFromClient, thunkApi) => {
    const data = await fetch(
      "https://cloudy-slash-rubidium.glitch.me/api/order",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(orderFromClient),
      }
    ).then((res) => res.json());

    if (data.id) {
      thunkApi.dispatch(resetCart());
      thunkApi.dispatch(resetFormOrder());
      thunkApi.dispatch(setOrderID(data.id));
      setTimeout(() => {
        thunkApi.dispatch(clearState());
      }, 5000);
    }
  }
);

const initState = {
  name: "",
  phone: "",
  delivery: "bySelf",
  addressStreet: "",
  addressFloor: "",
  addressDomofon: "",
};

const ModalSubmitFormSlice = createSlice({
  name: "formSubmit",
  initialState: initState,
  reducers: {
    updateForm: (state, action) => {
      state[action.payload.param] = action.payload.value;
    },
    resetFormOrder: (state) => {
      state.name = "";
      state.phone = "";
      state.delivery = "bySelf";
      state.addressStreet = "";
      state.addressFloor = "";
      state.addressDomofon = "";
    },
  },
});
export const { updateForm, resetFormOrder } = ModalSubmitFormSlice.actions;
export default ModalSubmitFormSlice.reducer;
