import React from 'react';

function House (props) {
    console.log(7777,props.house)
    return(
        <div>
            <img src={props.house.image} alt="house pic"/>
            <p>{props.house.name}</p>
            <p>{props.house.address}</p>
            <p>{props.house.city}</p>
            <p>{props.house.state}</p>
            <p>{props.house.zipcode}</p>
            <p>{props.house.monthly_morgage_amount}</p>
            <p>{props.house.desired_rent}</p>
            <button onClick={()=>props.deleteHouse(props.house.id)}>Delete</button>
            <br/>
        </div>
    )
}

export default House