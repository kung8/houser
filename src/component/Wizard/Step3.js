import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Step2 extends Component {
    constructor (){
        super();

        this.state = {
            monthlyMortgageAmount:"",
            desiredMonthlyRent:""
           
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
                    <input 
                        id="monthlyMortgageAmount" 
                        onChange={this.handleInput}
                        value={this.state.monthlyMortgageAmount}
                        placeholder='0'
                        type="integer"
                    />
                    <input 
                        id="desiredMonthlyRent" 
                        onChange={this.handleInput}
                        value={this.state.desiredMonthlyRent}
                        placeholder='0'
                        type="integer"
                    />
                    
                    <Link to="/wizard/step2">
                        <button>Previous Step</button>
                    </Link>
                   
                    <Link to="/">
                        <button onClick={()=>this.addHouse()}>Complete</button>
                    </Link>

                    
            </div>
        )
    }
}

export default Step2