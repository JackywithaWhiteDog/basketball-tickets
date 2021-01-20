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
    // alert(["buy:", a]);
    const data = {
        table:"buyTicket",
        query:{
            Game_ID:Game_ID,
            Seat:a,
            User_ID:User_ID
        }
    }
    console.log(data)
    request({
        url: '/data',
        method: 'post',
        params:data
      }).then(() => {
        document.location.href="./#/viewticket"
      })
    // document.location.href="./#/viewticket";
}

function TicketButton(props) {
    const token = useSelector(state => state.user.token, shallowEqual)
    const classes = useStyles();
    const Game_ID = useSelector(state => state.buyticket.Game_ID, shallowEqual);
    // const User_ID = useSelector(state => state.user.tocken, shallowEqual);

    console.log(token)

    return(
            <Button className={classes.button} variant="contained" onClick={() => { clicked(props.value, Game_ID, token) }}>
                buy!
            </Button>
    )
}

export default TicketButton;