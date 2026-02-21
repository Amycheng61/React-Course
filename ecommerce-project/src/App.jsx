import "./App.css";
import Homepage from "./pages/HomePage";
import { Routes,Route } from "react-router";
import CheckoutPage from "./pages/CheckoutPage";  
import OdersPage from "./pages/OrdersPage";

function App() {
  return (
    <Routes>
      <Route index  element={<Homepage/>} />
      <Route path="/checkout" element={<CheckoutPage/>} /> 
      <Route path="/orders" element={<OdersPage/>} />
    </Routes>
  );
}

export default App;
