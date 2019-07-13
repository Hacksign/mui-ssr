import React from 'react';
import { 
  Divider,
  Drawer,
  Hidden, 
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core';

import {
  ShowChart,
  Sort
} from '@material-ui/icons';

interface ResponsiveDrawerProps {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  classes: any;
}

const Component = (props: ResponsiveDrawerProps) :JSX.Element => {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <nav className={classes.drawer} aria-label="Mailbox folders">
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
              <ListItem button key='看板'>
                <ListItemIcon><ShowChart /></ListItemIcon>
                <ListItemText primary='看板' />
              </ListItem>
              <Collapse in={true} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  <ListItem className={classes.nested} button>
                    <ListItemIcon><Sort /></ListItemIcon>
                    <ListItemText>汇总</ListItemText>
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </div>
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default Component;
