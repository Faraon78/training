import React from 'react';

import {Route, Routes, NavLink} from 'react-router-dom';

import MainPage from './Pages/MainPage/MainPage.component';
import Buttons from './Components/Button/Buttons.component';
import PostPage from './Pages/PostPage/PostPage.component';
import UserListPage from './Pages/UserListPage/UserListPage.component';
import UserPage from './Pages/UserPage/UserPage.component';
import AuthPage from './Pages/AuthPage/AuthPage.component';

import Typography from '@mui/material/Typography';



import './App.css';

function App() { 
        
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
          <Route path='/:page' element={<MainPage/>}/>
          <Route path='/post/:id' element={<PostPage/>}/>
          <Route path='/users/:id' element={<UserPage />}/>
          <Route path='/users' element={<UserListPage />}/>
          <Route exact path='/' element={<AuthPage/>}/> 
        </Routes> 
        
      </div>         
      </main>
    </div>
  );
}

export default App;

