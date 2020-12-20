const Table = props => {
    return (
        <ul>
            {props.data.map(item => (<li>{item}</li>))}
        </ul>
    )
};



// function Table2(props){

// }

export default Table;