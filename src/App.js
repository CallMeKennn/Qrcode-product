import "./App.css";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Admin />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
