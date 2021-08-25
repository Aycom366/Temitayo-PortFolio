import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
import "aos/dist/aos.css";
import aos from "aos";
import { BrowserRouter as Router } from "react-router-dom";

aos.init({ duration: 1000 });

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
