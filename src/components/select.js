import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



function SimpleSelect(props) {
  //var ItemCount = props.items.length - 1;
  var c = 1;
  const classes = useStyles();
  //每個選單都會來讀這個值，並且在改變時呼叫改變這個值的函數
  const [V, setValue] = React.useState('');

  //改變時呼叫這個函數
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return [(
    <FormControl className={classes.formControl}>
    <InputLabel shrink id="select-label">{props.name}</InputLabel>
    <Select
        labelId="select-label"
        id="select"
        value={V}
        onChange={handleChange}
        displayEmpty
    >
        <MenuItem value="">
        <em>{props.default}</em>
        </MenuItem>
        {props.items.map((item) => (
            <MenuItem value={c++}>{item}</MenuItem>
        ))}
    </Select>
    </FormControl>
  ),
  V
  ];
}

export default SimpleSelect;