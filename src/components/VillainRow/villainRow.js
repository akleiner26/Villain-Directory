import React from "react";
import "./villainRow.css";

function VillainRow(props) {
    console.log(props.image)
    return (
        <tr>
            <td><img src={props.image} alt={props.name}/></td>
            <td>{props.name}</td>
            <td>{props.firstAppearance}</td>
            <td>{props.alias}</td>
            <td>{props.ability}</td>
        </tr>
    )
}

export default VillainRow;