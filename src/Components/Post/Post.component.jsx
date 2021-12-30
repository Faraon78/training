import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
//import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import {fetchCommentsStart} from '../../Redux/comments/comments.actions';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import './Post.style.css';

function Post(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCommentsStart())  
  }, [dispatch]);
  
  const posts = useSelector(state => state.posts.posts);
  // eslint-disable-next-line eqeqeq
  const post = posts.find(post => post.id == props.id)
  const users = useSelector(state => state.users.users);
  // eslint-disable-next-line eqeqeq
  const user = users.find(user => user.id == post.userId);
  const comments = useSelector(state => state.comments.comments)

  console.log(post);
  console.log(user);
  console.log(comments);
  return (
    <Card sx={{ minWidth: 275 }} className="card-note">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Author
        </Typography>
        <Typography variant="h5" component="div">
          {user.username}
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