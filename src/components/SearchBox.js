import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
            <input 
            aria-label='search robots'
            className="pa3 ba b--orange bg-lightest-blue tc mt2"
            type='search' 
            placeholder='search robots' 
            onChange= {searchChange}
            />
    );
}

export default SearchBox;