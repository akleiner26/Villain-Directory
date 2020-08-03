import React from "react";
import "./search.css";


function Search(props) {
return(
     <input type="text" className="input" onChange={props.handleSearch} placeholder="Search Villain" />
);
}

export default Search;