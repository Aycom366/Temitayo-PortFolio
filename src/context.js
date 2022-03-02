import React, { useContext, useState, useEffect } from "react";
import data from "./data";

//the context to use with the whle app
const AppContext = React.createContext();

const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return width;
};

export const AppProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [getWidth, setGetWidth] = useState(getWindowWidth);

  const [isMoved, setIsMoved] = useState(false);

  //getting currentWidth
  useEffect(() => {
    function handleResize() {
      setGetWidth(getWindowWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const doc = document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 150 && getWidth > 600) {
        setIsMoved(true);
      } else {
        setIsMoved(false);
      }
    });
    return () => {
      document.removeEventListener("scroll", doc);
    };
  }, []);

  //category to be shown in drop down
  const dropDownCategories = [
    "All",
    ...new Set(data.map((category) => category.category)),
  ];

  return (
    <AppContext.Provider
      value={{
        isNavOpen,
        setIsNavOpen,
        data,
        getWidth,
        data,
        isMoved,
        dropDownCategories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
