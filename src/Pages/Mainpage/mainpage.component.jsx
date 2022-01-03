import React from 'react';
import { useSelector} from 'react-redux';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import {useParams, Link} from 'react-router-dom';

import PostsList from '../../Components/PostsList/PostsList.component';



function Mainpage() {   
 
  let {page} = useParams();  
  page= page || 1;
  console.log(page);  
  
  const posts = useSelector(state => state.posts.posts);
  const count = Math.ceil(posts.length / 8)
  
   
    return(
      
      <div>        
          <Pagination count={count}  color="primary" className="pagescount" 
          renderItem={(item) => (
            <PaginationItem
            component={Link}
            to={`/${item.page === 1 ? '' : `${item.page}`}`}
              {...item }
            />
            )}/>          
       
          <PostsList page ={page}/>
        
    </div>
  );     
}

export default Mainpage;
 