// const Table = props => {
//     return (
//         <ul>
//             {props.data.map(item => (<li>{item}</li>))}
//         </ul>
//     )
// };



//  function Table2(props){

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
import BuyButton from './buyTicket';

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

function BasicTable(props) {
  const classes = useStyles();
  var AttributeCount = props.title.length - 1;
  console.log(AttributeCount);

  return (
    <TableContainer className={props.TableStyle} component={Paper}>
      <Table stickyHeader className={classes.table}>
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
            <TableRow hover key={row[0]}>
              <TableCell component="th" scope="row">
                {row[0]}
              </TableCell>
              {row.slice().splice(1, AttributeCount).map((cell) => (
                  <TableCell align="right">{cell}</TableCell>
              ))}
              {
                props.checkbox && 
                <TableCell align="right">
                  <FavoriteCheckbox name={row[0]}/>
                </TableCell>
              }
              {
                props.button &&
                <TableCell align="right">
                  <BuyButton value={row[0]}/>
                </TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;