import SimpleSelect from "./select";
import SearchButton from "./search";
import { Grid } from '@material-ui/core'

function PlayerSelect(props){
    var pos = SimpleSelect(props.pos);
    var team = SimpleSelect(props.team);
    var order = SimpleSelect(props.order);
    var fav = SimpleSelect({name:"display", items:["only favorite"], default:"All"})
    var button =  SearchButton({value:{pos:pos[1], team:team[1], order:order[1], fav:fav[1]}, type:"player"});
    return (
        <Grid
            container
            alignItems="flex-end"
        >
            {pos[0]}
            {team[0]}
            {order[0]}
            {fav[0]}
            {button}
        </Grid>
    )
}

export default PlayerSelect;