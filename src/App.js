import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import PortFolio from "./Pages/PortFolio/PortFolio";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import Overlay from "./Components/Overlay";

function App() {
  return (
    <main>
      <NavBar />
      <ScrollToTop />
      <Overlay />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={PortFolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
