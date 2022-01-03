import React from 'react';
import { useSelector} from 'react-redux';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function User(props) {
    const users = useSelector(state => state.users.users);
    // eslint-disable-next-line eqeqeq
    const currentUser = users.find(user => user.id == props.id);
    console.log(currentUser);
    return (
        <Card sx={{ minWidth: 275, maxWidth: 1000 }} className="card-note">
      <CardContent>
        <Typography  variant="h6" color="text.secondary">
        Username: {currentUser.username}
        </Typography>
        <Typography variant="h5" component="span">
          Name: {currentUser.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          E-mail: {currentUser.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Phone: {currentUser.phone}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Adress: {currentUser.address.city}, {currentUser.address.street}, {currentUser.address.suite}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Website: {currentUser.website}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Company: {currentUser.company.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        CatchPhrase: {currentUser.company.catchPhrase}
        </Typography>
      </CardContent>
    </Card>
    )
}

export default User;

/*export default function User() {
  return (
    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
      <Routes>
        <Route path="*" element={<Content />} />
      </Routes>
    </MemoryRouter>
  );
}*/