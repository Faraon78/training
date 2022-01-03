import { useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import {Route, Routes, NavLink} from 'react-router-dom';
import Typography from '@mui/material/Typography';


import './App.css';

import {fetchPostsStart} from './Redux/posts/posts.actions';
import {fetchUsersStart} from './Redux/users/users.actions';

import Mainpage from './Pages/Mainpage/Mainpage.component';
import Buttons from './Components/Button/Buttons.component';
import Postpage from './Pages/Postpage/Postpage.component';
import Userlistpage from './Pages/Userlistpage/Userlistpage.component';
import Userpage from './Pages/Userpage/Userpage.component';

function App() {
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchPostsStart())  
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchUsersStart())  
  }, [dispatch])  
  
  
        
  return (
    <div className="app">
      <header className="app-header">        
        <Typography variant="h2" component="div">MyChat</Typography>        
      </header>
      
      <main className="main">
        <nav className="main-navigate">
          <NavLink to="/">
            <Buttons className="main-navigate-buttons">MAIN</Buttons> 
          </NavLink>
          <NavLink to="/users">
            <Buttons className="main-navigate-buttons">USERS</Buttons> 
          </NavLink>
        </nav>
        <div className="main-content">
        
        <Routes>
        <Route path='/:page' element={<Mainpage/>}/>
          <Route path='/post/:id' element={<Postpage/>}/>
          <Route path='/users/:id' element={<Userpage />}/>
          <Route path='/users' element={<Userlistpage />}/>
          <Route exact path='/' element={<Mainpage/>}/> 
        </Routes> 
        
      </div>         
      </main>
    </div>
  );
}

export default App;

