import React from "react";
import './inputCita.css'

const InputCita = (props) => { 
    return(
        <>
            <label htmlFor={props.name}>{props.label}</label>
            {props.type === "textbox" ? 
                <textarea
                    name={props.name}
                    id={props.name}
                ></textarea>
                :
                <input
                    type={props.type}
                    name={props.name}
                    id={props.name}
                    placeholder={props.placeholder}
                />
            }
        </>
    ) 
}

export default InputCita