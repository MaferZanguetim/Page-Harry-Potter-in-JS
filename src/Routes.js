import {Routes as Switch, Route, BrowserRouter} from 'react-router-dom'
import{Hogwarts,Spells,Potions,Books,SelectorHat} from './views'


const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" element ={<Hogwarts/>} />
                <Route path = "/spells" element ={<Spells/>} />
                <Route path = "/potions" element ={<Potions/>} />
                <Route path = "/books" element ={<Books/>} />
                <Route path = "/selector-hat" element ={<SelectorHat/>} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes