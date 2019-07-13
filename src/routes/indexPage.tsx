import React from 'react';
import { withStyles, createStyles } from '@material-ui/styles';
import { CssBaseline, Theme } from '@material-ui/core';
import { Component as componentTopBar, styles as stylesTopBar } from '../components/TopBar';
import { Component as componentSideBar, styles as stylesSideBar } from '../components/SideBar';

const styles = (theme : Theme) => createStyles({
  root: { },
});

const IndexPage = (props : any) : JSX.Element => {
  React.useEffect(
    () => {
      document.querySelector('#app-styles')!.remove();
    }
  );

  const { classes } = props;
  const TopBar = withStyles(stylesTopBar)(componentTopBar);
  const SideBar = withStyles(stylesSideBar)(componentSideBar);
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <SideBar />
      <TopBar />
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(IndexPage);