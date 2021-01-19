import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import request from '../utils/request'

const useStyles = makeStyles({
    button:{
        margin:8,
    },
})

function clicked(a) {
    alert(["buy:", a]);
    document.location.href="./#/viewticket";
}

function TicketButton(props) {
    const classes = useStyles();
    return(
            <Button className={classes.button} variant="contained" onClick={() => { clicked(props.value) }}>
                buy!
            </Button>
    )
}

export default TicketButton;