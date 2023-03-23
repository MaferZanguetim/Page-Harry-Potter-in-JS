import * as React from 'react';
import {Link} from 'react-router-dom'
import { 
    AppBar, Box, Drawer, Toolbar, Typography,IconButton, ListItem, List
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './TopBar.css'


const navItems = [
    {
      label: 'Home',
      url: '/'
    },
    {
      label: 'Feitiços',
      url: '/spells'
    },
    {
      label: 'Poções',
      url: '/potions'
    },
    {
      label: 'Livros',
      url: '/books'
    },
    {
      label: 'Chapeu Seletor',
      url: '/selector-hat'
    },

];
function ButtonAppBar(props) {
    const { window } = props;
    const [desktopOpen, setDesktopOpen] = React.useState(false);
    
    const handleDrawerToggle = () => {
        setDesktopOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <Link to={item.url}>{item.label}</Link>
              </ListItem>
            ))}
          </List>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
      <Box sx={{ display: 'flex' }}>
        <AppBar class='background' component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 4, display: { xs: 'none', sm: 'block' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              component="div"
              sx={{marginLeft: '10vw',width:'75vw', color:'white'  }}
            >
              Escola de Magia e Bruxaria de Hogwarts
            </Typography>
           
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={desktopOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box'},
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    );
}

export default ButtonAppBar
    