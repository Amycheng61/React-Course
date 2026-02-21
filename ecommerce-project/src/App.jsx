import "./App.css";
import Homepage from "./pages/HomePage";
import { Routes,Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route index  element={<Homepage/>} />
      <Route path="/checkout" element={<div>checkout test page</div>} />
    </Routes>
  );
}

export default App;
