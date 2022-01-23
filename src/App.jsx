import React from 'react';
import { useRoutes } from './Routes/Routes';
import Buttons from './Components/Button/Buttons.component';
import Typography from '@mui/material/Typography';

import './App.css';


function App() { 
  const routes = useRoutes(false)   
  let isAuthenticated = false;   
  return (
    <div className="app">
      <header className="app-header">        
        <Typography variant="h2" component="div">MyChat</Typography>    
        {isAuthenticated && <Buttons className="main-navigate-buttons">Logout</Buttons>}    
      </header>
        
      <div className="main">       
          {routes}        
      </div>         
      
    </div>
  );
}

export default App;

