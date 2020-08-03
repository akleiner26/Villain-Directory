import React from "react";
import "./search.css";
import Table from "../Table/table";

function Search(props) {
return(
     <input type="text" className="input" onChange={Table.findVillain} placeholder="Search Villain" />
);
}

export default Search;