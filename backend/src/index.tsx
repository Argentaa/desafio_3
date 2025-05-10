import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Homepage } from "./screens/Homepage/Homepage";
import { AppProvider } from "./context/AppContext";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AppProvider>
      <Homepage />
    </AppProvider>
  </StrictMode>,
);
