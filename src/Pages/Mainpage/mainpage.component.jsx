import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PostsList from '../../Components/PostsList/PostsList.component';

function Mainpage() {   
    
    return(
      <div>
      <PostsList/>
      <Stack spacing={2}>
      <Pagination count={10} color="primary" />
      </Stack>
    </div>

  );
               
    
}

export default Mainpage;