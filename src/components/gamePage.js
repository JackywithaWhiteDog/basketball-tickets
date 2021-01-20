import GameSelect from "./select_game";
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


function GamePage(){
    const classes = useStyles();
    
    const title = useSelector(state => state.game.title, shallowEqual);
    const rows = useSelector(state => state.game.rows, shallowEqual);
    const token = useSelector(state => state.user.token, shallowEqual)

    return(
        <div>
            <div className={classes.SelectDiv}>
                <GameSelect/>
            </div>
            <div className={classes.TableDiv}>
                <BasicTable rows={rows} title={title} gamebutton={token} TableStyle={classes.container}/>
            </div>
        </div>
    )
}

export default GamePage;
