import  React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
import {Star} from '../Stars'

const PotionsCard = ({name, effects, ingredients }) => {
  return (
    <Card sx={{width: 345, height: 345}}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Effect: {effects}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ingredients: {ingredients}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Star/>
     
    </Card>
  );
}

export default PotionsCard