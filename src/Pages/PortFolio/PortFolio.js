import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import GitHubIcon from "@material-ui/icons/GitHub";
import MoreIcon from "@material-ui/icons/More";
import LanguageIcon from "@material-ui/icons/Language";

function PortFolio() {
  const { data, dropDownCategories } = useGlobalContext();

  const [categories, setcategories] = React.useState(data);

  const filterItem = (category) => {
    if (category === "All") {
      setcategories(data);
      return;
    }

    //if category is not all
    const newItems = data.filter((item) => item.category === category);
    setcategories(newItems);
  };

  return (
    <main className="portfolio">
      <div className="portfolio-container  container">
        <section className="flex">
          <h1>All Projects</h1>
          <div className="underline"></div>
        </section>
        <form className="flex language">
          <label htmlFor="lang">Filter By Language</label>
          <select
            onChange={(e) => filterItem(e.target.value)}
            name="langs"
            id="lang"
          >
            {/* call categories here */}
            {dropDownCategories.map((category, index) => {
              return (
                <option key={index} className="option" value={category}>
                  {category === "HTML" ? "HTML & CSS" : category}
                </option>
              );
            })}
          </select>
        </form>
        <section className="portContainer">
          {categories.map((portfolio, index) => {
            const { title, images, lang, live, url } = portfolio;
            return (
              <div
                data-aos={`${index % 2 === 1 ? "fade-right" : "flip-up"}`}
                key={index}
                className="portCon"
              >
                <div className="imgCon">
                  <img src={images.mobil} alt={title} />
                </div>
                <div className="infoCon">
                  <h3>{title}</h3>
                  <div className="langCon">
                    {lang.map((lan, index) => {
                      return (
                        <p className="langP" key={index}>
                          {lan}
                        </p>
                      );
                    })}
                  </div>
                  <div className="portFooter">
                    <Link to={{ pathname: `${url}` }} target="_blank">
                      <GitHubIcon className="icon" />
                    </Link>
                    <Link to="/portfolio" className="detail">
                      Details
                    </Link>
                    {live && (
                      <Link to={{ pathname: `${live}` }} target="_blank">
                        <LanguageIcon className="icon" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default PortFolio;
