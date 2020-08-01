import React from "react";
import "./villainRow.css";

function VillainRow(props) {
    return (
        <tr>
            <td><img src={props.img} alt={props.name}/></td>
            <td>{props.name}</td>
            <td>{props.year}</td>
            <td>{props.alias}</td>
            <td>{props.ability}</td>
        </tr>
    )
}

export default VillainRow;