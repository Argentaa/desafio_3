import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./screens/Homepage/Homepage";
import { Category } from "./screens/Category/Category";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
