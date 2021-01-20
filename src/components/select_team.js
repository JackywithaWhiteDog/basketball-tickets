import SimpleSelect from "./select";
import SearchButton from "./search";
import { Grid } from '@material-ui/core'
import {Team_order} from "./data"
import { useEffect } from "react";
import request from '../utils/request'
import React from 'react';

function TeamSelect(){

    const [response, setResponse] = React.useState({
        Order_by:Team_order
    });
    useEffect(() => {
        const data = {
            table:　'team'
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

    var order = SimpleSelect({name:"sort by", items:Object.values(response.Order_by).slice(1), default:Object.values(response.Order_by)[0]});
    var fav = SimpleSelect({name:"display", items:["only favorite"], default:"All"})
    var button =  SearchButton({value:{order:order[1], fav:fav[1]}, type:"team", selection:response});
    return (
        <Grid
            container
            alignItems="flex-end"
        >
            {order[0]}
            {/* {fav[0]} */}
            {button}
        </Grid>
    )
}

export default TeamSelect;