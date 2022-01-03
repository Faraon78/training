import React from 'react';

import { useParams } from 'react-router-dom';
import User from '../../Components/User/User.component';

function Userpage() {
    
  let {id} = useParams();
  console.log(id);
  return(  
       <User id={id}/>
   )
}

export default Userpage;