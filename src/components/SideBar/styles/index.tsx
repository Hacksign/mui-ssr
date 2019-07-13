import { createStyles, Theme } from '@material-ui/core';

const side_bar_width = '240px';
const styles = (theme: Theme) => createStyles({
  toolbar: theme.mixins.toolbar,
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: side_bar_width,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: side_bar_width,
  },
  nested: {
    border: '1px solid red',
    paddingLeft: theme.spacing(4),
  }
});

export default styles;