import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
    constructor (){
        super();

        this.state = {
            name:"",
            address:"",
            city:"",
            state:"",
            zipcode:""
        }
    }

    handleInput=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    };

    addHouse=()=>{
        const {name,address,city,state,zipcode} = this.state
        axios.post('/api/house',{name,address,city,state,zipcode}).then(houses=>{
            // console.log(houses.data)
            
        })
    }


    render() {
        return (
            <div>
                <Link to="/">
                    <button>Cancel</button>
                </Link>
                    <input 
                        id="name" 
                        onChange={this.handleInput}
                        value={this.state.name}
                        placeholder="Name"
                        type="text"
                    />
                    <input 
                        id="address" 
                        onChange={this.handleInput}
                        value={this.state.address}
                        placeholder="Address"
                        type="text"
                    />
                    <input 
                        id="city" 
                        onChange={this.handleInput}
                        value={this.state.city}
                        placeholder="City"
                        type="text"
                    />
                    <input 
                        id="state" 
                        onChange={this.handleInput}
                        value={this.state.state}
                        placeholder="State"
                        type="text"
                    />
                    <input 
                        id="zipcode" 
                        onChange={this.handleInput}
                        value={this.state.zipcode}
                        placeholder="Zipcode"
                        type="text"
                    />
                    <Link to="/">
                        <button onClick={()=>this.addHouse()}>Complete</button>
                    </Link>
            </div>
        )
    }
}

export default Wizard