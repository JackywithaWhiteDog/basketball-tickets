import PlayerSelect from "./select_player";
import {rows, title, Player_pos, Player_team, Player_order} from "./data"
import BasicTable from "./table";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    SelectDiv:{
        padding:'10px 20px 0 20px',
    },
    TableDiv:{
        padding:'10px 20px 10px 20px'
    },
})


function PlayerPage(){
    const classes = useStyles();
    return(
        <div>
            <div className={classes.SelectDiv}>
                <PlayerSelect pos={Player_pos} team={Player_team} order={Player_order}/>
            </div>
            <div className={classes.TableDiv}>
                <BasicTable rows={rows} title={title}/>
            </div>
        </div>
    )
}

export default PlayerPage;
