import React, { useState } from 'react';
import {AppBar} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import {Badge} from '@material-ui/core';
import {MenuItem} from '@material-ui/core';
import {Menu} from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Component = (props : any) : JSX.Element => {
  const {
    classes,
  } = props;

  const [accountMenuEl, setAccountMenuEl] = useState();
  
  const onAccountMenu = (event : React.MouseEvent) => {
    setAccountMenuEl(event.currentTarget.parentElement);
  }

  const onMenuClose = (event : {}) => {
    setAccountMenuEl(null);
  }
  
  const menuId = 'primary-search-account-menu';

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.informations}>
            <IconButton aria-label="Show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="Show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="Account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              onClick={onAccountMenu}
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={accountMenuEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={accountMenuEl != null}
        onClose={onMenuClose}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
      </Menu>
    </div>
  );
}

export default Component;