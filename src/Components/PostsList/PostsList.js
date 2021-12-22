import React from 'react';
import { connect } from 'react-redux';
import './PostsList.css';

import Post from '../Post/Post';

function PostsList({posts}) {
  return (
    <div className="PostsList">
     {posts.map(post => <Post post ={post}/>)}
    </div>
  );
}
const mapStateToProps = state =>{
  return {
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps)(PostsList);
