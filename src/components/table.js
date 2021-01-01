<<<<<<< HEAD
// const Table = props => {
//     return (
//         <ul>
//             {props.data.map(item => (<li>{item}</li>))}
//         </ul>
//     )
// };



//  function Table2(props){
=======
const Table = props => {
    return (
        <ul>
            {props.data.map(item => (<li key={item}>{item}</li>))}
        </ul>
    )
};


// function Table2(props){
>>>>>>> c7ddd1a90b6d02945e73fd0f4b461aca32f3ab25

//  }

// export default Table;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';    
import FavoriteCheckbox from './checkBox';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function BasicTable(props) {
  const classes = useStyles();
  var AttributeCount = props.title.length - 1;
  console.log(AttributeCount);


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{props.title[0]}</TableCell>
            {props.title.slice().splice(1,AttributeCount).map((cell) => (
                <TableCell align="right">{cell}</TableCell>
            ))

            }
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row[0]}>
              <TableCell component="th" scope="row">
                {row[0]}
              </TableCell>
              {row.slice().splice(1, AttributeCount).map((cell) => (
                  <TableCell align="right">{cell}</TableCell>
              ))}
              <TableCell align="right">
                <FavoriteCheckbox name={row[0]}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;