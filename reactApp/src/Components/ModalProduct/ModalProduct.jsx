import { useDispatch, useSelector } from "react-redux";
import styles from "./Modal.module.css";
import { API_URI } from "../../Utils/const";
import { closeModal } from "../../redux/ModalProduct";
import { useState } from "react";
import { addProduct } from "../../redux/CartSlice";

function ModalProduct() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const { activeProductInfo } = useSelector((state) => state.modalProduct);
  function closeModalProduct() {
    dispatch(closeModal());
    setCount(1);
  }
  function addProductToCart() {
    const a = dispatch(addProduct({ id: activeProductInfo.id, count: count }));
    console.log(a);
    dispatch(closeModal());
    setCount(1);
  }
  if (activeProductInfo.id) {
    return (
      <div className={styles.modal}>
        <div className={styles.modal__card}>
          <div className={styles["modal__card-title"]}>
            <h2>{activeProductInfo.title}</h2>
          </div>
          <div className={styles.modal__card_information}>
            <div className={styles.modal_image}>
              <img
                src={`${API_URI}/${activeProductInfo.image}`}
                alt={activeProductInfo.category}
              />
            </div>
            <div className={styles["modal__card-content"]}>
              <p className={styles["modal__card-content_first"]}>
                {activeProductInfo.description}
              </p>
              <span className={styles["modal__card-content-inset"]}>
                Состав:
              </span>
              <ul>
                {activeProductInfo.ingredients.map((el) => {
                  return <li key={el}>{el}</li>;
                })}
              </ul>
              <span className={styles["modal__card-content-outset"]}>
                {activeProductInfo?.weight}г, ккал {activeProductInfo.calories}
              </span>
            </div>
            <div className={styles.modal__footer_info}>
              <div className={styles["modal__card-footer"]}>
                <button
                  className={styles["modal__card-footer_button"]}
                  onClick={addProductToCart}
                >
                  Добавить
                </button>

                <div className={styles.modal__card_number}>
                  <button
                    className={styles.minus_number}
                    disabled={count === 1}
                    onClick={() => {
                      setCount(count - 1);
                    }}
                  >
                    -
                  </button>
                  <p>{count}</p>
                  <button
                    className={styles.plus_number}
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className={styles["modal__card-summary"]}>
                Сумма:
                <p>
                  {activeProductInfo.price * count}
                  <span>₽</span>
                </p>
              </div>
            </div>
          </div>
          <button className={styles["modal-close"]} onClick={closeModalProduct}>
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
}
export { ModalProduct };
