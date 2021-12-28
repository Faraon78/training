import React from 'react';
import { useParams } from 'react-router-dom';
import Post from '../../Components/Post/Post.component';

function Postpage() {
  let {id} = useParams();
  id = id.substring(1);
  return(  
       <Post id={id}/>
   )
}

export default Postpage;