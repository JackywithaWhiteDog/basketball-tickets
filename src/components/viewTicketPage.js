import { makeStyles } from '@material-ui/core/styles';
import GameSelect from "./select_game";
import BasicTable from "./table";
import { shallowEqual, useSelector } from 'react-redux'
import {rows, title} from "./data"

const useStyles = makeStyles({
    image:{
        padding:'20 20 20 20',
    },
    table:{
        width:'30%'
    },
    container: {
        maxHeight: 600,
    },
    container2: {
        maxHeight: 300,
    }
})


function ViewTicketPage(){
    const classes = useStyles();
    // const openSidebar = useSelector(state => state.utils.sidebar, shallowEqual)
    return(
        <div>
            <div className={classes.SelectDiv}>
                <GameSelect/>
            </div>
            <div className={classes.TableDiv}>
                <BasicTable rows={rows} title={title} refundTicketbutton={true} TableStyle={classes.container}/>
            </div>
        </div>
    )
}

export default ViewTicketPage;
