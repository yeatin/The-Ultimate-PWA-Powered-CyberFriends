import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
            <input 
            className="pa3 ba b--orange bg-lightest-blue tc mt2"
            type='search' 
            placeholder='search robots' 
            onChange= {searchChange}
            />
    );
}

export default SearchBox;