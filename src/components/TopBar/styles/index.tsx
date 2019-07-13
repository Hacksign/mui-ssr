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
    display: 'none',
    border: '1px solid red',
    position: 'absolute',
    right: '20px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
});

export default styles;