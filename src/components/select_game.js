import SimpleSelect from "./select";
import SearchButton from "./search";
import { useEffect } from "react";
import request from '../utils/request'
import {Game_team1, Game_team2, Game_order} from "./data"
import React from 'react';

function GameSelect(){

    const [response, setResponse] = React.useState({
        Home_team_ID:Game_team1,
        Away_team_ID:Game_team2,
        Order_by:Game_order
    });
    useEffect(() => {
        const data = {
            table:　'game'
        }
        request({
            url: '/menu',
            method: 'post',
            params:data
          }).then(res => {
             console.log(res);
             setResponse(res);
        })
    },[])

    var team1 = SimpleSelect({name:"home team", items:Object.values(response.Home_team_ID), default:"All"});
    var team2 = SimpleSelect({name:"away team", items:Object.values(response.Away_team_ID), default:"All"});
    var order = SimpleSelect({name:"sort by", items:Object.values(response.Order_by).slice(1), default:Object.values(response.Order_by)[0]});
    var fav = SimpleSelect({name:"display", items:["only favorite"], default:"All"})
    var button =  SearchButton({value:{team1:team1[1], team2:team2[1], order:order[1], fav:fav[1]}, type:"game", selection:response});
    //var button =  SearchButton({value:{'table':'Player', 'Columns':'All'}, type:"game"});
    return (
        <div>
            {team1[0]}
            {team2[0]}
            {order[0]}
            {/* {fav[0]} */}
            {button}
        </div>
    )
}

export default GameSelect;