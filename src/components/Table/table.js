import React from "react";
import "./table.css";
import VillainRow from "../VillainRow/villainRow"
import villains from "../../villains.json"

function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>First Appearance</th>
                    <th>Alias</th>
                    <th>Abilities</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{villains.map(character => <VillainRow 
                    image={character.image} />)}</td> 
                    <td>{villains.map(character => <VillainRow 
                    name={character.name} />)}</td>
                    <td>{villains.map(character => <VillainRow 
                    firstAppearance={character.firstAppearance} />)}</td>
                    <td>{villains.map(character => <VillainRow 
                    alias={character.alias} />)}</td>
                    <td>{villains.map(character => <VillainRow 
                    ability={character.ability} />)}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;
