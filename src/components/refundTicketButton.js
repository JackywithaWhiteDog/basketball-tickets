import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import request from '../utils/request'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles({
    button:{
        margin:8,
    },
})

function clicked(a, dispatch) {
    // alert(["refund:", a]);
    const data = {
        table:"refundTicket",
        query:{
            Ticket_ID:a,
        }
    }
    request({
        url: '/data',
        method: 'post',
        params:data
      }).then(res => {
        document.location.href="./#/redirectTicket"
        // dispatch({ type: 'viewticket/setViewTicket',
        //            payload: {title:res.Column_names, 
        //                      rows:res.Data,}
        // })
    })
}

function RefundTicketButton(props) {
    const dispatch =  useDispatch();
    const classes = useStyles();
    return(
            <Button className={classes.button} variant="contained" onClick={() => { clicked(props.value, dispatch) }}>
                refund!
            </Button>
    )
}

export default RefundTicketButton;