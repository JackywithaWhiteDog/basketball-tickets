import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles, IconButton, Toolbar, Typography, Button, Link } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { createHashHistory } from 'history'

const history = createHashHistory()

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbarShift: {
    width: `calc(100% - ${drawerWidth}px - 48px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  leftButton: {
    marginRight: 10
  },
  title: {
    flex: 1,
  }
}))

const logout = dispatch => {
  dispatch({type: 'user/resetUser'})
  history.push('/player')
}

export default function Header (props) {
  const token = useSelector(state => state.user.token, shallowEqual)

  const openSidebar = useSelector(state => state.utils.sidebar, shallowEqual)
  const dispatch =  useDispatch()
  const classes = useStyles()

  const toggleDrawer = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    dispatch({ type: 'utils/toggleSidebar' })
  }

  return (
    <Toolbar
      className={clsx(classes.toolbar, {[classes.toolbarShift]: openSidebar})}
      position="sticky"
    >
      <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={() => toggleDrawer(dispatch)}>
        <MenuIcon />
      </IconButton>
        <Typography variant="h6" className={classes.title}>
          {props.title}
        </Typography>
        {
          token ?
          <Button variant="outlined" onClick={() => logout(dispatch)}>
            Logout
          </Button>
          :
          <div>
            <Link component={RouterLink} to="/login" variant="body2" underline='none'>
              <Button className={classes.leftButton} variant="outlined" >
                Login
              </Button>
            </Link>
            <Link component={RouterLink} to="/signup" variant="body2" underline='none'>
              <Button className={classes.leftButton} variant="outlined" >
                Signup
              </Button>
            </Link>
          </div>
        }
      </Toolbar>
  )
}
