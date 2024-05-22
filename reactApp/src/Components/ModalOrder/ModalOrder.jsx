
import styles from "./Modal.module.css";

function ModalOrder() {

  return (
    <div
      // className={`${
      //   !isOpen
      //     ? `${styles.modal} ${styles.modal_non_display}`
      //     : `${styles.modal}`
      // }`}
    >
      <div className={`${styles.modal__card} ${styles.modal__card_color}`}>
        <div className={styles["modal__card-form-size"]}>
          <div className={styles["modal__card-title__item"]}>
            <h2>Доставка</h2>
          </div>

          <div className={styles["modal__card-form"]}>
            <div className={styles["modal__card-form-name-phone"]}>
              <form>
                <input
                  type="text"
                  placeholder="Ваше имя"


                />
                <input
                  type="text"
                  placeholder="Телефон"


                />
              </form>
            </div>
            <div className={styles["modal__card-delivery"]}>
              <form>
                <label htmlFor="#first">
                  <input
                    className={styles.radio_input}
                    type="radio"
                    id="first"

                  />
                  Самовывоз
                </label>
                <label htmlFor="#second">
                  <input
                    className={styles.radio_input}
                    type="radio"
                    id="second"

                  />
                  Доставка
                </label>
              </form>
            </div>
              <div className={styles["modal__card-address"]}>
                <form>
                  <input
                    type="text"
                    placeholder="Улица, дом, квартира"

                  />
                  <input
                    type="text"
                    placeholder="Этаж"

                  />
                  <input
                    type="text"
                    placeholder="Домофон"

                  />
                </form>
              </div>
          </div>
          <button
            className={styles["modal__card-form-button"]}
          >
              Оформить
          </button>
        </div>
        <button
          className={styles["modal-close"]}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="5.07422"
              y="5.28249"
              width="1"
              height="20"
              transform="rotate(-45 5.07422 5.28249)"
            />
            <rect
              x="5.78125"
              y="19.4246"
              width="1"
              height="20"
              transform="rotate(-135 5.78125 19.4246)"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
export { ModalOrder };
