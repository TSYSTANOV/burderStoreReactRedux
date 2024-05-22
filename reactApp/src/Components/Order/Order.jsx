
import styles from "./Order.module.css";


function Order() {

  return (
    <section className={styles.cart_section}>
      <div className={styles.cart_container}>
        <button
          className={styles.cart_container_title}
        >
          <h2 className={styles.cart_container_title_button}>Корзина</h2>
          <span className={styles.totalItems}>0</span>
        </button>
        <div
          className={styles.cart__open}
        >
          <div className={styles.cartGeneral__content}>
                <div className={styles.cart_container_content}>
                </div>
                <div className={styles.cart_container__footer__block}>
                  <div className={styles.cart_container_footer}>
                    <p>Итого</p>
                    <p>
                      0<span>₽</span>
                    </p>
                  </div>
                  <button
                    className={styles.cart_container_footer_button}
                  >
                    Оформить
                  </button>
                  <div className={styles.cart_container_footer_info}>
                    <p>Бесплатная доставка</p>
                    <button>Свернуть</button>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Order };
