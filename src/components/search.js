import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import request from '../utils/request'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles({
    button:{
        margin:8,
    },
})

function clicked(value, dispatch) {
    const attr = value[0];
    const type = value[1];
    const selection = value[2];
    if(type === "game")
    {
        let team1 = 0;
        let team2 = 0;
        let order = 0;
        let fav = attr.fav;
        if(attr.team1 === "")
        {
            team1 = "All";
        }
        else
        {
            team1 = Object.keys(selection.Home_team_ID)[attr.team1-1];
        }
        if(attr.team2 === "")
        {
            team2 = "All";
        }
        else
        {
            team2 = Object.keys(selection.Away_team_ID)[attr.team2-1]
        }
        if(attr.order === "")
        {
            order = Object.keys(selection.Order_by)[0];
        }
        else
        {
            order = Object.keys(selection.Order_by)[attr.order]
        }

        const data = {
            table:"game",
            query:{
                Column:"All",
                Home_team:team1,
                Away_team:team2,
                Order_by:order
            }
        }
        console.log(data)
        request({
            url: '/data',
            method: 'post',
            params: data
          }).then(res => {
            dispatch({ type: 'game/setGame',
                       payload: {title:res.Column_names, 
                                 rows:res.Data}
            })
            console.log(res);
        })
        
        console.log([team1,
                     team2,
                     order,
                     fav]);
    }
    else if(type === "player")
    {
        let pos = 0;
        let team = 0;
        let order = 0;
        let fav = attr.fav;
        if(attr.pos === "")
        {
            pos = "All";
        }
        else
        {
            pos = Object.keys(selection.Position)[attr.pos-1];
        }
        if(attr.team === "")
        {
            team = "All";
        }
        else
        {
            team = Object.keys(selection.Team)[attr.team-1]
        }
        if(attr.order === "")
        {
            order = Object.keys(selection.Order_by)[0];
        }
        else
        {
            order = Object.keys(selection.Order_by)[attr.order]
        }

        const data = {
            table:"player",
            query:{
                Column:"All",
                Position:pos,
                Team:team,
                Order_by:order
            }
        }
        console.log(data)
        request({
            url: '/data',
            method: 'post',
            params: data
          }).then(res => {
            dispatch({ type: 'player/setPlayer',
                       payload: {title:res.Column_names, 
                                 rows:res.Data}
            })
            console.log(res);
        })
        
        console.log([pos,
                     team,
                     order,
                     fav]);
    }
    else if(type === "team")
    {
        let order = 0;
        let fav = attr.fav;
        if(attr.order === "")
        {
            order = Object.keys(selection.Order_by)[0];
        }
        else
        {
            order = Object.keys(selection.Order_by)[attr.order]
        }

        const data = {
            table:"team",
            query:{
                Column:"All",
                Order_by:order
            }
        }
        console.log(data)
        request({
            url: '/data',
            method: 'post',
            params: data
          }).then(res => {
            dispatch({ type: 'team/setTeam',
                       payload: {title:res.Column_names, 
                                 rows:res.Data}
            })
            console.log(res);
        })
        
        console.log([order,
                     fav]);
    }
    else if(type === "sql")
    {
        let text = attr;
        const data = {
            table:"sql",
            query:{
                Text:text
            }
        }
        console.log(data)
        request({
            url: '/data',
            method: 'post',
            params: data
          }).then(res => {
            dispatch({ type: 'sql/setSQL',
                       payload: {title:res.Column_names, 
                                 rows:res.Data}
            })
            console.log(res);
        })
    }
}

function SearchButton(props) {
    const classes = useStyles();
    const dispatch =  useDispatch();
    return(
            <Button className={classes.button} variant="contained" onClick={() => { clicked([props.value, props.type, props.selection], dispatch) }}>
                search
            </Button>
    )
}

export default SearchButton;