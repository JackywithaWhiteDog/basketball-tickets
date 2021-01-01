import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

function clicked(props){
  alert([props.name, props.state])
}

function FavoriteCheckbox(props) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        onClick={()=>{clicked({name:props.name, state:!checked})}}
      />
    </div>
  );
}

export default FavoriteCheckbox;