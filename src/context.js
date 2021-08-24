import React, { useContext, useState, useEffect } from "react";

//the context to use with the whle app
const AppContext = React.createContext();

const getWindowWidth = () => {
  const { width } = window;
  return width;
};

export const AppProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [getWidth, setGetWidth] = useState(getWindowWidth);

  useEffect(() => {
    function handleResize() {
      setGetWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider value={{ isNavOpen, setIsNavOpen, getWidth }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
