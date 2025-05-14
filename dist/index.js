"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const client_1 = require("react-dom/client");
const react_router_dom_1 = require("react-router-dom");
const Homepage_1 = require("./screens/Homepage/Homepage");
const Category_1 = require("./screens/Category/Category");
const ProductDetail_1 = require("./screens/ProductDetail");
(0, client_1.createRoot)(document.getElementById("app")).render(<react_1.StrictMode>
    <react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<Homepage_1.Homepage />}/>
        <react_router_dom_1.Route path="/category" element={<Category_1.Category />}/>
        <react_router_dom_1.Route path="/product-detail" element={<ProductDetail_1.ProductDetail />}/>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>
  </react_1.StrictMode>);
