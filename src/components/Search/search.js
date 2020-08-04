import React from "react";
import "./search.css";


function Search(props) {
     return (
          <section className="cell containter">
               <input type="text" className="input col-2 offset-1 align-middle" onChange={props.handleSearch} placeholder="Search Villain" />
          </section>
     );
}

export default Search;