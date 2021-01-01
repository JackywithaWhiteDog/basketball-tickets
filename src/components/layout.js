import Header from './header'
import Sidebar from './sidebar'
import { shallowEqual, useSelector } from 'react-redux'
import clsx from 'clsx'
import { makeStyles } from "@material-ui/core"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  main: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  mainShift: {
    width: `calc(100% - ${drawerWidth}px - 48px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}))

export default function Layout (props) {
  const openSidebar = useSelector(state => state.utils.sidebar, shallowEqual)
  const classes = useStyles()
  return (
    <div>
      <Header title={props.title}/>
      <Sidebar />
      <main
        className={clsx(classes.main, {[classes.mainShift]: openSidebar})}
      >
        {props.component()}
      </main>
    </div>
  );
}
