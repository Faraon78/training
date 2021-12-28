import { useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import {Route, Routes, NavLink} from 'react-router-dom';


import './App.css';

import {fetchPostsStart} from './Redux/posts/posts.actions';
import {fetchUsersStart} from './Redux/users/users.actions';
import Mainpage from './Pages/Mainpage/Mainpage.component';
import Buttons from './Components/Button/Buttons.component';
import Postpage from './Pages/Postpage/Postpage.component';

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
        <h1>MyChat</h1>        
      </header>
      
      <main className="main">
        <nav className="main-navigate">
          <NavLink to="/">
            <Buttons className="main-navigate-buttons">MAIN</Buttons> 
          </NavLink>
          <Buttons>USERS</Buttons> 
        </nav>
        <div className="main-content">
        
        <Routes>
          <Route path='/post:id' element={<Postpage/>}/>
          <Route path='/page' element={<Mainpage />}/>
          <Route exact path='/' element={<Mainpage/>}/> 
        </Routes> 
        
      </div>         
      </main>
    </div>
  );
}

export default App;

