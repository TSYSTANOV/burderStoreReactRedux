import { API_URI } from "../../Utils/const";
import styles from "./Catalog.module.css";

function CatalogProduct({ price, image, title, weight, id, inCart }) {
  return (
    <div
      className={`${styles.item__product} ${
        inCart ? styles["item__product--inCart"] : ""
      }`}
    >
      <img src={`${API_URI}/${image}`} />
      <p className={styles.item__product1}>
        {price}
        <span> ₽</span>
      </p>
      <p className={styles.product_name}>{title}</p>
      <p className={styles.product_detail}>{weight}г</p>
      <button data-id={id} disabled={inCart}>
        {inCart ? "Уже в корзине" : "Добавить"}
      </button>
    </div>
  );
}
export { CatalogProduct };
