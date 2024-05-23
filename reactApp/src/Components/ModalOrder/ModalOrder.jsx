import { useDispatch, useSelector } from "react-redux";
import styles from "./Modal.module.css";
import { updateForm } from "../../redux/ModalSubmitFormSlice";
import { toggleOpen } from "../../redux/FormOrderSlice";
import { postFetchOrderToServer } from "../../redux/ModalSubmitFormSlice";
function ModalOrder() {
  const dispatch = useDispatch();

  const { isOpen, orderID } = useSelector((state) => state.formOrder);
  const { productsList } = useSelector((state) => state.cart);
  const form = useSelector((state) => state.form);
  function closeModalForm() {
    dispatch(toggleOpen());
  }
  function updateFormParams(e) {
    dispatch(updateForm({ param: e.target.name, value: e.target.value }));
  }
  function sendOrderToServer() {
    dispatch(postFetchOrderToServer({ ...form, order: productsList }));
  }
  return (
    <div
      className={`${
        !isOpen
          ? `${styles.modal} ${styles.modal_non_display}`
          : `${styles.modal}`
      }`}
    >
      <div className={`${styles.modal__card} ${styles.modal__card_color}`}>
        {orderID ? (
          <>
            <h2>Спасибо за заказ!</h2>
            <p>Номер Вашего заказа: №{orderID}</p>
          </>
        ) : (
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
                    name="name"
                    value={form.name}
                    onChange={updateFormParams}
                  />
                  <input
                    type="text"
                    placeholder="Телефон"
                    name="phone"
                    value={form.phone}
                    onChange={updateFormParams}
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
                      name="delivery"
                      value="bySelf"
                      checked={form.delivery === "bySelf"}
                      onChange={updateFormParams}
                    />
                    Самовывоз
                  </label>
                  <label htmlFor="#second">
                    <input
                      className={styles.radio_input}
                      type="radio"
                      id="second"
                      name="delivery"
                      value="toClient"
                      checked={form.delivery === "toClient"}
                      onChange={updateFormParams}
                    />
                    Доставка
                  </label>
                </form>
              </div>
              {form.delivery !== "bySelf" && (
                <div className={styles["modal__card-address"]}>
                  <form>
                    <input
                      type="text"
                      placeholder="Улица, дом, квартира"
                      name="addressStreet"
                      value={form.addressStreet}
                      onChange={updateFormParams}
                    />
                    <input
                      type="text"
                      placeholder="Этаж"
                      name="addressFloor"
                      value={form.addressFloor}
                      onChange={updateFormParams}
                    />
                    <input
                      type="text"
                      placeholder="Домофон"
                      name="addressDomofon"
                      value={form.addressDomofon}
                      onChange={updateFormParams}
                    />
                  </form>
                </div>
              )}
            </div>
            <button
              className={styles["modal__card-form-button"]}
              disabled={!form.name || !form.phone}
              onClick={sendOrderToServer}
            >
              {!form.name || !form.phone
                ? "Обязательно введите имя и номер"
                : "Оформить"}
            </button>
          </div>
        )}
        <button className={styles["modal-close"]} onClick={closeModalForm}>
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
