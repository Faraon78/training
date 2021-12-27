import React from 'react';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import './PostsList.style.css';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function PostsList() {
  const posts = useSelector(state => state.posts.posts);
    console.log(posts);

  const users = useSelector(state => state.users.users);
  console.log(users);
    if (!posts.length||!users.length){
      return <div>NO POSTS</div>
    }
 
  return (
  <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
    {posts.map(post =><Link to={`/post:${post.id}`} key={post.id}><ListItem alignItems="flex-start" className='link' >
      <ListItemAvatar>        
        <Avatar alt={users.find(user => user.id === post.userId).name} />
      </ListItemAvatar>
      <ListItemText
        primary={post.title}
        secondary={<React.Fragment>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"            
          >
            {users.find(user => user.id === post.userId).name}
          </Typography>
          {post.body}
        </React.Fragment>} />

    </ListItem><Divider variant="inset" component="li" /></Link>
)}
</List>
   ) ;
}

export default PostsList;
