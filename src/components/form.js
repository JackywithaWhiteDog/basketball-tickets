import { Link as RouterLink } from 'react-router-dom'
import {
  makeStyles,
  Container,
  CssBaseline,
  Typography,
  TextField,
  // FormControlLabel,
  // Checkbox,
  Button,
  Link
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Form (props) {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Typography component="h1" variant="h5">
        { props.title }
      </Typography>
      <form
        className={classes.form}
        noValidate
        onSubmit={props.handleSubmit}
      >
        {
          !props.isLogin &&
          <TextField
          variant="outlined"
          required
          fullWidth
          id="name"
          label="User Name"
          name="name"
          autoComplete="name"
          autoFocus
        />
        }
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="account"
          label="Account"
          name="account"
          autoComplete="account"
          autoFocus={props.isLogin}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          autoComplete="current-password"
        />
        {/* {
          props.isLogin &&
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
         />
        } */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          { props.title }
        </Button>
        {
          props.isLogin &&
          <Link component={RouterLink} to="/signup" variant="body2">
            Don't have an account? Sign Up
          </Link>
        }
        {
          !props.isLogin &&
          <Link component={RouterLink} to="/login"  variant="body2">
            Already have an account? Login in
          </Link>
        }
      </form>
    </Container>
  )
}