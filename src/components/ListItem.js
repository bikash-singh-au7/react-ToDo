import React from 'react';

const ListItem = (props) => {
    const {id, value, selectHandler} = props
    return(
        <li 
            className="list-group-item" 
            key={`id-${id}`}
        > 
        {value}
        <span className="float-right btn btn-danger rounded-0" onClick={()=>{
            selectHandler(id);
        }}>X</span> 
        
        </li>
    )
}


export default ListItem;