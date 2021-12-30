import React, {useEffect}  from 'react';
import {fetchUsersStart} from '../../Redux/users/users.actions';
import { useDispatch, useSelector} from 'react-redux';
//import { useParams } from 'react-router-dom';

import './Userpage.style.css';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function Userpage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsersStart())  
      }, [dispatch])  
    const users = useSelector(state => state.users.users);
  return (
    <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
         {users.map(user =><div key={user.id}>
      <ListItem alignItems="flex-start" >
        <ListItemAvatar>
          <Avatar alt={user.username} />
        </ListItemAvatar>
        <ListItemText
          primary={"Username: "+ user.username}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {"User: "+user.name}
              </Typography>
              {"  e-mail: "+ user.email}
              <br/>
              {"city: " +user.address.city }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" /></div>
      )}
    </List>
  );
}
 
export default Userpage;