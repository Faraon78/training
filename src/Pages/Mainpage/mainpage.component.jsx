import React from 'react';
import { useSelector} from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PostsList from '../../Components/PostsList/PostsList.component';



function Mainpage({url}) {   
  
  const [page, setPage] = React.useState(1);
  const posts = useSelector(state => state.posts.posts);
  const count = Math.ceil(posts.length / 8)
  const handleChange = (event, value) => {
    console.log(value);
    setPage(value);
  };
  
  console.log(url)
  console.log(page)
    return(
      <div>       
        <PostsList page ={page}/>
        <Stack spacing={2}>
        
          <Pagination count={count} color="primary" onChange={handleChange}/>
        
      </Stack>
    </div>
  );     
}

export default Mainpage;