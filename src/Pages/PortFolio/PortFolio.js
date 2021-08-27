import React from "react";
import { useGlobalContext } from "../../context";

function PortFolio() {
  const { portFolios } = useGlobalContext();
  return (
    <main className="portfolio">
      <div className="portfolio-container  container">
        <section className="flex">
          <h1>All Projects</h1>
          <div className="underline"></div>
        </section>
        <form className="flex language">
          <label htmlFor="lang">Filter By Language</label>
          <select name="langs" id="lang">
            <option className="option" value="HtmlCss">
              HML &amp; CSS
            </option>
            <option className="option" value="Javascript">
              JAVSCRIPT
            </option>
            <option className="option" value="React">
              REACT
            </option>
            <option className="option" value="C#">
              C#
            </option>
          </select>
        </form>
        <section className="portContainer">
          <div className="portCon">
            <div className="imgCon"></div>
            <div className="infoCon">
              <h3>Item</h3>
              <div className="langCon">yeah</div>
              <div className="portFooter">yeah</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default PortFolio;
