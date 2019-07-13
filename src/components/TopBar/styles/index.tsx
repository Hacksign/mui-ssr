import { Theme, createStyles } from '@material-ui/core';


const styles = (theme : Theme) => createStyles({
  root: { },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  informations: {
    display: 'block',
    border: '1px solid red',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
});

export default styles;