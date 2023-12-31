import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { Products } from "./pages/Products/Products";
import { TermsAndConditions } from "./pages/TermsAndConditions/TermsAndConditions";

function App() {
  return (
    <div className="appWrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
