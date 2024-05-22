import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Container/Container";
import styles from "./Navigation.module.css";
import { changeActiveCategory, fetchCategory } from "../../redux/CategorySlice";
import { API_URI } from "../../Utils/const";
import { closeCart } from "../../redux/CartSlice";

function Navigation() {
  const dispatch = useDispatch();
  const { category, activeCategory } = useSelector((state) => state.category);
  function handleChangeCategory(e) {
    dispatch(changeActiveCategory(+e.target.dataset.id));
    dispatch(closeCart());
  }
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  return (
    <nav className={styles.navigation}>
      <Container classNameName={"navigation__container"}>
        <ul className={styles.navigation__list}>
          {category.map((item, i) => {
            return (
              <li key={item.title} className={styles.navigation__item}>
                <button
                  className={`${styles.navigation__button} ${
                    i === activeCategory ? styles.navigation__button_active : ""
                  }`}
                  style={{ backgroundImage: `url(${API_URI}/${item.image})` }}
                  data-id={i}
                  onClick={handleChangeCategory}
                >
                  {item.rus}
                </button>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
export { Navigation };
