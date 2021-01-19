import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button:{
        margin:8,
    },
})

function clicked(a) {
    alert(["name:", a]);
}

function BuyButton(props) {
    const classes = useStyles();
    return(
            <Button className={classes.button} variant="contained" onClick={() => { clicked(props.value) }}>
                buy!
            </Button>
    )
}

export default BuyButton;