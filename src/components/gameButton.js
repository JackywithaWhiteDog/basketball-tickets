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
    alert(["name:", a]);
    const data = {
        table:"getTicketData",
        query:{
            Game_ID:a,
        }
    }
    request({
        url: '/data',
        method: 'post',
        params:data
      }).then(res => {
        dispatch({ type: 'buyticket/setBuyTicket',
                   payload: {title:res.Column_names, 
                             rows:res.Data,
                             Game_ID:a}
        })
    })
    document.location.href="./#/buyticket"
}

function GameButton(props) {
    const dispatch =  useDispatch();
    const classes = useStyles();
    return(
            <Button className={classes.button} variant="contained" onClick={() => { clicked(props.value, dispatch) }}>
                buy!
            </Button>
    )
}

export default GameButton;