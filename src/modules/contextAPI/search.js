import React, { createContext, useState } from 'react';

const SearchContext = createContext();
const SearchProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState([]);
  const getSearch = (result) => {
    setSearchResult(result);
  }

  const context = {
    searchResult,
    getSearch,
  }

  return (
    <SearchContext.Provider value={context}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchProvider };
