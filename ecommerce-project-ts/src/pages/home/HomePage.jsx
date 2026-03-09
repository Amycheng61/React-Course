import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header";
import ProductsGrid from "../home/ProductsGrid";
import "./homePage.css";


function Homepage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  const getHomeData = async () => {
    const response = await axios.get("/api/products");
    setProducts(response.data);
    console.log("products in Homepage:", products);
  };

  useEffect(() => {
    getHomeData().catch((error) => {
      console.error("Error fetching home data:", error);
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
