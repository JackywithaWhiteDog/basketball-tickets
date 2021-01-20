import { shallowEqual, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles, Drawer, List, ListItem, ListItemIcon, ListItemText, Link, Divider, Typography } from "@material-ui/core"
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball"
import GroupIcon from "@material-ui/icons/Group"
import PersonIcon from "@material-ui/icons/Person"
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  title: {
    paddingLeft: 18
  }
}))

export default function Sidebar () {
  const classes = useStyles()
  const token = useSelector(state => state.user.token, shallowEqual)
  const name = useSelector(state => state.user.name, shallowEqual)

  const openSidebar = useSelector(state => state.utils.sidebar, shallowEqual)
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={openSidebar}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Typography variant="h6" className={classes.title}>
        Hi! {name}
      </Typography>
      <Divider />
      <List>
        <Link component={RouterLink} to="/player" color="inherit"  variant="body2" underline='none'>
          <ListItem button key="players">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Players" />
          </ListItem>
        </Link>
        <Link component={RouterLink} to="/team" color="inherit"  variant="body2" underline='none'>
          <ListItem button key="teams">
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Teams" />
          </ListItem>
        </Link>
        <Link component={RouterLink} to="/game" color="inherit"  variant="body2" underline='none'>
          <ListItem button key="games">
            <ListItemIcon>
              <SportsBasketballIcon />
            </ListItemIcon>
            <ListItemText primary="Games" />
          </ListItem>
        </Link>
        {
          token &&
          <Link component={RouterLink} to="/viewticket" color="inherit"  variant="body2" underline='none'>
            <ListItem button key="tickets">
              <ListItemIcon>
                <ConfirmationNumberIcon />
              </ListItemIcon>
              <ListItemText primary="Tickets" />
            </ListItem>
          </Link>
        }
      </List>
    </Drawer>
  )
}