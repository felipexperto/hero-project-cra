import React, { useState, createContext } from 'react';
import { node } from 'prop-types';

const HeroesListContext = createContext();

const HeroesListContextProvider = ({ children }) => {
  const [heroesList, setHeroesList] = useState({
    favorites: [],
    heroes: [],
    sort: false,
    hearted: false,
  });

  return (
    <HeroesListContext.Provider value={{ heroesList, setHeroesList }}>
      {children}
    </HeroesListContext.Provider>
  );
};

HeroesListContextProvider.defaultProps = {
  children: `<div />`,
};

HeroesListContextProvider.propTypes = {
  children: node,
};

export { HeroesListContext, HeroesListContextProvider };
