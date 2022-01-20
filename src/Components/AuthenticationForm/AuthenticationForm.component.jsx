import React, {useState} from 'react';
import { useHttp } from '../../Hooks/http.hook';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import './AuthenticationForm.style.css';

function AuthenticationForm() {
    const {loading, request}= useHttp();
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState('')
    const [errormail, setErrormail] = useState(false)
    const [errorpass, setErrorpass] = useState(false)
   const changeEmail = (event) =>{
    setEmail(event.target.value)
   }
   const changePassword = (event) =>{
    setPassword(event.target.value)
    }
    const validation =()=>{
        let testEmail=/\S+@\S+/.test(email);
        if (!testEmail){
            setErrormail(true)            
        } else{
            setErrormail(false) 
        }
        if (password.length<6){
            setErrorpass(true)
        } else{
            setErrorpass(false)
        }
        if(testEmail && (password.length>=6)){
            setErrormail(false)
            setErrorpass(false)
            registerHandler()
        }
    }

    const registerHandler = async ()=>{
        try{
            let userData = JSON.stringify({email, password})
            const data = await request (
                ' http://localhost:5000/auth/register', 
                'POST', 
                userData, 
              {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            });
            console.log('DATA', data)
        }catch(e){

        }
    }

    return(    
      <div className='wrapper-auth'>
        
        <Box 
        sx={{
            width: 400,
            height: 400,
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
                {(errormail) && <Alert severity="error" className='alert'>Enter the correct Email</Alert>} 
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
                 {(errorpass) && <Alert severity="error" className='alert'>password must be at least 6 characters</Alert>}
            </div> 
            <div className='btn'>   
                <Button variant="contained" className="log-btn"
                disabled={loading}
                onClick={validation}
                 >Log in
                </Button>  
                
                <Button variant="contained" className='reg'
                onClick={validation} 
                disabled={loading}
                > Register
                </Button>
               
            </div> 
        </Box>
        
    </div>
        );     
}

export default AuthenticationForm;
//, 