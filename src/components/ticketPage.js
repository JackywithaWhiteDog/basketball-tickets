import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image'
import TicketImage from "../picture/court.jpg"
import { Grid } from "@material-ui/core" 
import BasicTable from './table';
import {ticketRows, ticketTitle} from "./data"

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


function TicketPage(){
    const classes = useStyles();
    // const openSidebar = useSelector(state => state.utils.sidebar, shallowEqual)
    return(
        <Grid container>
            <Grid item xs={6}>
                <Image
                    className={classes.image}
                    src={TicketImage}
                    imageStyle={{ width: '100%', height: 'inherit' }}
                />
            </Grid>
            <Grid item xs={6}>
                <BasicTable rows={ticketRows} title={ticketTitle} button={true}/>
            </Grid>
        </Grid>
    )
}

export default TicketPage;
