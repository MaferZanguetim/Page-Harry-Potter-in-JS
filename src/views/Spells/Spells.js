import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { ButtonAppBar, SpellsCard } from '../../components'
import { getSpells } from '../../services'
import './Spells.css'

const Spells = () =>{
    const [spells, setSpells] = useState([{
        
    }])

    const fetchSpells = async() => {
        let data = await getSpells()
        setSpells(data.data.data)
    }

    useEffect(() => {
      fetchSpells()
    }, [])

    return(
        <div>
            <ButtonAppBar/>
            <h1 class='white'>
                Feitiços 
            </h1>
            <Box display='flex' gap={2} flexWrap='wrap' justifyContent='center' alignItems='center'>
                {spells.map(spell => <SpellsCard name={spell.attributes?.name} category={spell.attributes?.category} effect={spell.attributes?.effect} /> )}
            </Box>
        </div>
    )
}
export default Spells