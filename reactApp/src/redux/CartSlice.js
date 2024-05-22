import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../Utils/const";

function calculateSumAndCount(array) {
  return array.reduce(
    (acc, el) => {
      acc[0] += el.count;
      acc[1] += el.count * el.price;
      return acc;
    },
    [0, 0]
  );
}

export const fetchCartProducts = createAsyncThunk(
  "cart/fetch",
  async (listProducts) => {
    const data = await fetch(`${API_URI}${POSTFIX}?list=${listProducts}`).then(
      (res) => res.json()
    );
    return data;
  }
);

export const localStorAddProductMiddleware = (state) => (next) => (action) => {
  // const nextAction = next(action);
  let itemID = null;
  if (
    action.type === "cart/addProduct"
    //   // ||
    //   // "cart/increaseCount" ||
    //   // "cart/decreaseCount"
  ) {
    itemID = setTimeout(() => next(action), 2000);
  } else {
    return next(action);
  }
  //   localStorage.setItem(
  //     "order",
  //     JSON.stringify(state.getState().cart.productsList)
  //   );
  // }
  // return nextAction;

  return () => {
    console.log(200);
    clearTimeout(itemID);
  };
};

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    productsList: localStorage.getItem("order")
      ? JSON.parse(localStorage.getItem("order"))
      : [],
    cart: [],
    totalSum: 0,
    totalCount: 0,
    isOpen: false,
  },
  reducers: {
    addProduct: (state, action) => {
      state.productsList.push(action.payload);
    },
    increaseCount: (state, action) => {
      const product = state.productsList.find(
        (item) => item.id === action.payload
      );
      product.count++;
      const productCart = state.cart.find((item) => item.id === action.payload);
      productCart.count++;
      [state.totalCount, state.totalSum] = calculateSumAndCount(state.cart);
    },
    decreaseCount: (state, action) => {
      const product = state.productsList.find(
        (item) => item.id === action.payload
      );
      if (product.count > 1) {
        product.count--;
      } else {
        state.productsList = state.productsList.filter(
          (item) => item.id !== product.id
        );
      }
      const productCart = state.cart.find((item) => item.id === action.payload);
      if (productCart.count > 1) {
        productCart.count--;
      } else {
        state.cart = state.cart.filter((item) => item.id !== productCart.id);
      }
      [state.totalCount, state.totalSum] = calculateSumAndCount(state.cart);
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartProducts.fulfilled, (state, action) => {
      state.cart = state.productsList.map((item) => {
        const product = action.payload.find((elem) => elem.id === item.id);
        product.count = item.count;
        return product;
      });
      [state.totalCount, state.totalSum] = calculateSumAndCount(state.cart);
    });
  },
});
export const { addProduct, increaseCount, decreaseCount, openCart, closeCart } =
  CartSlice.actions;
export default CartSlice.reducer;
