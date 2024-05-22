import styles from "./Order.module.css";


function Count() {

  return (
    <div className={styles.card_number}>
      <button className={styles.minus_number}>
        -
      </button>
      <p>1</p>
      <button className={styles.plus_number}>
        +
      </button>
    </div>
  );
}
export { Count };
