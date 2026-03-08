import "./homePage.css";
import Header from "../Header";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsGrid from "./ProductsGrid";

function Homepage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  const getHomeData = async () => {
    const response = await axios.get("/api/products");
    setProducts(response.data);
  };

  const getCartItems = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    getHomeData().catch((error) => {
      console.error("Error fetching home data:", error);
    });
    getCartItems().catch((error) => {
      console.error("Error fetching cart items:", error);
    });
  }, []);

  return (
    <>
      <title>ecommerce website</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}

export default Homepage;
