import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import GitHubIcon from "@material-ui/icons/GitHub";
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
    <div className='portfolio'>
      <div className='portfolio-container  container'>
        <div className='flex'>
          <h1>All Projects</h1>
          <div className='underline'></div>
        </div>
        <form className='flex language'>
          <label htmlFor='lang'>Filter By Language</label>
          <select
            onChange={(e) => filterItem(e.target.value)}
            name='langs'
            id='lang'
          >
            {/* call categories here */}
            {dropDownCategories.map((category, index) => {
              return (
                <option key={index} className='option' value={category}>
                  {category === "HTML" ? "HTML & CSS" : category}
                </option>
              );
            })}
          </select>
        </form>
        <div className='portContainer'>
          {categories.map((portfolio, index) => {
            console.log(portfolio.images);
            const { title, images, lang, info, live, url } = portfolio;
            return (
              <div data-aos={`fade-up`} key={index} className='portCon'>
                <div className='imgCon'>
                  <picture>
                    <source
                      media='(min-width: 1024px)'
                      srcset={images.desktop}
                    />
                    <source media='(min-width: 768px)' srcset={images.tablet} />
                    <img
                      style={{ objectFit: "contain" }}
                      src={images.mobil}
                      alt={title}
                    />
                  </picture>
                </div>
                <div className='infoCon'>
                  <h3>{title}</h3>
                  <p>{info}</p>
                  <div className='langCon'>
                    {lang.map((lan, index) => {
                      return (
                        <p className='langP' key={index}>
                          {lan}
                        </p>
                      );
                    })}
                  </div>
                  <div className='portFooter'>
                    {url ? (
                      <Link to={{ pathname: `${url}` }} target='_blank'>
                        <GitHubIcon className='icon' />
                      </Link>
                    ) : (
                      <p></p>
                    )}

                    {/* <Link to='/portfolio' className='detail'>
                      Details
                    </Link> */}
                    {live && (
                      <Link to={{ pathname: `${live}` }} target='_blank'>
                        <LanguageIcon className='icon' />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
