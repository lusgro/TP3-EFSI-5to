import React from "react";
import './btnEliminar.css'

const btnEliminar = (props) => {
    return <button className="eliminar" onClick={props.onClick}>Eliminar</button>
}

export default btnEliminar