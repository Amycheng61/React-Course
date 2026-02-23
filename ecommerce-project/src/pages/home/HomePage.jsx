import "./homePage.css";
import Header from "../Header";
import axios from "axios";
import { useEffect ,useState} from "react";
import ProductsGrid from "./ProductsGrid";

function Homepage({ cart }) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      ;

      axios.get("/api/cart-items")
      .then((response) => {
        //console.log("Search results for 'cart-items':", response.data);
        setCart(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });

  }, []);

  return (
    <>
      <title>ecommerce website</title>
      <Header cart={cart} />

      <div className="home-page">
      <ProductsGrid products={products} />
      </div>
    </>
  );
}

export default Homepage;
