import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addFinance, cancelAdd } from './../../ducks/reducer';

class Step3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            monthlyMortgageAmount: '',
            desiredMonthlyRent: ''

        };
    };

    componentDidMount () {
        // this.props.addFinance()
    };

    handleMortgageInput = (value) => {
        this.setState({
            monthlyMortgageAmount: value
        });
    };
    handleRentInput = (value) => {
        this.setState({
            desiredMonthlyRent: value
        });
    };

    handlePrevious = () => {
        // this.handleMortgageInput()
        // this.handleRentInput()
        const { monthlyMortgageAmount, desiredMonthlyRent } = this.state;
        this.props.addFinance(monthlyMortgageAmount,desiredMonthlyRent)
        this.props.history.push('/wizard/step2')
    }

    addHouse = () => {
        const { name, address, city, zipcode, image } = this.props;
        const { monthlyMortgageAmount, desiredMonthlyRent } = this.state;
        let state = this.props.payloadState;
        // console.log(6574,state)
        axios.post('/api/house', { name, address, city, state, zipcode, image, monthlyMortgageAmount, desiredMonthlyRent }).then(houses => {
            // console.log(1234,houses.data)
            this.props.history.push('/')
            this.props.cancelAdd()
            // console.log(this.props.state)
        })
    }


    render() {
        const {name,address,city,payloadState,zipcode,image} = this.props;
        // console.log(111122, image)
        const {monthlyMortgageAmount,desiredMonthlyRent} =this.state;
        // console.log(333333,name,address,city,payloadState,zipcode,image,monthlyMortgageAmount,desiredMonthlyRent)
        return (
            <div>
                <input
                    onChange={e=>this.handleMortgageInput(e.target.value)}
                    value={this.state.monthlyMortgageAmount}
                    placeholder='0'
                    type="integer"
                />
                <input
                    onChange={e=>this.handleRentInput(e.target.value)}
                    value={this.state.desiredMonthlyRent}
                    placeholder='0'
                    type="integer"
                />

                <button onClick={()=>this.handlePrevious(desiredMonthlyRent,monthlyMortgageAmount)}>Previous Step</button>

                <button onClick={()=>this.addHouse(name,address,city,payloadState,zipcode,image,monthlyMortgageAmount,desiredMonthlyRent)}>Complete</button>

            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    console.log(99999,reduxState)
    const { monthlyMortgageAmount, desiredMonthlyRent, name, address, city, payloadState, zipcode, image } = reduxState
    // console.log(1111,image)
    return {
        monthlyMortgageAmount,
        desiredMonthlyRent,
        name, 
        address, 
        city, 
        zipcode, 
        payloadState, 
        image
    }
}

export default connect(mapStateToProps, { addFinance, cancelAdd })(Step3)