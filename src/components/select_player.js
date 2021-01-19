import SimpleSelect from "./select";
import SearchButton from "./search";
import { Grid } from '@material-ui/core'
import {Player_pos, Player_team, Player_order} from "./data"
import { useEffect } from "react";
import request from '../utils/request'
import React from 'react';

function PlayerSelect(props){

    const [response, setResponse] = React.useState({
        Position: Player_pos,
        Team: Player_team,
        Order_by: Player_order
    });
    useEffect(() => {
        const data = {
            table:　'player'
        }
        request({
            url: '/menu',
            method: 'post',
            params: data
          }).then(res => {
            setResponse(res);
        })
    },[])

    var pos = SimpleSelect({name:"position", items:Object.values(response.Position), default:"All"});
    var team = SimpleSelect({name:"team", items:Object.values(response.Team), default:"All"});
    var order = SimpleSelect({name:"sort by", items:Object.values(response.Order_by).slice(1), default:Object.values(response.Order_by)[0]});
    var fav = SimpleSelect({name:"display", items:["only favorite"], default:"All"})
    var button =  SearchButton({value:{pos:pos[1], team:team[1], order:order[1], fav:fav[1]}, type:"player", selection:response});
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