import { Container } from "../Container/Container";
import styles from "./Navigation.module.css";

function Navigation() {

  return (
    <nav className={styles.navigation}>
      <Container classNameName={"navigation__container"}>
        <ul className={styles.navigation__list}>

              <li className={styles.navigation__item}>
                <button
                  className={`${styles.navigation__button} ${styles.navigation__button_active}`}
                >
                  item
                </button>
              </li>

        </ul>
      </Container>
    </nav>
  );
}
export { Navigation };
