import React from 'react'
import{ButtonAppBar, Star, MediaCard} from '../../components'
import './Books.css'

const Books = () =>{
    return(
        <div>
            <ButtonAppBar/>
            <h1 class='white'>
                Livros da Saga de Harry Potter
            </h1>
            <MediaCard/>
            <Star/>
        </div>
    )
}
export default Books