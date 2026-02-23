import "./App.css";
import Homepage from "./pages/home/HomePage";
import { Routes, Route } from "react-router";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OdersPage from "./pages/orders/OrdersPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("/api/cart-items?expand=product")
      .then((response) => {
        //console.log("Search results for 'cart-items':", response.data);
        setCart(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);
  return (
    <Routes>
      <Route index element={<Homepage cart={cart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OdersPage cart={cart} />} />
    </Routes>
  );
}

export default App;
