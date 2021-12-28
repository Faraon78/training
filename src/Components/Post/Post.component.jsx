import React from 'react';
//import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import './Post.style.css';

function Post(props) {
  const posts = useSelector(state => state.posts.posts);
  const post = posts.find(post => post.id == props.id)
  const users = useSelector(state => state.users.users);
  const user = users.find(user => user.id == post.userId);

  console.log(post);
  console.log(user);
  return (
    <Card sx={{ minWidth: 275 }} className="card-note">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Author
        </Typography>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {post.title}
        </Typography>
        <Typography variant="body2">
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Post;