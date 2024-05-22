import { configureStore } from "@reduxjs/toolkit";
import CategorySlice, {
  localStorActiveCategoryMiddleWare,
} from "./CategorySlice";
import ProductsSlice from "./ProductsSlice";
import ModalProduct from "./ModalProduct";
import CartSlice, { localStorAddProductMiddleware } from "./CartSlice";

export const store = configureStore({
  reducer: {
    category: CategorySlice,
    products: ProductsSlice,
    modalProduct: ModalProduct,
    cart: CartSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(localStorActiveCategoryMiddleWare)
      .concat(localStorAddProductMiddleware);
  },
});
