import { configureStore } from "@reduxjs/toolkit";
import CategorySlice, {
  localStorActiveCategoryMiddleWare,
} from "./CategorySlice";
import ProductsSlice from "./ProductsSlice";
import ModalProduct from "./ModalProduct";
import CartSlice, { localStorAddProductMiddleware } from "./CartSlice";
import ModalSubmitFormSlice from "./ModalSubmitFormSlice";
import FormOrderSlice from "./FormOrderSlice";
export const store = configureStore({
  reducer: {
    category: CategorySlice,
    products: ProductsSlice,
    modalProduct: ModalProduct,
    cart: CartSlice,
    form: ModalSubmitFormSlice,
    formOrder: FormOrderSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(localStorActiveCategoryMiddleWare)
      .concat(localStorAddProductMiddleware);
  },
});
console.log(store.getState());
