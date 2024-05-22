import styles from "./Catalog.module.css";

function Catalog() {

  return (
    <section className={styles.cards_items}>
      <div className={styles.cards_items_card}>
        <div className={styles.cards_items_title}>
          <h2>title category</h2>
        </div>
        <div className={styles.cards_items__products}>
          {/* {products.length !== 0 ? (
            products.map((item) => {
              return <CatalogProduct key={item.title} {...item} inCart={idInCartList.includes(item.id)}/>;
            })
          ) : loading === "success" ? (
            <h3>Товаров в данной категории нет!</h3>
          ) : (
            ""
          )} */}
        </div>
      </div>
    </section>
  );
}
export { Catalog };
