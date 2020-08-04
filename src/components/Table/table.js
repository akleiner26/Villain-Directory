import React from "react";
import "./table.css";
import VillainRow from "../VillainRow/villainRow"




function Table(props) {

    return (
        <table className="table table-striped table-dark">
            <thead className="thead-dark">
                <tr>
                    <th>Photo</th>
                    <th className="nameHead" onClick={props.sortByName}>Name<i id="down" class="fa fa-caret-down aFirst" aria-hidden="true"></i><i id="up" class="fa fa-caret-up zFirst" aria-hidden="true"></i></th>
                    <th onClick={props.sortByYear}>First Appearance</th>
                    <th>Alias</th>
                    <th>Abilities</th>
                </tr>
            </thead>
            <tbody>
                    {props.villains.map(character => <VillainRow 
                    image={character.image}
                    name={character.name}
                    firstAppearance={character.firstAppearance}
                    alias={character.alias}
                    ability={character.ability} />)}
            </tbody>
        </table>
    )
}

export default Table;
