import { Catalog } from "../Catalog/Catalog";
import { Container } from "../Container/Container";
import { Order } from "../Order/Order";

function CatalogAll() {
  return (
    <section className="catalog">
      <Container>
        <section className="catalog_start">
          <Order />
          <Catalog />
        </section>
      </Container>
    </section>
  );
}
export { CatalogAll };
