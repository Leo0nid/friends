import { Link, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { ListItem, ListItemIcon, ListItemText, ListItemButton, List } from '@mui/material';

import {user} from './sidebar/dataUsers'


const UserItems = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          padding: 2,
          backgroundColor: '#F1F7FA',
        }}>
        {user.map((user) => (
          <Link
            key={user.id}
            to={`/profile/${user.id}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#111',
              marginBottom: 5,
            }}>
            <Box
              sx={{
                position: 'relative',
                marginRight: 2,
                overflow: 'hidden',
                width: 56,
                height: 56,
              }}>
              <Avatar
                src={user.avatar}
                alt="avatar"
                sx={{ width: 50, height: 50, borderRadius: 50 }}
              />
              {user.isInNetwork && (
                <Box
                  sx={{
                    backgroundColor: '#4FB14F',
                    border: '2px solid #F1F7FA',
                    width: 10,
                    height: 10,
                    position: 'absolute',
                    top: 37,
                    left: 39,
                    borderRadius: 50,
                  }}
                />
              )}
            </Box>

            <span style={{ fontSize: 14 }}>{user.name}</span>
          </Link>
        ))}

        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/message')}>
              <ListItemIcon>
                <QuestionAnswerIcon />
              </ListItemIcon>
              <ListItemText primary="Сообщения" />
            </ListItemButton>
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default UserItems;
