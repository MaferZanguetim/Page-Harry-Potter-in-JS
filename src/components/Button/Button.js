import React from 'react'
import './Button.css'
import helpers from "helpers";

const Button = ({home}) =>{
    return(
        <button onClick={() =>helpers.House(home)}>Caracteristica</button>
    )
}
export default Button