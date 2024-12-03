import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* provided store to use redux in entire app component */}
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>
);
