import React from "react";
import "./title.css";

const Title = (props) => {
    return props.h1 ? <h1 className="title">{props.title}</h1> : <h2 className="title">{props.title}</h2>;}

export default Title;