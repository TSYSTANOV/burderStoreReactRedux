import { useDispatch, useSelector } from "react-redux";
import styles from "./Catalog.module.css";
import { useEffect } from "react";
import { fetchProductsByCategory } from "../../redux/ProductsSlice";
import { CatalogProduct } from "../CatalogProduct/CatalogProduct";
import { fetchModalProduct } from "../../redux/ModalProduct";

function Catalog() {
  const dispatch = useDispatch();
  const { category, activeCategory } = useSelector((state) => state.category);
  const { products, loading } = useSelector((state) => state.products);
  const { productsList } = useSelector((state) => state.cart);
  const cartIDproducts = productsList.map((item) => item.id);
  function handleOpenModalProduct(e) {
    if (e.target.tagName !== "BUTTON") return;
    dispatch(fetchModalProduct(e.target.dataset.id));
  }
  useEffect(() => {
    if (category.length > 0) {
      dispatch(fetchProductsByCategory(category[activeCategory].title));
    }
  }, [category, activeCategory]);
  return (
    <section className={styles.cards_items}>
      <div className={styles.cards_items_card}>
        <div className={styles.cards_items_title}>
          <h2>{category[+activeCategory]?.rus}</h2>
        </div>
        <div
          className={styles.cards_items__products}
          onClick={handleOpenModalProduct}
        >
          {products.length > 0
            ? products.map((item) => {
                return (
                  <CatalogProduct
                    key={item.title}
                    {...item}
                    inCart={cartIDproducts.includes(item.id)}
                  />
                );
              })
            : loading === "success" && <p>Товаров в данной категории нет</p>}
        </div>
      </div>
    </section>
  );
}
export { Catalog };
