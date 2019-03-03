import React from 'react';

function House (props) {
    // console.log(7777,props.house)
    return(
        
            <div className="house-box-container">
                <div className="house-box">
                    <br/>
                    <div className="display-houses-info">
                        <div>
                            <img src={props.house.image} alt="house pic"/>
                        </div>
                        <div>
                            <p>Name: {props.house.name}</p>
                            <p>Address: {props.house.address}</p>
                            <p>City: {props.house.city}</p>
                            <p>State: {props.house.state}</p>
                            <p>Zipcode: {props.house.zipcode}</p>
                        </div>
                        <div>
                            <p>Monthly Mortgage: ${props.house.monthly_morgage_amount}</p>
                            <p>Monthly Rent: ${props.house.desired_rent}</p>
                        </div>    
                            <button className="dashboard-delete-button" onClick={()=>props.deleteHouse(props.house.id)}>X</button>
                    </div>   
                </div>
            </div>
            
    )
}

export default House