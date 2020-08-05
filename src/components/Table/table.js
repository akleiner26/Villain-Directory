import React from "react";
import "./table.css";
import VillainRow from "../VillainRow/villainRow"




function Table(props) {

    return (
        // <div className="scroll">
            <table className="table scroll table-striped table-dark">
                <thead className="thead-dark">
                    <tr>
                        <th>Photo</th>
                        <th className="nameHead" onClick={props.sortByName}>Name<i id="down" className="fa fa-caret-down aFirst" aria-hidden="true"></i><i id="up" className="fa fa-caret-up zFirst" aria-hidden="true"></i></th>
                        <th onClick={props.sortByYear}>First Appearance <i id="numDown" className="fa fa-caret-down aFirst" aria-hidden="true"></i><i id="numUp" className="fa fa-caret-up zFirst" aria-hidden="true"></i></th>
                        <th onClick={props.sortByAlias}>Alias <i id="aliasDown" className="fa fa-caret-down aFirst" aria-hidden="true"></i><i id="aliasUp" className="fa fa-caret-up zFirst" aria-hidden="true"></i></th>
                        <th onClick={props.sortByAbility}>Abilities <i id="abilityDown" className="fa fa-caret-down aFirst" aria-hidden="true"></i><i id="abilityUp" className="fa fa-caret-up zFirst" aria-hidden="true"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {props.villains.map(character => <VillainRow
                        key={character.id}
                        image={character.image}
                        name={character.name}
                        firstAppearance={character.firstAppearance}
                        alias={character.alias}
                        ability={character.ability} />)}
                </tbody>
            </table>
        // </div>
    )
}

export default Table;
