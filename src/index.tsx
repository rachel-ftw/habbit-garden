import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigation from "./hooks-providers/auth0-provider";
import reportWebVitals from "./hooks-providers/reportWebVitals";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Auth0ProviderWithNavigation>
      <App />
    </Auth0ProviderWithNavigation>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
