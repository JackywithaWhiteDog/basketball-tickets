import SearchButton from "./search";
import React from 'react';
import TextField from '@material-ui/core/TextField';

function SQLSelect(){

    const [text, setText] = React.useState("");
    var button =  SearchButton({value:text, type:"sql"});

    const handleChange = (event) => {
        setText(event.target.value);
  };
    //var button =  SearchButton({value:{'table':'Player', 'Columns':'All'}, type:"game"});
    return (
        <div>
            <TextField id="sql" onChange={handleChange} label="SQL" fullWidth />
            {button}
        </div>
    )
}

export default SQLSelect;