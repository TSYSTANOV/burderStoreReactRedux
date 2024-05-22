import { API_URI } from "../../Utils/const";
import { Count } from "./Count";
import styles from "./Order.module.css";

function OrderGoods({ weight, id, title, count, image, price }) {
  return (
    <div className={styles.cart_container_content_card}>
      <img src={`${API_URI}/${image}`} />
      <div className={styles.card_text}>
        <h2>{title}</h2>
        <span>{weight}г</span>
        <p>
          {price}
          <span>₽</span>
        </p>
      </div>
      <Count id={id} count={count} />
    </div>
  );
}
export { OrderGoods };
