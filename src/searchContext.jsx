import { createContext, useState } from "react";
import React from 'react';

export const SearchContext = createContext();

export const SearchProvider = props => {

    const [search, setSearch] = useState('AAPL');

    return (
        <SearchContext.Provider value={[search, setSearch]}>
            {props.children}
        </SearchContext.Provider>
    );
}


