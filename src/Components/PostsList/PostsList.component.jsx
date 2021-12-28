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
//import PaginationItem from '@mui/material/PaginationItem';

function PostsList(props) {
  const posts = useSelector(state => state.posts.posts);  
  const users = useSelector(state => state.users.users);
  const pageItemStart = (props.page-1)*7;
  const pageItemEnd = (props.page*7);  
  const pagePosts = posts.slice(pageItemStart, pageItemEnd)
  
    if (!posts.length||!users.length){
      return <div>NO POSTS</div>
    }
 console.log("Страница " + props.page)

  return (
  <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
    {pagePosts.map(post =><Link to={`/post:${post.id}`} key={post.id}><ListItem alignItems="flex-start" className='link' >
      <ListItemAvatar>        
        <Avatar alt="username" variant="square">
        {users.find(user => user.id === post.userId).username.slice(0,2)}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={post.title}
        secondary={<React.Fragment>
          <Typography className='postlist-username'
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"            
          >
            {users.find(user => user.id === post.userId).username}
          </Typography>
          {post.body}
        </React.Fragment>} />

    </ListItem><Divider variant="inset" component="li" /></Link>
)}
</List>
   ) ;
}

export default PostsList;
