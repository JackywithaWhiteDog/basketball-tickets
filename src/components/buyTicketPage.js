import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image'
import TicketImage from "../picture/court.jpg"
import { Grid } from "@material-ui/core" 
import BasicTable from './table';
import { shallowEqual, useSelector } from 'react-redux'

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


function BuyTicketPage(){
    const classes = useStyles();
    const ticketTitle = useSelector(state => state.buyticket.title, shallowEqual);
    const ticketRows = useSelector(state => state.buyticket.rows, shallowEqual);
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
                <BasicTable rows={ticketRows} title={ticketTitle} ticketbutton={true}/>
            </Grid>
        </Grid>
    )
}

export default BuyTicketPage;
