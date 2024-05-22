import "./App.css";
import React from "react";
import { Header } from "./Components/Header/Header";
import { Navigation } from "./Components/Navigation/Navigation";
import { Footer } from "./Components/Footer/Footer";
import { ModalProduct } from "./Components/ModalProduct/ModalProduct";
import { ModalOrder } from "./Components/ModalOrder/ModalOrder";
import { CatalogAll } from "./Components/CatalogAll/CatalogAll";
function App() {
  return (
    <>
      <Header />
      <main>
        <Navigation />
        <CatalogAll />
      </main>
      <Footer />
      <ModalProduct />
      <ModalOrder />
    </>
  );
}

export default App;
