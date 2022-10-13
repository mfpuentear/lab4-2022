import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CuentaProvider } from "./CuentaContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CuentaProvider>
      <App />
    </CuentaProvider>
  </React.StrictMode>
);
