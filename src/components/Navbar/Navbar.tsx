import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import FavoriteTable from './components/FavoriteTable/FavoriteTable';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';
export interface NavbarInterface {}

const Navbar : React.FC<NavbarInterface> = () => {
  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  }

	return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React App Favorites
            </Typography>
            <IconButton aria-label="add to favorites" onClick={handleClick}>
              <FavoriteIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
