import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import House from '../House/House';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            houses: []
        }

    }

    componentDidMount() {
        this.getHouses()
    }

    getHouses = () => {
        axios.get('/api/houses').then(houses => {
            console.log(5555,houses)
            this.setState({
                houses: houses.data
            })
        })
    };

    deleteHouse = (id) => {
        axios.delete(`/api/house/${id}`).then(houses => {
            this.setState({
                houses: houses.data
            });
            this.getHouses();
        }
            // console.log('this worked!')
        )
    };

    handleAddReroute=()=>{
        this.props.history.push('/wizard/step1')
    }

    render() {
        const { houses } = this.state;
        let houseArray = houses.map(house => {
            return (
                <House
                    key={house.id}
                    house={house}
                    deleteHouse={this.deleteHouse}
                />
            )
        })
        return (
            <div className='container'>
                    <div className="dash-header">
                        <p>Dashboard</p>
                        <button className="add-new-property-button" onClick={this.handleAddReroute}>Add New Property</button>
                    </div>
                    <div className="line-break">
                        <p>------------------------------------------------------------------------------------------------------------</p>
                    </div>
                    <div className="text-beneath-line">
                        <p>Home Listings</p>
                    </div>    
                    
                    <div>
                        {houseArray}
                    </div> 
            </div>

        )
    }
}

export default Dashboard