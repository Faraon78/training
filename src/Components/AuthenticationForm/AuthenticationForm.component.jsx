import React, {useState} from 'react';

import Buttons from '../../Components/Button/Buttons.component';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './AuthenticationForm.style.css';

function AuthenticationForm() {
   const [email, setEmail]= useState({
       email:"", password:""
   })
   const [password, setPassword]= useState({
    email:"", password:""
    })
   const changeEmail = (event) =>{
    setEmail({email: event.target.value})
   }
   const changePassword = (event) =>{
    setPassword({password:event.target.value})
    }

    return(    
      <div className='wrapper-auth'>

        <Box 
        sx={{
            width: 400,
            height: 350,
            backgroundColor: 'white',       
            color: 'primary.main',     
            
          }}
         component="form"      
         noValidate
         autoComplete="off"
        >
            <div className='auth-header'>
                <br/>
                <h2 >Authorization</h2>
            </div>
            <div className="field">
                
                <TextField 
                required
                id="outlined-required"
                label="Email"
                placeholder="Email"
                type="email"
                name ="email"
                onChange={changeEmail}
                />
            </div>     
            <div className="field">    
                <TextField 
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                name="password"
                onChange={changePassword}                
                />
            </div> 
            <div className='btn'>   
                <Buttons className="log-btn" >Log in</Buttons>  
                <Buttons className='reg'>Register</Buttons>
            </div> 
        </Box>
    </div>
        );     
}

export default AuthenticationForm;
/*sx={{
    '& .MuiTextField-root': { m: 1, width: '25ch' },
    opacity: [0.9, 0.8, 0.7],
  }}*/