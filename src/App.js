import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import PortFolio from "./Pages/PortFolio/PortFolio";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import Overlay from "./Components/Overlay";

function App() {
  return (
    <Router>
      <NavBar />
      <Overlay />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={PortFolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
