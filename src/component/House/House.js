import React from 'react';

function House (props) {
    return(
        <div>
            <p>{props.house.name}</p>
            <p>{props.house.address}</p>
            <p>{props.house.city}</p>
            <p>{props.house.state}</p>
            <p>{props.house.zipcode}</p>
            <button onClick={()=>props.deleteHouse(props.house.id)}>Delete</button>
            <br/>
        </div>
    )
}

export default House