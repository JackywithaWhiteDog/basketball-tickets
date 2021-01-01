import GameSelect from "./select_game";
import {rows, title, Game_team1, Game_team2, Game_order} from "./data"
import BasicTable from "./table";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    SelectDiv:{
        padding:'10px 20px 0 20px',
    },
    TableDiv:{
        padding:'10px 20px 10px 20px'
    }
})


function GamePage(){
    const classes = useStyles();
    return(
        <div>
            <div className={classes.SelectDiv}>
                <GameSelect team1={Game_team1} team2={Game_team2} order={Game_order}/>
            </div>
            <div className={classes.TableDiv}>
                <BasicTable rows={rows} title={title}/>
            </div>
        </div>
    )
}

export default GamePage;
