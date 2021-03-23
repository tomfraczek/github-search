import React from 'react';

import './search.styles.scss';

const Search = ({value, handleClick,handleChange}) => (
    <div>
        <input type="text" placeholder='Search' value={value} onChange={handleChange}/>
        <button onClick={handleClick}>Search</button>
    </div>
)

export default Search;