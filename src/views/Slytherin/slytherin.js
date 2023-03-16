import React from "react"
import './slytherin.css'
import sly from 'images/Sly-brasao.jpg'
import {Quadribol} from '../../components'
import {Members} from '../../components'

const Slytherin = () =>{
    return(
        <div class='gradient'>
            <div class='image'>
                <img class='img' src={sly} alt="brasaoSly"/>
            </div>
            <div class='title'>
                <h1>WELCOME TO THE BEST HOUSE IN HOGWARTS</h1>
            </div>
            <div class='motivation'>
                <h2> É melhor ser odiado por uma coisa que você é, do que ser amado por uma coisa que você não é</h2>
            </div>
            <div class='information'>
                <h2>Diretor: SEVERO SNAPE</h2>
                <br/>
                <h2>Criador: SALAZAR SLYTHERIN</h2>
                <br/>
                <h2>Elemento: ÁGUA</h2>
                <br/>
                <h2>Reliquia: MEDALHÃO</h2>
            </div>
            <div>
                <Quadribol/>
            </div>
            <div>
                <Members/>
            </div>
        </div>
    )
}

export default Slytherin