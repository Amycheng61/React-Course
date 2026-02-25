import "./App.css";
import Homepage from "./pages/home/HomePage";
import { Routes, Route } from "react-router";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OdersPage from "./pages/orders/OrdersPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
   loadCart().catch((error) => {
      console.error("Error fetching cart items:", error);
    });
  }, []);
  return (
    <Routes>
      <Route index element={<Homepage cart={cart} loadCart={loadCart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart}   />} />
      <Route path="/orders" element={<OdersPage cart={cart}  />} />
    </Routes>
  );
}

export default App;
