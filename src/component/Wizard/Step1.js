import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addHomeInfo } from './../../ducks/reducer';

class Step1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.payloadState,
            zipcode: this.props.zipcode
        };
    };

    handleNameInput = (value) => {
        this.setState({
            name:value
        })
        // console.log(1,value)
    };
    handleAddressInput = (value) => {
        this.setState({
            address: value
        })
        // console.log(2,value)
    };
    handleCityInput = (value) => {
        this.setState({
            city: value
        })
        // console.log(3,value)
    };
    handleStateInput = (value) => {
        this.setState({
            state: value
        })
        // console.log(4,value)
    };
    handleZipcodeInput = (value) => {
        this.setState({
            zipcode: value
        })
        // console.log(5,value)
    };

    componentDidMount = () => {
        // console.log(6,'mounted')
        const {name,address,city,state,zipcode,image}=this.props
        console.log(2222,image)
        this.props.addHomeInfo(name,address,city,state,zipcode)

    }

    handleNext () {
        const {name,address,city,state,zipcode} = this.state;
        this.props.addHomeInfo(name,address,city,state,zipcode);
        this.props.history.push('/wizard/step2')
    }

    render() {
        const {name,address,city,state,zipcode} = this.state
        // console.log(11111,name,address,city,state,zipcode)
        return (
            <div>
                <div className="input-container">
                    <div className="input-values">
                        <p>Property Name</p>
                        <input
                            onChange={(e)=>this.handleNameInput(e.target.value)}
                            value={name}
                            type="text"
                        />
                    </div>
                    <div className="input-values">
                            <p>Address</p>
                            <input 
                                className="address-image-amount-input"
                                onChange={(e)=>this.handleAddressInput(e.target.value)}
                                value={address}
                                type="text"
                            />
                    </div>
                    <div className="city-state-zipcode-container">
                        <div className="input-values">
                            <p>City</p>
                            <input
                                onChange={(e)=>this.handleCityInput(e.target.value)}
                                value={city}
                                type="text"
                            />
                        </div>
                        <div className="input-values">
                            <p >State</p>
                            <input
                                onChange={(e)=>this.handleStateInput(e.target.value)}
                                value={state}
                                type="text"
                            />
                        </div>
                        <div className="input-values">
                            <p>Zipcode</p>
                            <input
                                className="zipcode-input"
                                onChange={(e)=>this.handleZipcodeInput(e.target.value)}
                                value={zipcode}
                                placeholder="0"
                                type="integer"
                            />
                        </div>
                    </div>
                </div>
                <div className="next-button-container">
                    <button className="next-button" onClick={()=>this.handleNext(name,address,city,state,zipcode)}>Next Step</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    // console.log(987,reduxState)
    // const { name, address, city, payloadState:state, zipcode } = reduxState
    // console.log(9999,reduxState.payloadState)
    return {
        name:reduxState.name,
        address:reduxState.address,
        city:reduxState.city,
        payloadState:reduxState.payloadState,
        zipcode:reduxState.zipcode,
        image:reduxState.image
    }
}

export default connect(mapStateToProps, { addHomeInfo })(Step1)