import SQLSelect from "./select_sql";
import BasicTable from "./table";
import { makeStyles } from '@material-ui/core/styles';
import { shallowEqual, useSelector } from 'react-redux'
// import {rows, title} from "./data"

const useStyles = makeStyles({
    SelectDiv:{
        padding:'10px 20px 0 20px',
    },
    TableDiv:{
        padding:'10px 20px 10px 20px'
    },
    container: {
        maxHeight: '35vw',
    },
})


function SQLPage(){
    const classes = useStyles();
    
    const title = useSelector(state => state.sql.title, shallowEqual);
    const rows = useSelector(state => state.sql.rows, shallowEqual);
    // const token = useSelector(state => state.user.token, shallowEqual)

    return(
        <div>
            <div className={classes.SelectDiv}>
                <SQLSelect/>
            </div>
            <div className={classes.TableDiv}>
                <BasicTable rows={rows} title={title} TableStyle={classes.container}/>
            </div>
        </div>
    )
}

export default SQLPage;
