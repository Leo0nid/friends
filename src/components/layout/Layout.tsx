import {FC} from 'react'
import Grid from '@mui/material/Grid';
import Header from './Header/Header';
import Sidebar from './sidebar/Sidebar';


const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Grid container spacing={2} padding={5} marginTop={2}>
        <Grid item md={3}>
          <Sidebar />
        </Grid>
  
        <Grid item md={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
