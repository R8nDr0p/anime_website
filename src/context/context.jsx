import { createContext, useState, useContext, useEffect } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchAnimes, setSearchAnimes] = useState("");
  const [searchAnimeResults, setSearchAnimeResults] = useState([]);
  return (
    <SearchContext.Provider
      value={{
        searchAnimes,
        setSearchAnimes,
        searchAnimeResults,
        setSearchAnimeResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
