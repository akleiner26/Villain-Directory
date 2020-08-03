import React, { useState } from "react";
import "./table.css";
import VillainRow from "../VillainRow/villainRow"
import villains from "../../villains.json"
import search from "..Search/search"



function Table() {
    const [villains, setVillains] = useState(villains)
    
    const findVillain = event => {
        for (let i = 0; i < villains.length; i++){
            console.log(villains.name);
            if (event.target === villains.name){
                this.setState({[villains.name]:value})
            } else (useState(villains))
        }
    }

    return (
        <table className="table table-striped table-dark">
            <thead className="thead-dark">
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>First Appearance</th>
                    <th>Alias</th>
                    <th>Abilities</th>
                </tr>
            </thead>
            <tbody>
                    {villains.map(character => <VillainRow 
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
