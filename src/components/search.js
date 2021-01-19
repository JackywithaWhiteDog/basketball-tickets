import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import request from '../utils/request'

const useStyles = makeStyles({
    button:{
        margin:8,
    },
})

function clicked(a) {
    alert(["type:", a[1], "\npos:", a[0].pos, "\nteam1:", a[0].team, "\nteam2:", a[0].team2, "\norder:", a[0].order, "\nfav", a[0].fav]);
    if(a[1] === "game")
    {
        alert(a[1]);
    }
    else if(a[1] === "player")
    {
        alert(a[1]);
    }
    else if(a[1] === "team")
    {
        alert(a[1]);
    }
}

function SearchButton(props) {
    const classes = useStyles();
    return(
            <Button className={classes.button} variant="contained" onClick={() => { clicked([props.value, props.type]) }}>
                search
            </Button>
    )
}

export default SearchButton;