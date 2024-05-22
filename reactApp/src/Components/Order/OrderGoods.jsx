import styles from "./Order.module.css";


function OrderGoods() {
  return (
    <div className={styles.cart_container_content_card}>
      <img src='' />
      <div className={styles.card_text}>
        <h2>title</h2>
        <span>weightг</span>
        <p>
          price
          <span>₽</span>
        </p>
      </div>
      <Count />
    </div>
  );
}
export { OrderGoods };
