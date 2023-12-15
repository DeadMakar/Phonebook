import { makeStyles } from '@mui/material/styles';

export const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: 'auto',
  },
  input: {
    marginBottom: theme.spacing(2),
  },
}));
