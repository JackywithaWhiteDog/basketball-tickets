import PlayerSelect from "./select_player";
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


function PlayerPage(){
    const classes = useStyles();

    const title = useSelector(state => state.player.title, shallowEqual);
    const rows = useSelector(state => state.player.rows, shallowEqual);

    return(
        <div>
            <div className={classes.SelectDiv}>
                <PlayerSelect/>
            </div>
            <div className={classes.TableDiv}>
                <BasicTable rows={rows} title={title} checkbox={true} TableStyle={classes.container}/>
            </div>
        </div>
    )
}

export default PlayerPage;
