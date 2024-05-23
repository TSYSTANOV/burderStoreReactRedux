import { useEffect, useRef } from "react";
import styles from "./Order.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeCart, fetchCartProducts, openCart } from "../../redux/CartSlice";
import { OrderGoods } from "./OrderGoods";
import { toggleOpen } from "../../redux/FormOrderSlice";

function Order() {
  const dispatch = useDispatch();
  const CartBtnContainer = useRef();
  const { cart, productsList, totalSum, totalCount, isOpen } = useSelector(
    (state) => state.cart
  );
  function handleOpenFormOrder() {
    dispatch(toggleOpen());
  }
  function handleOpenCart() {
    if (isOpen) {
      dispatch(closeCart());
    } else {
      dispatch(openCart());
    }
  }
  useEffect(() => {
    if (productsList.length > 0) {
      const listOfID = productsList.map((item) => item.id);
      dispatch(fetchCartProducts(listOfID));
    }
  }, [productsList.length]);
  return (
    <section className={styles.cart_section}>
      <div className={styles.cart_container}>
        <button
          className={styles.cart_container_title}
          onClick={handleOpenCart}
        >
          <h2 className={styles.cart_container_title_button}>Корзина</h2>
          <span className={styles.totalItems}>{totalCount}</span>
        </button>
        <div
          className={styles.cart__open}
          style={
            isOpen
              ? { maxHeight: CartBtnContainer.current.scrollHeight + "px" }
              : { maxHeight: "0px" }
          }
        >
          <div className={styles.cartGeneral__content} ref={CartBtnContainer}>
            <div className={styles.cart_container_content}>
              {cart.map((item) => {
                return <OrderGoods key={item.id} {...item} />;
              })}
            </div>
            {cart.length > 0 ? (
              <div className={styles.cart_container__footer__block}>
                <div className={styles.cart_container_footer}>
                  <p>Итого</p>
                  <p>
                    {totalSum}
                    <span>₽</span>
                  </p>
                </div>
                <button
                  className={styles.cart_container_footer_button}
                  onClick={handleOpenFormOrder}
                >
                  Оформить
                </button>
                <div className={styles.cart_container_footer_info}>
                  <p>Бесплатная доставка</p>
                  <button onClick={handleOpenCart}>Свернуть</button>
                </div>
              </div>
            ) : (
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0px 0 15px 0",
                }}
              >
                Корзина пустая, добавьте товары
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export { Order };
