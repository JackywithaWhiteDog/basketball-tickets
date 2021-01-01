import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import clsx from 'clsx'
import { makeStyles, IconButton, Toolbar, Typography, Button } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

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
  title: {
    flex: 1,
  }
}))

export default function Header () {
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
          NBA Tickets
        </Typography>
        <Button variant="outlined">
          Login
        </Button>
      </Toolbar>
  )
}
