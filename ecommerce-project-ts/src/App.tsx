import "./App.css";
import Homepage from "./pages/home/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OdersPage from "./pages/orders/OrdersPage";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./pages/Login";

function App() {
 
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    console.log("cart:", cart);
    console.log("setCart", setCart);
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
      <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="/orders" element={<OdersPage cart={cart} loadCart={loadCart} />} />
      <Route path="/login" element={<Login cart={cart} />} />
    </Routes>
  );
}

export default App;
