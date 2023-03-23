import React from "react"
import {Worth} from '../../components'
import{Button} from '../../components'
import{ButtonAppBar} from '../../components'
import './Hogwarts.css'
import brasao from 'images/brasao-hog.jpg'




const Hogwarts = () =>{
    return(
    <div>
        <ButtonAppBar/>
        <div class = 'position'>
            <div class = 'griff'>
                <h1>Gryffindor</h1>
                <Worth value ='certo'/>
                <Button/>
            </div>
            <div class ='huff'>
                <h1>Hufflepuff</h1>
                <Worth value ='bom'/>
                <Button home='Hufflepuff'/>
            </div>
            <div class ='raven'>
                <h1>Ravenclaw</h1>
                <Worth value ='sabio'/>
                <Button home='Ravenclaw'/>
            </div>
            <div class ='sly'>
                <h1>Slytherin</h1>
                <Worth value ='necessário'/>
                <Button home='Slytherin'/>
            </div>
        </div> 
        <img src = {brasao} alt = 'brasao'/>
    </div>

    
    )
}
export default Hogwarts