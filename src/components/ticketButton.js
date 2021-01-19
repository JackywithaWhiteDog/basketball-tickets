import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import request from '../utils/request'
import { shallowEqual, useSelector} from 'react-redux'

const useStyles = makeStyles({
    button:{
        margin:8,
    },
})

function clicked(a, Game_ID, User_ID) {
    alert(["buy:", a]);
    const data = {
        table:"buyticket",
        query:{
            Game_ID:Game_ID,
            Seat:a,
            User_ID:User_ID
        }
    }
    request({
        url: '/data',
        method: 'post',
        params:data
      })
    document.location.href="./#/viewticket";
}

function TicketButton(props) {
    const classes = useStyles();
    const Game_ID = useSelector(state => state.buyticket.Game_ID, shallowEqual);
    const User_ID = useSelector(state => state.user.tocken, shallowEqual);
    return(
            <Button className={classes.button} variant="contained" onClick={() => { clicked(props.value, Game_ID, User_ID) }}>
                buy!
            </Button>
    )
}

export default TicketButton;