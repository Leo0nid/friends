import {FC} from 'react'
import { ListItem, ListItemIcon ,ListItemText,ListItemButton, List } from '@mui/material';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import{menuFiles} from './dataFile'

const Menu: FC = () => {
    const navigate = useNavigate()
  return (
    <div>
        <Card
        variant="outlined"
        sx={{
          padding: 2,
          backgroundColor: '#F1F7FA',
          marginBottom: 5,
        }}>
                <List>
                    {menuFiles.map((item ,index) =>(

                        <ListItem disablePadding key={index}>
                <ListItemButton onClick={() =>  navigate(item.link)}>
                  <ListItemIcon sx={{minWidth: 36}}>
                  <item.icon/>
                  </ListItemIcon>
                 <ListItemText primary={item.title}/>
                </ListItemButton>
              </ListItem>
                 ))}
              </List>
        </Card>
    </div>
  )
}

export default Menu