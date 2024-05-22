import { useDispatch } from "react-redux";
import styles from "./Order.module.css";
import { decreaseCount, increaseCount } from "../../redux/CartSlice";

function Count({ id, count }) {
  const dispatch = useDispatch();
  function increase() {
    dispatch(increaseCount(id));
  }
  function decrease() {
    dispatch(decreaseCount(id));
  }
  return (
    <div className={styles.card_number}>
      <button className={styles.minus_number} onClick={decrease}>
        -
      </button>
      <p>{count}</p>
      <button className={styles.plus_number} onClick={increase}>
        +
      </button>
    </div>
  );
}
export { Count };
