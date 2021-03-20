import React, { useState, createContext } from 'react';
import { node } from 'prop-types';

const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

SearchContextProvider.defaultProps = {
  children: `<div />`,
};

SearchContextProvider.propTypes = {
  children: node,
};

export { SearchContext, SearchContextProvider };
