import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button:{
        margin:8,
    },
})

function clicked(a) {
    alert(["pos:", a.pos, "\nteam1:", a.team, "\nteam2:", a.team2, "\norder:", a.order, "\nfav", a.fav]);
}

function SearchButton(props) {
    const classes = useStyles();
    return(
            <Button className={classes.button} variant="contained" onClick={() => { clicked(props.value) }}>
                search
            </Button>
    )
}

export default SearchButton;