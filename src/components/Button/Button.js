import React from 'react'
import './Button.css'
import helpers from "helpers";

const Button = ({home}) =>{
    return(
        <button onClick={() =>helpers.House(home)}>Minha casa</button>
    )
}
export default Button