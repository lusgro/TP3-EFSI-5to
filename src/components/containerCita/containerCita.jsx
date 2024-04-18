import React from "react";

import AttributeCita from '../attributeCita/attributeCita'
import BtnEliminar from '../btnEliminar/btnEliminar'

import './containerCita.css'

const ContainerCita = (props) => {
    return (
        <div className="container">
            <AttributeCita attribute="Mascota" value={props.valueMascota} />
            <AttributeCita attribute="Dueño" value={props.valueDueño} />
            <AttributeCita attribute="Fecha" value={props.valueFecha} />
            <AttributeCita attribute="Hora" value={props.valueHora} />
            <AttributeCita attribute="Sintomas" value={props.valueSintomas} />
            
            <BtnEliminar />
        </div>
    )
}

export default ContainerCita