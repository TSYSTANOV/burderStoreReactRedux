import { ReactComponent as YouMealLogo } from "../../images/youMealLogo.svg";
import { Container } from "../Container/Container";
import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_logo}>
          <YouMealLogo />
        </div>
        <div className={styles.header_content}>
          <h1 className={styles.header_content_title}>
            Только самые <span>сочные бургеры!</span>
          </h1>
          <p className={styles.header_content_info}>
            Бесплатная доставка от <span>599₽</span>
          </p>
        </div>
      </Container>
    </header>
  );
}
export { Header };
