import React, { useContext } from 'react';
import CitaContext from '../../CitaContext';

import AttributeCita from '../attributeCita/attributeCita'
import BtnEliminar from '../btnEliminar/btnEliminar'

import './containerCita.css'

const ContainerCita = (props) => {
    const { citas, setCitas } = useContext(CitaContext);
    const eliminarCita = () => {
        const newCitas = [...citas];
        newCitas.splice(props.index, 1);
        setCitas(newCitas);
    }

    return (
        <div className="container">
            <AttributeCita attribute="Mascota" value={props.valueMascota} />
            <AttributeCita attribute="Dueño" value={props.valueDueño} />
            <AttributeCita attribute="Fecha" value={props.valueFecha} />
            <AttributeCita attribute="Hora" value={props.valueHora} />
            <AttributeCita attribute="Sintomas" value={props.valueSintomas} />
            
            <BtnEliminar onClick={() => eliminarCita()}/>
        </div>
    )
}

export default ContainerCita