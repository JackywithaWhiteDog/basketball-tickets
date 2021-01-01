import { shallowEqual, useSelector } from 'react-redux'
import { makeStyles, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  }
}))

export default function Sidebar () {
  const classes = useStyles()

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
      <List>
        <ListItem button key="search">
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        <ListItem button key="tickets">
          <ListItemIcon>
            <ConfirmationNumberIcon />
          </ListItemIcon>
          <ListItemText primary="Tickets" />
        </ListItem>
      </List>
    </Drawer>
  )
}