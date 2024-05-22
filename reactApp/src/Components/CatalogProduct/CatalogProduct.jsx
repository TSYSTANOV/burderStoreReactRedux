import { API_URI } from "../../Utils/const";
import styles from "./Catalog.module.css";

function CatalogProduct() {
  return (
    <div className={styles.item__product}>
      <img src=''/>
      <p className={styles.item__product1}>
        {/* {price} */}
        <span> ₽</span>
      </p>
      <p className={styles.product_name}>title</p>
      <p className={styles.product_detail}>weightг</p>
      <button>Добавить</button>
    </div>
  );
}
export { CatalogProduct };
