import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
