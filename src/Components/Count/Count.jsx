import React from "react";
import "./count.css"


export const Count = ({ clicks, container }) => {

    return (
        <div className={container}> {clicks} </div>
    )

}