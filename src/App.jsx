import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';

import './App.css';
import PostsList from './Components/PostsList/PostsList';
import PostsActionTypes from './Redux/posts/posts.actionTypes';


function App() {
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch({ type: PostsActionTypes.FETCH_POSTS_START})
  
  }, [])  
  
  const posts = useSelector(state => state.posts.posts);
  console.log(posts);
  return (
    <div className="App">
      <header className="App-header">        
        <h1>MyChat</h1>        
      </header>
      <main className="Main">
        <nav className="Main-navigate">Buttons</nav>
        <PostsList posts ={posts}/>        
      </main>
    </div>
  );
}

export default App;
