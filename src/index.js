import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
import "aos/dist/aos.css";
import aos from "aos";
import { BrowserRouter as Router } from "react-router-dom";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-MZT6KK8F",
};

TagManager.initialize(tagManagerArgs);

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
