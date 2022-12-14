import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId="EjjAFso1nZbwwdlpCTEFqGwEpfBxgWkM"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
