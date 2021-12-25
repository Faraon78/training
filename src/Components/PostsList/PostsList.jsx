import React from 'react';

import './PostsList.css';

//import Post from '../Post/Post';

function PostsList(posts) {
  console.log(posts);
  return (
    <div className="PostsList">
      posts
    </div>
  );
}

export default PostsList;
//{posts.map(post => <Post post ={post} key = {post.id}/>)}