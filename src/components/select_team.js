import SimpleSelect from "./select";
import SearchButton from "./search";
import { Grid } from '@material-ui/core'


function TeamSelect(props){
    var order = SimpleSelect(props.order);
    var fav = SimpleSelect({name:"display", items:["only favorite"], default:"All"})
    var button =  SearchButton({value:{order:order[1], fav:fav[1]}, type:"team"});
    return (
        <Grid
            container
            alignItems="flex-end"
        >
            {order[0]}
            {fav[0]}
            {button}
        </Grid>
    )
}

export default TeamSelect;