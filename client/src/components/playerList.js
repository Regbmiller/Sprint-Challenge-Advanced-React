import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export const playerList = props => {
    const { name, country } = props;
    return (
        <div>
            <h3>{name}</h3>
            <p>{country}</p>
        </div>
    )
}

//export default playerList; 
