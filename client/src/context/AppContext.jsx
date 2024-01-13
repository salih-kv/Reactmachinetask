import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [limit] = useState(5); // fixed value
  const [pages, setPages] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const updatePages = (data) => {
    const newPages = {};

    data.forEach((item, index) => {
      const pageIndex = Math.floor(index / limit) + 1;
      if (!newPages[pageIndex]) {
        newPages[pageIndex] = [];
      }
      newPages[pageIndex].push(item);
    });

    setPages(newPages);
  };

  return (
    <AppContext.Provider
      value={{
        isNavOpen,
        toggleNav,
        limit,
        pages,
        setPages,
        updatePages,
        activePage,
        setActivePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
