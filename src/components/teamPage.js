import TeamSelect from "./select_team";
import {rows, title, Team_order} from "./data"
import BasicTable from "./table";
import { makeStyles } from '@material-ui/core/styles';

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


function TeamPage(){
    const classes = useStyles();
    return(
        <div>
            <div className={classes.SelectDiv}>
                <TeamSelect order={Team_order}/>
            </div>
            <div className={classes.TableDiv}>
                <BasicTable rows={rows} title={title} checkbox={true} TableStyle={classes.container}/>
            </div>
        </div>
    )
}

export default TeamPage;
