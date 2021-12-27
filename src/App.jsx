import { useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';

import {fetchPostsStart} from './Redux/posts/posts.actions';
import {fetchUsersStart} from './Redux/users/users.actions';
import Mainpage from './Pages/Mainpage/mainpage.component';
import Buttons from './Components/Button/Buttons.component';



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
          <Buttons>Главная</Buttons> 
        </nav>
        <div className="main-content">
        
        <Routes>
          <Route exact path='/' element={<Mainpage/>}/> 
        </Routes> 
        
      </div>         
      </main>
    </div>
  );
}

export default App;

