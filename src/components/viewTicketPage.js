import { makeStyles } from '@material-ui/core/styles';
import BasicTable from "./table";
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import request from '../utils/request'

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

    const User_ID = useSelector(state => state.user.tocken, shallowEqual);

    const dispatch =  useDispatch();
    useEffect(() => {
        const data = {
            table:　'viewTicket',
            User_ID: User_ID
        }
        request({
            url: '/data',
            method: 'post',
            params: data
        }).then(res => {
            dispatch({ type: 'viewticket/setViewTicket',
                       payload: {title:res.Column_names, 
                                 rows:res.Data}
            })
        
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const title = useSelector(state => state.viewticket.title, shallowEqual);
    const rows = useSelector(state => state.viewticket.rows, shallowEqual);

    return(
        <div>
            <div className={classes.TableDiv}>
                <BasicTable rows={rows} title={title} refundTicketbutton={true} TableStyle={classes.container}/>
            </div>
        </div>
    )
}

export default ViewTicketPage;
