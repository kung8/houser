import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import House from '../House/House';

class Dashboard extends Component {
    constructor(){
        super();

        this.state={
            houses:[]
        }

    }

    componentDidMount(){
        this.getHouses()
    }

    getHouses=()=>{
        axios.get('/api/houses').then(houses=>{
            this.setState({
                houses:houses.data
            })
        })
    }

    render() {
        const {houses} = this.state;
        let houseArray = houses.map(house =>{
            return (
                <House
                key={house.id}
                house={house}
                />
            )
        })
        return (
            <div>
                <Link to='/wizard'>
                    <button>Add New Property</button>
                </Link>
                {houseArray}
            </div>
            
        )
    }
}

export default Dashboard