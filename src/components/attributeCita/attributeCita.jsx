import React, { Fragment } from "react";
import './attributeCita.css'

const attributeCita = (props) => {
    return (
        <Fragment>
            <p>
                {props.attribute}:
                <span> {props.value}</span>
            </p>
        </Fragment>
    )
}

export default attributeCita