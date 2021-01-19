import TeamSelect from "./select_team";
import BasicTable from "./table";
import { makeStyles } from '@material-ui/core/styles';
import { shallowEqual, useSelector } from 'react-redux'

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

    const title = useSelector(state => state.team.title, shallowEqual);
    const rows = useSelector(state => state.team.rows, shallowEqual);

    return(
        <div>
            <div className={classes.SelectDiv}>
                <TeamSelect/>
            </div>
            <div className={classes.TableDiv}>
                <BasicTable rows={rows} title={title} checkbox={false} TableStyle={classes.container}/>
            </div>
        </div>
    )
}

export default TeamPage;
