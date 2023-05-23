import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import "./App.css";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import "../node_modules/semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
