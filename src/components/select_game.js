import SimpleSelect from "./select";
import SearchButton from "./search";

function GameSelect(props){
    var team1 = SimpleSelect(props.team1);
    var team2 = SimpleSelect(props.team2);
    var order = SimpleSelect(props.order);
    var fav = SimpleSelect({name:"display", items:["only favorite"], default:"All"})
    var button =  SearchButton({value:{team:team1[1], team2:team2[1], order:order[1], fav:fav[1]}, type:"game"});
    return (
        <div>
            {team1[0]}
            {team2[0]}
            {order[0]}
            {fav[1]}
            {button}
        </div>
    )
}

export default GameSelect;