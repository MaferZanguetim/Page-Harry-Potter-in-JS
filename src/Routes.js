import {Routes as Switch, Route, BrowserRouter} from 'react-router-dom'
import{Hogwarts} from './views'
import{Slytherin}from './views'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/hogwarts" element ={<Hogwarts/>} />
                <Route path= "/slytherin" element ={<Slytherin/>}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes