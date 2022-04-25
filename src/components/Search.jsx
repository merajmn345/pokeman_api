import React from "react";
import './search.css';
function Search(){
    return(
        <div className="search-box">
            <input className="text" type="text" placeholder="Search character" />
            <button className="btn">Search</button>
        </div>
    );
}
export default Search;