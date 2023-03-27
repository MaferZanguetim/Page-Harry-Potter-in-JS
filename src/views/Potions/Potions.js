import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { ButtonAppBar, PotionsCard } from '../../components'
import { getPotions } from '../../services'
import './Potions.css'

const Potions = () =>{
    const [potions, setPotions] = useState([{
        
    }])

    const fetchPotions = async() => {
        let data = await getPotions()
        setPotions(data.data.data)
    }

    useEffect(() => {
      fetchPotions()
    }, [])

    return(
        <div>
            <ButtonAppBar/>
            <h1 class='white'>
                Poções
            </h1>
            <Box display='flex' gap={2} flexWrap='wrap' justifyContent='center' alignItems='center'>
                {potions.map(potion => <PotionsCard name={potion.attributes?.name} ingredients={potion.attributes?.ingredients} effect={potion.attributes?.effect} /> )}
            </Box>
        </div>
    )
}
export default Potions